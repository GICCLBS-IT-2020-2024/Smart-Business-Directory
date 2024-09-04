from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render, redirect
import requests
from requests.exceptions import ConnectionError, Timeout
import logging
logger = logging.getLogger(__name__)


def generate_response(user_input):
    # chatbot ka code idhe ana ha
       return "hello how can i help you"



class ChatbotView(APIView):
    def post(self, request):
        # Extract JWT token from the 'Authorization' header
        token = request.headers.get('Authorization')
        
        if not token:
            return Response({'error': 'Token not provided'}, status=status.HTTP_401_UNAUTHORIZED)
        
        # Verify the token with Node.js backend
        if not self.verify_token(token):
            return Response({'error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)
        
        # Token is valid, process the chat request
        user_input = request.data.get('message')
        response = generate_response(user_input)
        return Response({'response': response}, status=status.HTTP_200_OK)

    

def verify_token(self, token):
    verification_url = 'https://node-backend-url/verify-token'
    headers = {'Authorization': token}
    
    try:
        response = requests.get(verification_url, headers=headers, timeout=5)
        return response.status_code == status.HTTP_200_OK
    except ConnectionError:
        logger.error("Connection error during token verification.")
        return False
    except Timeout:
        logger.error("Request timed out during token verification.")
        return False
    except requests.RequestException as e:
        logger.error(f"Token verification failed: {e}")
        return False


