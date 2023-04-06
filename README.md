# GPT WhatsApp Bot
This project is a simple WhatsApp chatbot that uses OpenAI's `GPT-3` to generate responses to user messages. The chatbot is built using ``Node.js`` and the WhatsApp Web API provided by whatsapp-web.js.

## Installation
- Clone the repository to your local machine using ``git clone``.
- Run npm install to install all the necessary dependencies.
- Use ``.env`` to add your OpenAI API key.
## Usage
- Run the bot using npm start.
- Scan the QR code that appears in the console using your WhatsApp mobile app.
- Send a message to the bot and wait for a response.
## Customization
- You can customize the chatbot by modifying the getGPTResponse function located in openai.js. This function uses OpenAI's GPT-3 API to generate responses to user messages. You can adjust the model, temperature, max_tokens, top_p, frequency_penalty, and presence_penalty parameters to change the way the responses are generated.

## Code Overview
### index.js
- This file contains the main logic of the chatbot.

### client
- The Client object is used to connect to the WhatsApp Web API.

### client.on('qr')
- This event is triggered when the QR code is generated. The QR code is displayed in the console and the user is prompted to scan it using their WhatsApp mobile app.

### client.on('ready')
- This event is triggered when the bot is successfully connected to the WhatsApp Web API. A message is displayed in the console to confirm that the bot is ready.

### client.on('message')
- This event is triggered when a message is received by the bot. The getGPTResponse function is called to generate a response to the message, and the response is sent back to the user.

### openai.js
- This file contains the getGPTResponse function, which is responsible for generating responses using OpenAI's GPT-3 API.

### openai.createCompletion
This method is used to generate responses using OpenAI's GPT-3 API. The prompt parameter is used to provide the input text to the API, and the other parameters are used to customize the way the response is generated.

## Conclusion
This project provides a simple example of how to build a chatbot using Node.js and OpenAI's GPT-3 API. By customizing the getGPTResponse function, you can create a chatbot that generates responses to user messages in a variety of contexts.






