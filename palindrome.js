function isPalindrome(str) {
    // First, we need to remove any spaces or special characters from the string
    // so that we only have to worry about letters
    const cleanedString = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
    // Next, we'll use the "split" method to turn the string into an array of characters
    const characters = cleanedString.split('');
  
    // Now we'll use the "reverse" method to reverse the array of characters
    const reversedCharacters = characters.reverse();
  
    // Finally, we'll use the "join" method to turn the reversed array of characters back into a string
    const reversedString = reversedCharacters.join('');
  
    // If the reversed string is the same as the original cleaned string, then it's a palindrome
    return cleanedString === reversedString;
  }
  