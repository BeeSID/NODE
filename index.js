// const readline = require('readline');
// const { add, subtract, multiply, divide } = require('./localmodules');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter first number: ", (num1) => {
//     rl.question("Enter second number: ", (num2) => {
//         rl.question("Choose operation (+, -, *, /) or type 'all' to perform all: ", (op) => {
//             const a = parseFloat(num1);
//             const b = parseFloat(num2);

//             if (isNaN(a) || isNaN(b)) {
//                 console.log("Please enter valid numbers.");
//                 rl.close();
//                 return;
//             }

//             if (op === "all") {
//                 console.log(`\nResults for ${a} and ${b}:`);
//                 console.log(`Addition: ${add(a, b)}`);
//                 console.log(`Subtraction: ${subtract(a, b)}`);
//                 console.log(`Multiplication: ${multiply(a, b)}`);
//                 try {
//                     console.log(`Division: ${divide(a, b)}`);
//                 } catch (err) {
//                     console.error(`Division Error: ${err.message}`);
//                 }
//             } else {
//                 try {
//                     let result;
//                     switch (op) {
//                         case "+":
//                             result = add(a, b);
//                             break;
//                         case "-":
//                             result = subtract(a, b);
//                             break;
//                         case "*":
//                             result = multiply(a, b);
//                             break;
//                         case "/":
//                             result = divide(a, b);
//                             break;
//                         default:
//                             console.log("Invalid operation selected.");
//                             rl.close();
//                             return;
//                     }
//                     console.log(`Result of ${a} ${op} ${b} = ${result}`);
//                 } catch (err) {
//                     console.error(`Error: ${err.message}`);
//                 }
//             }

//             rl.close();
//         });
//     });
// });
// ================================================================================================================================

// module caching
const superHero = require ("./localmodules")
console.log(superHero.getName());  //it will print superman from the module
superHero.setName("ringman")
console.log(superHero.getName()); // it will print ringman from index.js file


const newsuperHero =require ("./localmodules")
console.log(newsuperHero.getName()) 
//subsequent loading
// in this log it will print ringman beacuse in the frst its self cache the module memory so it will prin ringman
