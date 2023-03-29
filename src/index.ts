

const addNumber = (a: number, b: number) => {
    return a + b;
}






// write a function that removes only the 3rd whitespace in a string
// example: "Hello   World" -> "Hello World"
const remove3rdWhitespace = (str: string) => {
    let count = 0;
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            count++;
            if (count === 3) {
                continue;
            }
        }
        newString += str[i];
    }
    return newString;
}


var myString: string = "Here is a string before whitespace";

console.log(myString)

console.log(remove3rdWhitespace(myString));