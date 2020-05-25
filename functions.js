// Your functions go here!

// USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM OBJECTS-----
// const HIGH_TEMPERATURES = {
//    yesterday: 75,
//    today: 77,
//    tomorrow: 80,
// };
// // take the value of the today key
// // assign value to a new key, highToday
// // push highToday to object HIGH_TEMP
// const { today: highToday } = HIGH_TEMPERATURES;
// const { tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// // USE DECONSTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM NESTED OBJECT-----
// const LOCAL_FORECAST = {
//    yesterday: { low: 61, high: 75 },
//    today: { low: 64, high: 77 },
//    tomorrow: { low: 68, high: 80 },
// };
// // target the key of today in object LOCAL_FORCAST
// // target the value of the key high and push the same value into the key highToday
// // push highToday to LOCAL_FORECAST object
// const {
//    today: { high: highToday },
// } = LOCAL_FORECAST;
// const {
//    today: { low: lowToday },
// } = LOCAL_FORECAST;

// // FUNCTIONAL FUNCTION SYNTAX

// // old way of creating function
// function getPrice(subTotal, shipping) {
//    return subTotal + shipping;
// }
// // new way of creating function
// // getPrice declared with let or const
// // getPrice = the parameters the function takes
// // => meaning it makes it a function
// // returns the given parameters

// const getPrice = (subTotal, shipping) => {
//    return subTotal + shipping;
// };

// IMPLEMENT THE FILTER METHOD ON A PROTOTYPE ------

// more info on callback
// !!!!! https://www.freecodecamp.org/forum/t/implement-map-on-a-prototype-callback/356826/3 !!!!!!

function filterMethod(num) {
   // creates function called filterMethod, takes a number as the argument/input
   var arr = [num]; // adds your number into the array
   Array.prototype.myFilter = function (callback) {
      var newArray = []; // creates a new empty array
      for (
         let index = 0;
         index < arr.length;
         index++ // loops through the array above that contains the number you input and grabs each index
      )
         if (callback(arr[index]))
            // calls the function on line 68 with callback and passes in each index of the array
            newArray.push(arr[index]); // pushes the result of the callback into the empty newArray -- if the number has remainder of 1, push to newArray

      return newArray; // returns new populated array
   };
   var inputArr = arr.myFilter(function (item) {
      // creates a function that takes the index as an argument and uses the filter method
      return item % 2 === 1; // filters through the array and checks if the number in the array divided by 2 with a remainder or 1 === 1
   });
   return inputArr;
}

// RETURN PART OF AN ARRAY USING SLICE METHOD ------
// .slice() method returns a COPY of the sliced elements in an array, does not mutate original array

function sliceMethod(animalArray, input1, input2) {
   // creates function that takes an array and 2 user inputs
   var animalArray = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]; // create default array which is passed into function argument

   var slicedArray = animalArray.slice(input1, input2); // creates variable that slices the given array based on user inputs
   return slicedArray; // returns new sliced array
}

// RETURN PART OF AN ARRAY USING SPLICE METHOD ------
// .splice() method splices given inputs out of an array, mutates the arrary and returns the spliced array
// takes 2 arguments. where to start splice (in the index) and how many items to remove

function spliceMethod(input1, input2) {
   var animalArray = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
   var splicedArray = animalArray.splice(input1, input2); // creates a variable that holds the spliced items. input1 = which index to start, input2 = how many items to remove
   return splicedArray; // returns mutated array with items spliced
}

// COMBINE TWO ARRAYS USING THE CONCAT METHOD ------
// for arrays, .concat() is called on one array then the array that is wished to be concated to the end is called in

function nonMutatingConcat(input1, input2) {
   return input1.concat(input2); // takes the first input and concatenates the second input onto the end
   // returns new concatenated inputs
}

// ADD ELEMENTS TO THE END OF AN ARRAY USING CONCAT INSTEAD OF PUSH ------
// .push() mutates the original array it is pushed onto
// .concat() is imutable

function nonMutatingPush(newName) {
   let array = ["justin", "lance", "ralph", "attapon"];
   return array.concat(newName); // pushes new name onto the end of the existing array and returns updated array
}

// USE THE REDUCE METHOD TO ANALYZE DATA
// more on map filter and reduce: https://www.youtube.com/watch?v=UXiYii0Y7Nw
let numbers = [5, 38, 57, 22, 12, 1];
// reduce passes in 2 arguments, accumulator and current value
// current value is the value of the current item in the array
// accumulator is the item + current value
// acc = 0 + cur = 5 -> acc = 5 + cur = 38 -> acc = 43 + cur = 57 -> acc = 100 cur = 22 -> acc = 122 cur = 12 -> acc = 134 curr = 1 -> result should be 135
let reducedValue = numbers.reduce((acc, cur) => acc + cur);
console.log(reducedValue);
// function getRating(watchList) {
//    var count = 0;
//    var averageRating =
//       watchList.reduce((sum, movie) => {
//          if (movie.Director == "Christopher Nolan") {
//             count += 1;
//             return sum + parseFloat(movie.imdbRating);
//          }
//          return sum;
//       }, 0) / count;

