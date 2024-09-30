const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Expanded responses and community resources
let responses = {
    greeting: [
        "Hello! How can I assist you today?",
        "Hi there! What’s on your mind?",
        "Greetings! How can I help with your mental health today?"
    ],
    help: [
        "It's essential to talk about mental health. Have you considered speaking to a professional?",
        "Reaching out for help is a great first step. How can I assist?",
        "Getting help is important. Would you like information on counseling or therapy?"
    ],
    mindfulness: [
        "Mindfulness and meditation can be beneficial. Would you like some resources?",
        "Practicing mindfulness can help. Would you like some tips?",
        "Meditation apps like Headspace or Calm could be helpful. Would you like more information?"
    ],
    support: [
        "You're not alone; many people care about you. Do you want to talk about it?",
        "Support from friends and family can be vital. Who do you trust to talk to?",
        "It's okay to ask for help. Would you like tips on building a support network?"
    ],
    communitySupport: [
        "It's great to share experiences! Is there anything you'd like to share about how you've coped with mental health?",
        "You can join local support groups or online communities to connect with others who understand. Would you like more info?",
        "Communities like NAMI (National Alliance on Mental Illness) offer great resources. Would you like to know more?"
    ],
    selfCare: [
        "Self-care is crucial. Have you tried journaling, exercise, or spending time with nature?",
        "Taking time for yourself is important. Do you have any hobbies or activities that help you relax?",
        "How about some quiet time for yourself? Reading a book or a warm bath can also be effective self-care."
    ],
    anxiety: [
        "Anxiety can be tough. Have you tried grounding techniques like focusing on your breathing?",
        "It’s common to feel anxious. I can share some tips for managing anxiety if you like.",
        "Anxiety can feel overwhelming. Consider relaxation exercises or speaking to a therapist."
    ],
    stress: [
        "Stress is a common feeling. Would you like some strategies for managing it?",
        "Stress management is key. Have you considered meditation or physical activity?",
        "Stress can build up over time. Deep breathing or progressive muscle relaxation might help."
    ],
    depression: [
        "Depression can feel isolating. Reaching out to someone you trust can be helpful.",
        "It's important to seek help if you're feeling down for a long period. Would you like more information on resources?",
        "Have you talked to someone about your feelings? It might help to connect with a professional."
    ],
    
     feedbackThankYou: [
        "Thank you for your feedback! It helps us improve our support.",
        "We appreciate your feedback and are constantly working to make the service better.",
        "Your feedback means a lot to us. Thank you!"
    ]
};

// Function to get a random response based on a category
const getRandomResponse = (category) => {
    const replies = responses[category];
    return replies[Math.floor(Math.random() * replies.length)];
};


// Endpoint to handle user input and provide chatbot responses
app.post('/mental-health-support', async (req, res) => {
    const userInput = req.body.userInput.toLowerCase();
    let reply;

    // Keyword matching for responses
    if (userInput.includes('hi') || userInput.includes('hello')) {
        reply = getRandomResponse('greeting');
    } else if (userInput.includes('help')) {
        reply = getRandomResponse('help');
    } else if (userInput.includes('mindfulness') || userInput.includes('meditation')) {
        reply = getRandomResponse('mindfulness');
    } else if (userInput.includes('support')) {
        reply = getRandomResponse('support');
    } else if (userInput.includes('community')) {
        reply = getRandomResponse('communitySupport');
    } else if (userInput.includes('self-care') || userInput.includes('self care')) {
        reply = getRandomResponse('selfCare');
    } else if (userInput.includes('anxiety')) {
        reply = getRandomResponse('anxiety');
    } else if (userInput.includes('stress')) {
        reply = getRandomResponse('stress');
    } else if (userInput.includes('depression')) {
        reply = getRandomResponse('depression');
    } else {
        reply = "I'm here to help! Could you clarify what kind of support you're looking for?";
    }

    res.json({ reply });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.post('/feedback', (req, res) => {
    const { feedbackType, responseId, comment } = req.body;

    // Save feedback to a database or file for future analysis
    console.log(`Feedback received: ${feedbackType} for response ID: ${responseId}`);
    if (comment) {
        console.log(`User comment: ${comment}`);
    }
    res.json({ message: "Feedback received, thank you!" });
});
