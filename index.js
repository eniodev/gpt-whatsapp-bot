const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();


//OpenAI Configuration
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


//Querying from Davinci 
async function getGPTResponse(prompt) {
    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 0,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    stop: [" Human:", " AI:"],
    })
    
    if(response) {
        return `[Davinci] ${response.data.choices[0].text}`;
    }


}




//Bot connection
try {

    // generating a QR Code for the client
    client.on('qr', qr => { 
        qrcode.generate(qr, {small: true});
    });  

    client.on('ready', async () => {
        console.log('Client is ready!');
    });

    client.on('message', message => {

       (async () => {
        if(!(message.broadcast || message.isStatus || message.author !== undefined)) {
        //    console.log(`${message.from} : ${message.body}`);
            client.sendMessage(message.from, await getGPTResponse(message.body));
           
        }
       })()
    });

} catch (err) {
    console.log(err)
} 

client.initialize();



