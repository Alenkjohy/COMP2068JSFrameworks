# Portfolio API - COMP 2068 Assignment 1

A RESTful API for a personal portfolio built with TypeScript and Express.

## Features
- GET endpoints for profile, about, and projects
- POST endpoint for contact messages with validation
- In-memory data storage
- Custom middleware for request logging
- Comprehensive error handling
- TypeScript for type safety

## API Endpoints

### GET /api/profile
Returns basic profile information.

### GET /api/about
Returns about me information including bio, skills, and education.

### GET /api/projects
Returns a list of portfolio projects.

### POST /api/contact
Accepts contact messages. Requires: `name`, `email`, `message`.

## Running Locally

1. Clone the repository:
```bash
git clone <url>

or

Download the code

Open terminal in the project folder

Run: npm install

Run: npm run dev

## routing
Go to: http://localhost:3030



## Example Requests

### Browser:
- http://localhost:3030/api/profile
- http://localhost:3030/api/about  
- http://localhost:3030/api/projects


## Live Deployed API
https://your-app.onrender.com  *(Replace with actual deployment URL)*