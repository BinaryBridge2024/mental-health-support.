<<<<<<< HEAD
# Mental Health Support Chatbot Documentation

## Overview

**Mental Health Support Chatbot** is a simple and intuitive chatbot designed to assist users with mental health queries, provide guidance, and offer support. It can engage in conversations, give helpful tips on mindfulness, connect users with community resources, and collect feedback to improve future interactions.

---

## Features

- Responds to user queries on mental health topics such as mindfulness, seeking help, and community support.
- Collects and stores feedback to enhance the quality of interactions.
- Allows users to engage with the chatbot via a user-friendly web interface.
- Designed for scalability, allowing future integration with databases and deployment on cloud platforms.

---

## API Documentation

### 1. `mental-health-support` (POST)
This endpoint processes user input and returns a response from the chatbot.

#### **Request Format:**
- **Method:** `POST`
- **URL:** `http://localhost:3000/mental-health-support`
- **Headers:** 
  - `Content-Type: application/json`
  
#### **Request Body:**
```json
{
  "userInput": "Your message here"
}
```

#### **Response Format:**
```json
{
  "reply": "Chatbot's response here"
}
```

#### **Example Request:**
```json
{
  "userInput": "Can you help me with mindfulness tips?"
}
```

#### **Example Response:**
```json
{
  "reply": "Practicing mindfulness can help. Would you like some tips?"
}
```

### 2. `feedback` (POST)
This endpoint collects feedback from the user about the chatbot's response.

#### **Request Format:**
- **Method:** `POST`
- **URL:** `http://localhost:3000/feedback`
- **Headers:** 
  - `Content-Type: application/json`

#### **Request Body:**
```json
{
  "feedback": "positive",  // can be 'positive', 'neutral', or 'negative'
  "responseId": "12345"    // a unique identifier for the chatbot's response
}
```

#### **Response Format:**
```json
{
  "message": "Feedback received, thank you!"
}
```

#### **Example Request:**
```json
{
  "feedback": "positive",
  "responseId": "abc123"
}
```

#### **Example Response:**
```json
{
  "message": "Feedback received, thank you!"
}
```

---

## How to Run the Project

### Prerequisites:
- **Node.js** and **npm** installed on your machine.

### Steps to Install and Run:

1. **Clone the Repository:**
   ```bash
   git clone https://binarybridge2024.github.io/mental-health-support.git
   ```
2. **Install Dependencies:**
   ```bash
   cd mental-health-support-chatbot
   npm install
   ```
3. **Run the Server:**
   ```bash
   node app.js
   ```
   The server will start at `http://localhost:3000`.

4. **Run the Frontend:**
   Open the `index.html` file in your browser, or serve it through a local server (e.g., using Live Server in VS Code).

---

## Usage Instructions

1. **Access the Chatbot**: Once the server and frontend are running, navigate to the chat interface via your browser.

2. **Enter Your Name**: Start the conversation by entering your name in the input box.

3. **Ask Questions**: Type any query related to mental health. For example:
   - "Can you help me with mindfulness?"
   - "What should I do if I feel anxious?"
   - "Can you provide community support tips?"

4. **Receive Responses**: The chatbot will reply with helpful tips, resources, or questions to guide the conversation.

5. **Give Feedback**: After receiving a response, rate the helpfulness using the feedback mechanism. This helps improve the chatbot's performance.

6. **Clear the Conversation**: Use the "Clear Conversation" button to reset the chat interface.
