# Pastebin Application

A simple Pastebin clone for storing and sharing text snippets online.

## Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** Redis (for temporary storage)  
- **Other:** Nodemon (for development)

## Features

- Create, store, and retrieve text snippets  
- Temporary storage using Redis  
- RESTful API endpoints for managing pastes  

## Getting Started (Local Setup)

1. **Clone the repository**
   ```bash
   git clone (https://github.com/Ashukla011/PastetApp.git)
   cd backend

2. npm install
3. npm  start


## Persistence Layer

This application uses **Redis** as the persistence layer to store pastes temporarily.  

- Redis is an in-memory key-value store, which makes storing and retrieving text snippets very fast.  
- Data is volatile by default, so pastes may be lost if the server restarts, unless Redis persistence is configured.  
- Redis acts as the backend database for all paste operations.

