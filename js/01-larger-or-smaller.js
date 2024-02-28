// Anshul Kumar Comp 690 SDCCE Spring 2024 Module 3 assignment

// Instructions: Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.

let int1 = parseInt(prompt('Enter your first integer'))
let int2 = parseInt(prompt('Enter your second integer'))
let biggerNumber

if (int1>int2) {
    document.write(`${int1} is the larger number you entered, rounded to the nearest lower whole number.`)
} else if (int2>int1) {
    document.write(`${int2} is the larger number you entered, rounded to the nearest lower whole number.`)
} else if (int1 === int2) {
    document.write(`The two numbers you entered are both ${int1}, so neither is larger, when rounded to the nearest lower whole number.`)
} else {
    document.write('An error has occurred. Perhaps you didn\'t enter numbers?')
}