

// import a local file called gpt.ts
import { GPT } from './gpt';


async function main() {

    const gpt = new GPT();

    console.log(gpt.oai.listEngines());
}


// call the main function
main(); 