const sum = (num1, num2) => num1+num2;
const sub = (num1, num2) => num1-num2;
const prod = (num1, num2) => num1*num2;
const div = (num1, num2) => num1/num2;
let name = "Nishakar Kumar";

// exporting a single function
// module.exports = sum;

// exporting multiple properties/functions
// 1) lengthy
// module.exports.sum = sum;
// module.exports.sub = sub;;
// module.exports.prod = prod;
// module.exports.div = div;
// module.exports.name = name;

// 1) short
module.exports = {sum, sub, prod, div, name};