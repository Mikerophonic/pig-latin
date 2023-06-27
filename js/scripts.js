//Business Logic

function pigLatin(text) {

    const vowels = ["a", "e", "i", "o", "u"];
    const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const ending = "ay"
    const processedText = text.trim().toLowerCase();

    if (processedText.length === 0) {                           //checks for empty string
        return "Please enter a word or sentence." 
    } 
    
    let textArray = processedText.split(" ");                   //creates array of words from inputted text
    let pigArray = [];

    textArray.forEach(function(word) {                          //loops through each word, modifying it according to Pig Latin rules.
        const firstChar = word.charAt(0);
        const secondChar = word.charAt(1);
        const thirdChar = word.charAt(2);
        if (numberChars.includes(firstChar)) {
            pigWord = word;
        } 
        else if (vowels.includes(firstChar)) {
            pigWord = word + "w" + ending;
        } 
        else if (firstChar === "q" && secondChar === "u") {
            pigWord = word.slice(2) + word.slice(0,2) + ending;
        } 
        else if (!vowels.includes(firstChar) && secondChar === "q") {
            pigWord = word.slice(1) + word.slice(0,1) + ending;
        }
        else if (!vowels.includes(firstChar) && !vowels.includes(secondChar) && !vowels.includes(thirdChar)) {
            pigWord = word.slice(3) + word.slice(0,3) + ending;
        }
        else if (!vowels.includes(firstChar) && !vowels.includes(secondChar)) {
            pigWord = word.slice(2) + word.slice(0,2) + ending;
        } else {
            pigWord = word.slice(1) + word.slice(0,1) + ending;
        }
        pigArray.push(pigWord);                                   //pushes each modified word into new array
    });

    let pigText = pigArray.join(" ")                              //joins new array back into new string
    pigText = pigText.charAt(0).toUpperCase() + pigText.slice(1); //capitalizes first letter of string
    return pigText;                                               //returns final, translated text
}



//UI Logic

let button = document.querySelector("button");

button.addEventListener("click", function() {
    let inputText = document.getElementById("inputTextarea").value;
    let outputText = pigLatin(inputText);
    document.getElementById("outputDiv").textContent = outputText;
    let img = document.createElement("img");
    img.src="images/pig.png";
    img.style.width="50%"
    document.querySelector("div").appendChild(img);
});
