// importing a single function/property
// const sum = require('./myModule');
// console.log(sum(2,3));

// importing a multiple functions/properties
const calc = require('./myModule');
console.log(calc);

console.log(calc.sum(2,3));
console.log(calc.sub(2,3));
console.log(calc.prod(2,3));
console.log(calc.div(2,3));
console.log(calc.name);