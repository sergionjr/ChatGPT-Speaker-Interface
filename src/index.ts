

// import a local file called gpt.ts
import * as GPT from './gpt.ts';


async function main() {

    const gpt = new GPT.GPT();

    

    console.log(gpt.oai.listEngines());

    await gpt.response();
}


// call the main function
main(); 