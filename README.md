# Kaskara AI API Framework (Demo Kickstart) 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



Content Generation API
This Python script utilizes the Flask framework to create a simple web service that interacts with the Google Cloud AI Platform's content generation API. The API is designed to generate content based on a given prompt and provides a health check endpoint for monitoring purposes.

Prerequisites
Python 3
Flask library (pip install flask)
Requests library (pip install requests)
Setup
Obtain the necessary credentials:

url: The endpoint URL for the AI Platform content generation API.

token: you will need an authorization token. This can be gotten from your GCP or GCP CLI if that has been configured on your system 

Install the required Python libraries.

Set up the environment variables:

API_HOST: Host IP for the Flask app (default: "0.0.0.0").
API_PORT: Port for the Flask app (default: "5000").


Usage
Run the script to start the Flask app.

Access the health check endpoint:

Endpoint: /health-checks
Method: POST
Request Body: JSON with a "prompt" attribute.
The app sends a request to the content generation API with the provided prompt and returns a list of lists contain dictionaries as a JSON response. The response are in a field called text. Loop through the response and retrieve the values of the ‘text’ field to create a list of important yearly health checks.

    I
