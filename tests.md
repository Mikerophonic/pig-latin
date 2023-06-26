Describe: pigLatin()

Test: "It will return an error message when an empty string is entered."
Code: pigLatin("")
Expected Output: "Please enter a word or sentence."

Test: "It will ignore words that are made up of nonalphabetical characters"
Code: pigLatin("95")
Expected Output: "95"

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("apple");
Expected Output: "appleway"

Test: "It will move the consonant plus -ay to the end of words that begin with just one consecutive consonant."
Code: pigLatin("code")
Expected Output: "odecay"

Test: "It will move the two consonants plus -ay to the end of words that begin with two consecutive consonants."
Code: pigLatin("crazy")
Expected Output: "azycray"

Test: "It will move the three consonants plus -ay to the end of words that begin with three consecutive consonants."
Code: pigLatin("screw")
Expected Output: "ewscray"

Test: "It will move qu- plus -ay to the end of words that begin with qu-.
Code: pigLatin("quick")
Expected Output: "ickquay"

Test: "It will move squ- plus -ay to the end of words that begin with squ-."
Code: pigLatin("squid")
Expected Output: "idsquay"

Test: "It will work on each word in a multiple-word sentence"
Code: pigLatin("Pig Latin is hard to speak")
Expected Output: "Igpay Atinlay isway ardhay otay eakspay."

Test:
Code: pigLatin("")
Expected Output: ""

