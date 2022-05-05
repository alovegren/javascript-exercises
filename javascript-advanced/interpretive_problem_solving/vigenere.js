/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal



result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

https://en.wikipedia.org/wiki/Tabula_recta

Problem
- Given an input string (to be encoded) and a keyword, return an encoded string according to the Vigenere cipher:
 - The keyword is applied repeatedly to the input string in order to produce a string of letters, each of which encoded by a caesar cipher
    - a caesar cipher transforms one character at a time based on a key number or character that describes how to move forward in the alphabet
 - In the case of a vigenere cipher, the different letters in the keyword are used as ciphers.
   - The first letter of a keyword will be used to encode the first letter of the input string... the second letter, for the second... and so on, repeating characters from the keyword each time it is consumed.

- Non-alphabetic characters are not encoded
- Alphabetic characters retain their case
  - 'E' with character 'M'/'m' -> 'Q'
  - 'e' with character 'M'/'m' -> 'q'
  
- A letter's index in the alphabet (zero-indexed) indicates its shift value
 - e.g. 'B' corresponds to a shift value of 1
- In order to get an encoded letter, we advance it by the shift value of the key letter

Examples

zzas
meat
ldal

caesar cipher
  - a -> 0 ........... z -> 25
  - t (19), move forward by l (11)
    - 30 is the final value -> 30 % 26 === 4
    - letter at position 4: e
  - w (22), move forward by g (6)
    - 28 is the final value -> 28 % 26 === 2
    - letter at position 2: c

Data Structure
- Associate the characters in my input string with their key characters using an object
  e.g. { ... 'z': 'm', 'z': 'e', 'a': 'a', 's':'t' ' ': '' '!':'' ... }
  
Algorithm
1. Write an algorithm to encode characters with the caesar cipher
  - If the character is upper case, set a boolean flag to true

  - declare a variable and initialize it to an alphabet string:
    'abcdefghijklmnopqrstuvwxyz'
  - Given a plain text character and a key character, return the encoded    character
  - Associate each letter in the alphabet with its 'shift value'
  - Declare a variable and initialize it to the position of the plaintext character (downcase) in the alphabet
  - Increment that value by the shift value
  - Take the remainder of dividing the resulting sum by 26
  
  - If the character is uppercase (based on the flag),
    - Return the letter (uppercased) at the position of the remainder
  - Otherwise,
    - Return the letter at the position of the remainder

2. Associate the characters in my input string with the correct characters in the keyword
  - Create an empty object to hold the associated plaintext/key characters
  - Break up the input string into an array of characters
  - Iterate through this array
    - For the current character,
      - If it is alphabetic,
        - Populate the association object such that the key is the current index of the character in the input string and the value is the result of calling keyword sequence function
      - Otherwise,
        - Populate the association object such that the key is the current index of the character in the input string and the value is an empty string
  - Return the association object
        
2a. Keyword sequence function
  - Define a function that returns another function
  - The returned function should form a closure around the keyword and the last letter that was produced
  Main function:
    - Break the keyword up into characters
    - Initialize a character index variable to 0
  Returned function:
    - Get the character at the current index in the word
    - If the index is greater than or equal to the last index in the word,
      - set the index to 0
    - Otherwise, increment it by one
    
    - Return the character that was accessed
  
  
3. Apply the caesar cipher to each character based on its key character, being careful to only transform the alphabetic characters
  - Declare a new variable to hold the encoded string, initialized to an empty string
  - Iterate through the keys in the association object
    - Declare a variable to store the current letter (the letter in the input string at the current index in the iteration)
    - If the current letter is alphabetic,
      - add the return value of the caesar cipher, passing in the current letter and the value associated with the current index in the associations object to the string
    - Otherwise, add the same character (current letter) to the string
  


*/

// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

function makeNextKeyChar(keyword) {
  let currentIdx = 0;
  
  return function() {
    let currentChar = keyword[currentIdx];
    
    if (currentIdx >= keyword.length - 1) {
      currentIdx = 0; 
    } else {
      currentIdx += 1; 
    }
    
    return currentChar.toLowerCase();
  }
}

function caesarEncode(plainChar, keyChar) {
  let upperCase = false;
  if (plainChar.match(/[A-Z]/)) upperCase = true;
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  let initialValue  = alphabet.indexOf(plainChar.toLowerCase());
  let shiftValue    = alphabet.indexOf(keyChar);
  let encodedValue  = (initialValue + shiftValue) % 26;
  let encodedLetter = alphabet[encodedValue];
      
  if (upperCase) return encodedLetter.toUpperCase();
  return encodedLetter;
}

function generateAssociations(plainText, keyword) {
  let plainChars = plainText.split('');
  let nextKeyChar = makeNextKeyChar(keyword);
  
  return plainChars.reduce(((associations, plainChar, idx) => {
    if (plainChar.match(/[a-zA-Z]/)) {
      associations[idx] = nextKeyChar();
    } else {
      associations[idx] = ''; 
    }
    
    return associations;
  }), {});
}


function vigenereEncode(plainText, keyword) {
  let plainToKey = generateAssociations(plainText, keyword);
  
  let encodedStr = ''
  Object.keys(plainToKey).forEach(plainTextIdx => {
    let currentLetter = plainText[plainTextIdx];
    
    if (currentLetter.match(/[a-zA-Z]/)) {
      encodedStr += caesarEncode(currentLetter, plainToKey[plainTextIdx]);
    } else {
      encodedStr += currentLetter;  
    }
  });

  return encodedStr
}

console.log(vigenereEncode("Pineapples don't go on pizzas!", 'mEaT') === "Bmnxmtpeqw dhz'x gh ar pbldal!");
console.log(vigenereEncode("Pineapples don't go on pizzas!", 'A') === "Pineapples don't go on pizzas!");
console.log(vigenereEncode("Pineapples don't go on pizzas!", 'cab') === "Riogaqrlfu dpp't hq oo riabat!");
console.log(vigenereEncode("Dog", 'Rabbit') === "Uoh");