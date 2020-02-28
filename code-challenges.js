// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

const evenlyThree = num => num % 3 === 0
  ? `${num} is divisble by three`
  : `${num} is not divisible by three`;



// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

// Join the array into a single string separated by spaces
// Capitalize all letters (toUpperCase only works with one string item at a time)
// Split each string separated by spaces into an array item
const allCaps = arr => arr.join(" ").toUpperCase().split(" ");



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

// Filter the array to look for only number data types
// The sort method converts items to strings
  // Must be cautious as 100 is greater than 2 when it comes to strings
// Include a compare function within sort() to compare numbers and sort properly
const sortNum = arr => arr.filter(num => typeof num === "number").sort((a, b) => a - b);




// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// Use the test variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

const firstVowel = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  // Converts str into an array split by letters
  let strArr = str.split("");
  // Loops through each strArr element
  for (let i = 0; i < strArr.length; i++) {
    // If the vowels array includes the current value of strArr
    // Return index of strArr[i]
    if (vowels.includes(strArr[i])) {
      return strArr.indexOf(strArr[i]);
    }
  }
}





// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

const calculator = (num1, symbol, num2) => {
  if (symbol == "/" && num2 == 0) {
    return "Can't divide by 0!";
  } else {
      switch(symbol) {
        case "/":
          return num1 / num2;
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
          return num1 * num2;
      }
    }
}


// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
