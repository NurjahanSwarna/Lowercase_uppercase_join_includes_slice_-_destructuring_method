// Write a function that compares two strings regardless of case sensitivity using toLowerCase() or toUpperCase(). Return true if the strings are the same, otherwise return false.
// let string1 = "Nurjahan";
// let string2 = "nurjahan";
//  function calculateString(str1 , str2){
//     return str1.toLowerCase() === str2.toLowerCase();
//  };
//  console.log(calculateString(string1 , string2));

 let string1 = "Nurjahan";
let string2 = "nurjahan";
function calculateString( str1 ,str2){
    if(str1.toLowerCase() === str2.toLowerCase()){
        return true;
    }
    else{
        return false;
    }
};
console.log(calculateString(string1 ,string2));

// Create a function that checks if a given sentence contains the word "JavaScript" using the includes() method. Return a message indicating whether the word is found.
let theSentence = "Popular programming language is javaScript";
function searchsentence(sentence){
    if(sentence.includes("javaScript")){
        return "The word 'javascript' is found ";
    }
    else{
        return "The word 'javascript' is not found "
    }
}
console.log(searchsentence(theSentence));

// Write a function that splits a sentence into an array of words using split(). Then, use join() to convert the array back into a sentence, separating the words with hyphens (-).
let introduce = " I'm Nurjahan Swarna";
function introduceDivided(sentence){
    let test = sentence.split(" ");
//     // return test
    let hyphenatedSentence = test.join('-')
    return hyphenatedSentence
}
console.log(introduceDivided(introduce));

// Create a function that takes a string and extracts a portion using slice(). The function should take a start and an end index as arguments and return the sliced part.
let string = "I live in Khulna"
function slicePart(start , end){
    let result = string.slice(start , end);
    return result;
}
console.log(slicePart(7 , 9));

// Given an object with properties name, email, and age, use destructuring to extract the values into variables and log them to the console.
let NameOfObj = {
    fullName : "Nurjahan Swarna",
    email :"nurjahanswarna@gmail.com",
    age : 22
};
let { fullName , email, age} =NameOfObj;
// console.log(NameOfObj);
console.log(fullName, email, age);

