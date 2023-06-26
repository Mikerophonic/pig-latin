//Business Logic

function pigLatin(text) {
    
    const vowels = ["a", "e", "i", "o", "u"];
    const nonABCChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const ending = "ay"
    const processedText = text.trim().toLowerCase();


    if (processedText.length === 0) {
        return "Please enter a word or sentence."
    } 

    

    let textArray = processedText.split(" ");
    
    textArray.forEach(function(word, index) {
        const firstChar = word.charAt(0);
        const secondChar = word.charAt(1);
        const thirdChar = word.charAt(2);
        if (nonABCChars.includes(firstChar)) {
            pigWord = word;
        } 
        else if (vowels.includes(firstChar)) {
            pigWord = word + "w" + ending;
        } 
        else if (firstChar === "q" && secondChar === "u") {
            pigWord = word.slice(2) + firstChar + secondChar + ending;
        } 
        else if (!vowels.includes(firstChar) && secondChar === "q" && thirdChar === "u") {
            pigWord = word.slice(3) + firstChar + secondChar + thirdChar + ending;
        }
        else if (!vowels.includes(firstChar) && !vowels.includes(secondChar) && !vowels.includes(thirdChar)) {
            pigWord = word.slice(3) + firstChar + secondChar + thirdChar + ending;
        }
        else if (!vowels.includes(firstChar) && !vowels.includes(secondChar)) {
            pigWord = word.slice(2) + firstChar + secondChar + ending;
        } else {
            pigWord = word.slice(1) + firstChar + ending;
        }
        return textArray[index] = pigWord
    });
    textArray = textArray.join(" ");
    return textArray.charAt(0).toUpperCase() + textArray.slice(1);
}



/* //UI Logic
let text = document.querySelector("textarea").value;
let p = document.querySelector("p");
let button = document.querySelector("button");

button.addEventListener("click", function (event) {
    p.innerText = pigLatin(text);
});
 */