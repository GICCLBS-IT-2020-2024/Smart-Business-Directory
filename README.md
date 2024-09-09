

# Business Consulting Platform with AI Chatbot

## Overview

This platform is designed to provide personalized business advice and recommendations to users based on their interests, skills, and available investment. The system leverages an **AI-powered Chatbot** that offers tailored business ideas from a wide range of categories, helping users make informed decisions. 

Additionally, the platform features a **blog section** with insightful articles and resources on various business topics to support users in their entrepreneurial journey.

## Features

- **AI Chatbot**: Interactive chatbot that offers personalized business recommendations.
- **Business Categories**: A wide range of business types, including:
  - Farming
  - Food and Beverage
  - Digital and Online
  - Creative and Artistic
  - Education and Training
  - Health and Beauty
  - Retail and Sales
  - Services
  - Real Estate and Rentals
  - Event and Hospitality
- **MCQ-Based Questionnaire**: Helps tailor business ideas based on user preferences and skills.
- **Blog Section**: Articles on business-related topics such as growth strategies, management tips, and more.

## Business Categories

The platform includes the following business categories:
- **Farming** (e.g., Poultry Farming, Fish Farming)
- **Food and Beverage** (e.g., Coffee Shop, Catering)
- **Digital and Online** (e.g., Freelancing, E-commerce)
- **Creative and Artistic** (e.g., Graphic Design, Photography)
- **Education and Training** (e.g., Computer Training, Driving Centre)
- **Health and Beauty** (e.g., Beauty Salon, Home-Based Gym)
- **Retail and Sales** (e.g., Medical Store, Auto Spare Parts)
- **Services** (e.g., Tour Operator, House Cleaning)
- **Real Estate and Rentals** (e.g., Real Estate, Vehicle Rental)
- **Event and Hospitality** (e.g., Wedding Planners, Boutique)

## Installation

### Prerequisites

- Python 3.x
- Django
- PostgreSQL/MySQL (or any other preferred database)
- Node.js (for JWT authentication with Node backend)
- Postman (for API testing)

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourprojectname.git
   cd yourprojectname
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # For Linux/Mac
   venv\Scripts\activate      # For Windows
   ```

3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Setup the database and apply migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. Run the development server:
   ```bash
   python manage.py runserver
   ```

6. Access the platform at `http://127.0.0.1:8000`.

## Usage

- Sign up and log in to access the business recommendation feature.
- Fill out the **MCQ-based questionnaire** to receive personalized business suggestions.
- Chat with the **AI Chatbot** for business-related questions.
- Explore the **blog** for useful business tips and articles.

## AI Chatbot Integration

The platform’s chatbot integrates with **Google Generative AI (Gemini API)** to provide smart, contextual responses. The chatbot can guide users through various business categories and offer tailored suggestions based on their input.

## Contributing

Feel free to fork this repository and submit pull requests. All contributions are welcome!

## License

This project is licensed under the MIT License.

