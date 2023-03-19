import { config } from 'dotenv';
config();


//OpenAI Configuration
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

//Querying from Davinci 
export const getGPTResponse = async (prompt) => {
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



