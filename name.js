#! /usr/bin/env node
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    {
        message: "Enter Fisrt Number",
        type: "number",
        name: "fisrtNumber",
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select one of the operators",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement
if (asnwer.operator === "Addition") {
    console.log(asnwer.fisrtNumber + asnwer.secondNumber);
}
else if (asnwer.operator === "Subtraction") {
    console.log(asnwer.fisrtNumber - asnwer.secondNumber);
}
else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.fisrtNumber * asnwer.secondNumber);
}
else if (asnwer.operator === "Division") {
    console.log(asnwer.fisrtNumber / asnwer.secondNumber);
}
else {
    console.log("Select valid operator");
}
