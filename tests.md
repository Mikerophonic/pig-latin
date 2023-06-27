Describe: pigLatin()

Test: "It will return an error message when an empty string is entered."
Code: pigLatin("")
Expected Output: "Please enter a word or sentence."

Test: "It will not change a 'word' made up of number characters."
Code: pigLatin("12")
Expected Output: "12"

Test: "It will add 'way' to the end of a word that begins with a vowel."
Code: pigLatin("apple");
Expected Output: "appleway"

Test: "It will move the consonant to the end of a word that begins with just one consecutive consonant, and then add -ay."
Code: pigLatin("code")
Expected Output: "odecay"

Test: "It will move the two consonants to the end of a word that begins with two consecutive consonants, and then add -ay."
Code: pigLatin("crazy")
Expected Output: "azycray"

Test: "It will move the three consonants to the end of a word that begins with three consecutive consonants, and then add -ay."
Code: pigLatin("screw")
Expected Output: "ewscray"

Test: "It will move qu- to the end of a word that begins with qu-, and then add -ay."
Code: pigLatin("quick")
Expected Output: "ickquay"

Test: "It will move squ- to the end of a word that begins with squ-, and then add -ay."
Code: pigLatin("squid")
Expected Output: "idsquay"

Test: "It will work on each word in a multiple-word sentence"
Code: pigLatin("Pig Latin is hard to speak")
Expected Output: "Igpay Atinlay isway ardhay otay eakspay"

Test: "It will capitalize the first letter in the sentence." 
Code: pigLatin("This is a sentence")
Expected Output: "Isthay isway away entencesay"

Test: "It will include the original punctuation at the end of the sentence."
Code: pigLatin("This is a sentence!")
Expected Output: "Isthay isway away entencesay!"

Test: "It will keep commas at the end of words that originally have them."
Code: pigLatin("Hello, how are you?")
Expected Output: "Ellohay, owhay areway ouyay?"

Test: "It will keep the first letter of proper nouns and other capitalized letters capitalized."
Code: pigLatin("I'm Michael and I speak Pig Latin.")
Expected Output: "I'mway Ichaelmay andway Iway eakspay Igpay Atinlay."