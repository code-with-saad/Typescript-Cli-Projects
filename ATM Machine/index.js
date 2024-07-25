#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 1234;
console.log("==========================================");
console.log("SAAD ATM MACHINE ");
console.log("==========================================\n");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin Number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Your Pin Code is Correct");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operations",
            type: "list",
            message: "Please select an option",
            choices: ["Withdraw", "Deposit", "Fast Cash", "Check Balance"]
        }
    ]);
    if (operationAnswer.operations === "Withdraw") {
        let withdrawAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter amount to withdraw"
            }
        ]);
        if (withdrawAmount.amount < myBalance) {
            myBalance -= withdrawAmount.amount;
            console.log(`Successfully Withdraw rs ${withdrawAmount.amount} from your Bank Account Account`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
        else {
            console.log(`You Dont Have Enough Funds In Your Account!"`);
        }
    }
    else if (operationAnswer.operations === "Deposit") {
        let depositAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter amount to deposit"
            }
        ]);
        myBalance += depositAmount.amount;
        console.log(`Successfully Deposit rs ${depositAmount.amount} to your Bank Account`);
        console.log(`Your Total Balance is: ${myBalance}`);
    }
    else if (operationAnswer.operations === "Fast Cash") {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "Please select amount",
                choices: ["500", "1000", "2000", "5000", "10000", "50000", "100000",]
            }
        ]);
        if (fastCashAmount.amount < myBalance) {
            myBalance -= fastCashAmount.amount;
            console.log(`Successfully Withdraw rs ${fastCashAmount.amount} from your Bank Account`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
        else {
            console.log(`You Dont Have Enough Funds In Your Account!"`);
        }
    }
    else if (operationAnswer.operations === "Check Balance") {
        console.log(`Your Total Balance is: ${myBalance}`);
    }
}
else {
    console.log(`Incorrect Pin Code!`);
}
