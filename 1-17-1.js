"Use strict";
//simple example//

function greet() {
  return "Hello,World!";
}
console.log(greet())
greet();

function addNumbers(num1, num2) {
  let total = num1 + num2;

  return total;
}

let totalAmount = addNumbers(7, 2);
console.log(totalAmount);


function isEven (num){
    if (num % 2 === 8) {
        return "Even";
    } else {
        return "Odd"
    }
} let number = isEven(2)
console.log(number)

//exercise 1//

function convertFtoC(fahrenheitTemperature) {
//F to C formula: C = (F - 32) x 5/9
let c = (fahrenheitTemperature-32)*5/9;
return c; 
}

let currentFahrenheitTemperature = 92;
let celsiusTemperature = convertFtoC(currentFahrenheitTemperature);
console.log(celsiusTemperature.toFixed(1));

//Global
// let first = "Yaritza"

// function printName() {
//     //function 
// let first = "Ricardo"
// console.log(first);
// if(true){
//     //block scope
//     let first = "Tim"
//     console.log(first)
// }
// }

// function addNums (a, b, c) {
//     if (a< 0) {
//         let sum = Math.abs(a) + Math.abs(b) + Math.abs(c);
//     } else {
//         let sum = a + b + c;
//     }
//     console.log(sum);
// }
// let x = addNums (-1,3,7);