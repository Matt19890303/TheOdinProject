// ##################################################################################################################################
// Explanation
// ##################################################################################################################################


// // steps on how a palidrome works: https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/

// function palindrome(str) {
//     // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
//     // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
//     // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
//     // var lowRegStr = "amanaplanacanalpanama";
//     var specialCharacters = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
//     var lowerCaseString = str.toLowerCase().replace(specialCharacters, '');
    
       
//     // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
//     // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
//     // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
//     // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
//     // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
//     // And, var reverseStr = "amanaplanacanalpanama";
//     // the .split('') and Array.from() functions work the same
//     var reverseStr = lowerCaseString.split('').reverse().join(''); 
    
     
//     // Step 3. Check if reverseStr is strictly equals to lowerCaseString and return a Boolean
//     return reverseStr === lowerCaseString; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
//   }



// ##################################################################################################################################
// My Practice
// ##################################################################################################################################



function palindromes (str) {
    let funnyOnes = /[^A-Za-z0-9]/g;
    let lowerCaseString = str.toLowerCase().replace(funnyOnes, '');
    let reverseString = Array.from(lowerCaseString).reverse().join('');
    if (lowerCaseString === reverseString) {
        console.log(true);
        // console.log('Its a Palidrome');
    } else {
        console.log(false);
    }
    // // console.log(lowerCaseString);
    // console.log(reverseString);
} 


let myString = "Matt";
// let myString = "a man, a plan, a canal. panama";

palindromes(myString);


module.exports = palindromes;


// ##################################################################################################################################
// ##################################################################################################################################
