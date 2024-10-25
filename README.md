# Business Consulting Platform with AI Chatbot

## Overview

This platform provides personalized business advice and recommendations based on user interests, skills, and available investment. It leverages an **AI-powered Chatbot** that offers tailored business ideas from various categories to support informed decision-making.

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
- Node.js (for frontend and Node backend)
- Postman (for API testing)

### Setup Instructions

#### Clone the repository

\`\`\`bash
git clone https://github.com/GICCLBS-IT-2020-2024/Smart-Business-Directory.git
cd Smart-Business-Directory
\`\`\`

#### Django Backend (biz-backend)

1. **Create a virtual environment and activate it**:

   \`\`\`bash
   python -m venv venv
   source venv/bin/activate # For Linux/Mac
   venv\Scripts\activate # For Windows
   \`\`\`

2. **Install the dependencies**:

   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

3. **Setup the database and apply migrations**:

   \`\`\`bash
   python manage.py makemigrations
   python manage.py migrate
   \`\`\`

4. **Run the Django development server**:

   \`\`\`bash
   python manage.py runserver
   \`\`\`

5. Access the platform’s backend at \`http://127.0.0.1:8000\`.

#### React Frontend

1. Navigate to the frontend directory:

   \`\`\`bash
   cd frontend
   \`\`\`

2. Install dependencies:

   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:

   \`\`\`bash
   npm run dev
   \`\`\`

4. Access the frontend at \`http://localhost:3000\`.

#### Node.js Backend

1. Navigate to the backend directory:

   \`\`\`bash
   cd backend
   \`\`\`

2. Install dependencies:

   \`\`\`bash
   npm install
   \`\`\`

3. Start the backend server:

   \`\`\`bash
   npm run dev
   \`\`\`

4. The Node backend will be running on the specified port (usually \`http://localhost:5000\`).

## Usage

- Sign up and log in to access the business recommendation feature.
- Complete the **MCQ-based questionnaire** to receive personalized business suggestions.
- Chat with the **AI Chatbot** for business-related questions.
- Explore the **blog** for useful business tips and articles.

## AI Chatbot Integration

The platform’s chatbot integrates with **Google Generative AI (Gemini API)** to provide smart, contextual responses. The chatbot can guide users through various business categories and offer tailored suggestions based on their input.

## Contributing

Feel free to fork this repository and submit pull requests. All contributions are welcome!

## License

This project is licensed under the MIT License.
