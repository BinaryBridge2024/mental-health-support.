document.getElementById('sendButton').addEventListener('click', async () => {
    const userInput = document.getElementById('userInput').value;
    
    if (!userInput) {
        alert("Please enter a message.");
        return;
    }

    const responseText = document.getElementById('responseText');
    
    try {
        const response = await fetch('http://localhost:3000/mental-health-support', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userInput })
        });

        const data = await response.json();
        responseText.textContent = data.reply || "Sorry, I couldn't get a response.";
    } catch (error) {
        console.error('Error:', error);
        responseText.textContent = "An error occurred while fetching the response.";
    }

    // Clear the input field
    document.getElementById('userInput').value = '';
});
