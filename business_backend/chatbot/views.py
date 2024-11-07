from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render, redirect
import requests
from requests.exceptions import ConnectionError, Timeout
import logging
from langchain_google_genai import ChatGoogleGenerativeAI
from google.api_core.exceptions import ResourceExhausted
import time

logger = logging.getLogger(__name__)

# Initialize the Google Generative AI Chat model
GEMENI_API_KEY = "AIzaSyB9LeutdJ_KfVziLQpMuhPB9hqjjQCqoVo"
llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-pro",
    api_key=GEMENI_API_KEY,
    temperature=0,
    max_tokens=None,
    timeout=3000,
    max_retries=1,
)

def is_farewell(message):
    farewells = ["goodbye", "bye", "see you", "later", "take care"]
    return any(farewell in message.lower() for farewell in farewells)

# Generate chatbot response using Google Generative AI
def generate_response(user_input):
    prompt = """
    You are BizzGPT, a business counseling chatbot designed to offer personalized business advice.

    Instructions:
    Greeting and Information Gathering:

    When the user greets you, respond warmly and encourage them to specify their business type and the specific problem they want help with.
    Remind the user to include their business type in each query for context.
    Providing Advice:

    Once the user provides their business type and specific problem, deliver comprehensive, actionable advice without asking for further details.
    After giving advice, ask if they have any other problems or questions related to their business type.
    Handling Unrelated Questions:

    Respond to unrelated inquiries with:
    ”
    Response Format:

    Avoid starting replies with "hello" after the initial greeting. Maintain a conversational tone while being informative."""
    
    messages = [
        ("system", prompt),
        ("human", user_input),
    ]
    
    try:
        # Invoke the chatbot model to generate a response
        ai_msg = llm.invoke(messages)
        return ai_msg.content
    
    except ResourceExhausted as e:
        # Handle quota exhaustion
        logger.error(f"Quota exceeded: {e}")
        return "I'm currently unavailable due to high traffic. Please try again later."
    
    except Exception as e:
        # Handle other errors (e.g., timeouts)
        logger.error(f"Error generating response: {e}")
        return "There was an error processing your request. Please try again later."


class ChatbotView(APIView):
    def post(self, request):
        user_input = request.data.get('message')
        old_input=request.session.get('old_input','')
        new_input=f"previoulsy i asked aboout {old_input} now i want to know this {user_input} if my new qustion is related with old question give me answer that is related and good"
        if len(old_input)+len(user_input)>=500:
            old_input=new_input
        else:    
            old_input+=" "+user_input
        # Check if the user wants to end the conversation
        request.session['old_input'] = old_input
        if is_farewell(new_input):
            return Response({'response': "BizzGPT: Goodbye! Feel free to return if you have more questions."}, status=status.HTTP_200_OK)

        # Generate response using the chatbot model
        time.sleep(1)
        response = generate_response(new_input)
        return Response({'response': response}, status=status.HTTP_200_OK)
