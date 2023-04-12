import * as oai from 'openai'

// create an export class called ABC that will have 
// a function that prints "Hello World"



export class GPT {

    private configuration = () => {
        return new oai.Configuration({
            apiKey: process.env.OPENAI_APIKEY,
        });
    }

    private openai = new oai.OpenAIApi(this.configuration());

    oai = new oai.OpenAIApi(this.configuration());
    

    response = async () => {
        const res = await this.openai.listEngines();
    }


    


    

    // turn the configuration function above into an arrow function




}