//    return averageRating;
// }

// USE HIGHTER-ORDER FUNCTIONS MAP, FILTER, OR REDUCE TO SOLVE A COMPLEX PROBLEM ------

function squareList(inputNumber) {
   // create funciton that takes a number as an input
   let numberList = [inputNumber]; // sets an array with the value of the input number to a variable numberList
   let positiveIntegers = numberList.filter(
      // loops through the given number (in this case there is only one number)
      (num) => Number.isInteger(num) && num > 0 // checks if number is a whole number (no decimal) && if number is > 0 (no negative numbers)
   );
   let squaredNumbers = positiveIntegers.map((num) => num * num); // if the inputNumber meets reqs above, maps through the input (1 number in this case). multiplies the inputNumber * inputNumber to get square root
   return squaredNumbers;
}
// const squareList = (arr) => {
//    let positiveIntegers = arr.filter((num) => Number.isInteger(num) && num > 0);

//    let squaredNumbers = positiveIntegers.map((num) => num * num);

//    return squaredNumbers;
// };

// SORT AN ARRAY ALPHABETICALLY USING THE SORT METHOD -----
// .sort() mutates the order of the original array
function sortMethod(letter) {
   // user input is a letter
   let arr = ["a", letter, "z", "j", "h", "b"]; // creates array with random letters as well as users letter input above
   return arr.sort(); // sorts the array from a-z
}

// RETURN A SORTED ARRAY WITHOUT CHANGING THE ORIGINAL ARRAY -----
function nonMutatingSort(num) {
   // user input needs to be a number
   var globalArray = [5, 6, 3, 2, 9, num]; // adds input number to the given array
   return globalArray.slice().sort(); // takes the array, slices (creates a new array, did not mutate original global array), sorts new array

   // shorter version
   //return [...arr].sort()
}

// SPLIT A STRING INTO AN ARRAY USING SPLIT METHOD
// .split() splits a string into a new array of strings, does not mutate, takes delimeter as argument
// delimiter can be a character to use to break up the string. space = array of words, empty string = array for each character in string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
function splitMethod(input1) {
   // takes multiple words
   let newString = input1.split(" "); // creates a new array of the input words
   return newString;
}

// COMBINE AN ARRAY INTO A STRING USING THE JOIN METHOD
// .join() joins elements of an array together to make a string. does not mutate original array
function joinMethod(input1) {
   let string = input1; // creates variable called string which takes the user input
   let disectedString = string.split(/\W/); // return array of strings from input
   // split() splits the given input into an array of strings, the delimiter (/\W/) is a regular expression which filters non alpha-numeric characters out
   let sentenceString = disectedString.join(" "); // .join() takes the elements of the array above and creates a new string. the delimiter (" ") spaces the string. notice the space in between quotes
   return sentenceString;
}

// APPLY FUNCITONAL PRORAMMING TO CONVERT STRINGS TO URL SLUGS
function urlSlug(input1) {
   // takes any input
   return input1
      .split(/\W/) // splits the input into a new array of strings and removes all non alpha numeric characters with the (/\W/) delimitor
      .filter((word) => {
         // filters through each word in the input and returns every array that does not contain an empty string
         return word !== "";
      })
      .join("-") // joins each element in array with -
      .toLowerCase(); // converst the array to all lowercase letters
}

// USE EVERY MOTHOD TO CHECK THAT EVERY ELEMENT IN AN ARRAY MEETS A CRITERIA
// .every() works with arrays to check if ALL elements pass a particular test
function everyMethod(input) {
   let number = [input]; // creates variable that turns input into an array
   let result = number.every(function (num) {
      // takes number variable and checks to see if all numbers are > 0
      return num > 0; // particular test
   });
   return result; // returns true if > 0, false if < 0
}

// USE THE SOME METHOD TO CHECK THAT ANY ELEMENTS IN AN ARRAY MEET A CRITERIA
// .some() works with arrays to check if AT LEAST ONE of the elements pass a particular test
function someMethod(input) {
   let number = [input]; // creates variable that turns input into an array
   let result = number.every(function (num) {
      // takes number variable and checks to see one of the numbers are > 0
      return num > 0; // particular test
   });
   return result; // returns true if > 0, false if < 0
}
