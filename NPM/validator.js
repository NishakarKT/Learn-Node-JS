let validator = require('validator');
let chalk = require('chalk');

// E-mail validity
let result1 = validator.isEmail("efwef@gmail");
let result2 = validator.isEmail("efwef@gmail.com");

console.log(result1 ? chalk.green.bgYellow.bold("Valid") : chalk.red.bgYellow.bold("Invalid"));
console.log(result2 ? chalk.green.bgYellow.bold("Valid") : chalk.red.bgYellow.bold("Invalid"));
