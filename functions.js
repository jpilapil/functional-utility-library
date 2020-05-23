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

// IMPLEMENT THE FILTER METHOD ON A PROTOTYPE

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
            // calls the function on line 65 with callback and passes in each index of the array
            newArray.push(arr[index]); // pushes the result of the callback into the empty newArray -- if the number has remainder of 1, push to newArray

      return newArray; // returns new populated array
   };
   var inputArr = arr.myFilter(function (item) {
      // creates a function that takes the index as an argument and uses the filter method
      return item % 2 === 1; // filters through the array and checks if the number in the array divided by 2 with a remainder or 1 === 1
   });
   return inputArr;
}
