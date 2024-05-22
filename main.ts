#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.yellowBright("\n\t******  Codee with fareeha - Word Counter  *******\n\t"));
console.log("=".repeat(60));


//getting input from user

let answer = await inquirer.prompt([
    {
        name: "sentence",
        type:  "input",
        message : "Enter a Sentence",
    }
]);

let Words = answer.sentence.trim().split(" ");
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(Words);
console.log(chalk.bold(`\n - Word count: ${chalk.bold.redBright(Words.length)}`));
console.log("=".repeat(60));


