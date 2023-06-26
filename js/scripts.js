function pigLatin(text) {
    
    const vowels = ["a", "e", "i", "o", "u"];
    const nonABCChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const ending = "ay"
    const processedText = text.trim().toLowerCase();
    let pigText = "";

    if (processedText.length === 0) {
        return "Please enter a word or sentence."
    } 

    const firstChar = processedText.charAt(0);
    const secondChar = processedText.charAt(1);
    const thirdChar = processedText.charAt(2);
    
    if (nonABCChars.includes(firstChar)) {
        pigText = text;
    } 
    else if (vowels.includes(firstChar)) {
        pigText = text + "w" + ending;
    } 
    else if (firstChar === "q" && secondChar === "u") {
        pigText = text.slice(2) + firstChar + secondChar + ending;
    } 
    else if (!vowels.includes(firstChar) && secondChar === "q" && thirdChar === "u") {
        pigText = text.slice(3) + firstChar + secondChar + thirdChar + ending;
    }
    else if (!vowels.includes(firstChar) && !vowels.includes(secondChar)) {
        pigText = text.slice(2) + firstChar + secondChar + ending;
    } else {
        pigText = text.slice(1) + firstChar + ending;
    }

return pigText;

}
