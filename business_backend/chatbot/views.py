from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render, redirect
import requests
from requests.exceptions import ConnectionError, Timeout
import logging
from langchain_google_genai import ChatGoogleGenerativeAI

logger = logging.getLogger(__name__)

# Initialize the Google Generative AI Chat model
GEMENI_API_KEY = "AIzaSyAXpz7Nw-TL5sXtNbPHKKFhVB4_HR97C74"
llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-pro",
    api_key=GEMENI_API_KEY,
    temperature=0,
    max_tokens=None,
    timeout=30,
    max_retries=1,
    # other params...
)

def is_farewell(message):
    farewells = ["goodbye", "bye", "see you", "later", "take care"]
    return any(farewell in message.lower() for farewell in farewells)

# Generate chatbot response using Google Generative AI
def generate_response(user_input):
    # The prompt defines the chatbot's behavior
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
“I'm BizzGPT, a business counseling chatbot focused on business advice. Please ask about business-related topics.”
Response Format:

Avoid starting replies with "hello" after the initial greeting. Maintain a conversational tone while being informative."""
    
    messages = [
        ("system", prompt),
        ("human", user_input),
    ]
    
    # Invoke the chatbot model to generate a response
    ai_msg = llm.invoke(messages)
    return ai_msg.content


class ChatbotView(APIView):
    def post(self, request):
        # Extract JWT token from the 'Authorization' header
        # token = request.headers.get('Authorization')
        
        # if not token:
            # return Response({'error': 'Token not provided'}, status=status.HTTP_401_UNAUTHORIZED)
        
        # Verify the token with Node.js backend
        # if not self.verify_token(token):
            # return Response({'error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)
        
        # Token is valid, process the chat request
        user_input = request.data.get('message')
        
        # Check if the user wants to end the conversation
        if is_farewell(user_input):
            return Response({'response': "BizzGPT: Goodbye! Feel free to return if you have more questions."}, status=status.HTTP_200_OK)

        # Generate response using the chatbot model
        response = generate_response(user_input)
        return Response({'response': response}, status=status.HTTP_200_OK)

    
    # def verify_token(self, token):
    #     verification_url = 'https://node-backend-url/verify-token'
    #     headers = {'Authorization': token}
        
    #     try:
    #         response = requests.get(verification_url, headers=headers, timeout=5)
    #         return response.status_code == status.HTTP_200_OK
    #     except ConnectionError:
    #         logger.error("Connection error during token verification.")
    #         return False
    #     except Timeout:
    #         logger.error("Request timed out during token verification.")
    #         return False
    #     except requests.RequestException as e:
    #         logger.error(f"Token verification failed: {e}")
    #         return False
