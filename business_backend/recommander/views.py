from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import pickle
import os

# Get the absolute path to the root of the project directory
current_dir = os.path.dirname(os.path.abspath(__file__))
# Construct the path to the model file
model_path = os.path.join(current_dir, 'business_recommendation_model.pkl')

# Load the model once when the server starts
with open(model_path, 'rb') as model_file:
    model = pickle.load(model_file)

# Construct the path to the encoder file
encoder_path = os.path.join(current_dir, 'label_encoder.pkl')

# Load the encoder
with open(encoder_path, 'rb') as encoder_file:
    label_encoder = pickle.load(encoder_file)

class RecommendBusinessView(APIView):
    def post(self, request, *args, **kwargs):
        if request.method == 'POST':
            try:
                # Extract data from the request
                data = request.data
                
                # Convert the data into the required format
                new_data = [[
                    data['environment'],
                    data['investment'],
                    data['time'],
                    data['managing_level'],
                    data['risk_tolerance'],
                    data['interest'],
                    data['prefer_working'],
                    data['work_life_balance'],
                    data['market'],
                    data['business_start'],
                    data['education'],
                    data['location']
                ]]

                # Predict the business name using the model
                predicted_business_name = label_encoder.inverse_transform(model.predict(new_data))

                # Get the top 3 predictions
                probabilities = model.predict_proba(new_data)
                top_3_indices = probabilities.argsort()[0][-3:][::-1]
                top_3_predictions = label_encoder.inverse_transform(top_3_indices)

                # Respond with the prediction results
                response_data = {
                    'predicted_business_name': predicted_business_name[0],
                    'top_3_predictions': list(top_3_predictions)
                }
                return Response(response_data, status=status.HTTP_200_OK)

            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
