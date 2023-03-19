import { getGPTResponse } from './openai';

const { Client } = require('whatsapp-web.js');


const qrcode = require('qrcode-terminal');
const client = new Client();

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



