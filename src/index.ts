
// import the openai chatgpt library


// import the openai chatgpt library
import * as chatgpt from "chatgpt";






async function main() {

    const myParams = {
        apiKey: "",
    }



    const api = new chatgpt.ChatGPTAPI(myParams);

    api.sendMessage("Hi ChatGPT. What is the weather in Austin today").then((response: any) => {
        console.log(response);
    });
}


main();