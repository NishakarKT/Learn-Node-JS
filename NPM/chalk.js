const chalk = require('chalk');

// colored texts
console.log(chalk.blue("Hello World!!!"));
console.log(chalk.yellow("Hello World!!!"));

// background color
console.log(chalk.bgBlue("Hello World!!!"));
console.log(chalk.bgRed("Hello World!!!"));
console.log(chalk.inverse("Hello World!!!")); // bg-color <->  text-color

// text styles
console.log(chalk.bold("Hello World!!!"))
console.log(chalk.italic("Hello World!!!"))
console.log(chalk.underline("Hello World!!!"));
console.log(chalk.strikethrough("Hello World!!!"));
