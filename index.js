import { getGPTResponse } from './openai.js';
import { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

const client = new Client();

//Bot connection config
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

/**Test the prompt in the console \n 
 * before shipping it to your whatsapp account
 * 
 * (async () => {
    console.log(await getGPTResponse('hi there! who am i talking to ?'));
})();
 */


client.initialize();



