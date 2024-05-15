#! /usr/bin/env node
import inquirer from "inquirer";
//Printing a Welcome Message
console.log("\n\tWelcome To \'ndoll7\' -CLI Calculator Simple\n");
//Asking Question From User Through Inquirer
let answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "select one of operators to perform action",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBSTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
//CONDITIONAL STATEMENT
if (answer.operator === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "SUBSTRACTION") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Invalid Input");
}
