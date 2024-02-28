// Anshul Kumar Comp 690 SDCCE Spring 2024 Module 3 assignment

let coinFlip = Math.round(Math.random())
console.log(`Randomly generated number: ${coinFlip}`) // this is to check if the actual coin flip aligns with the response given to the user

let choice = prompt("Choose heads or tails (type your choice in lowercase)")

if (coinFlip>=0.5) {
    // true coin result is heads
    if (choice==="heads") {
        alert("The flip was heads and you chose heads...you win!")
    } else if (choice==="tails") {
        alert("The flip was heads but you chose tails...you lose!")
    } else {
        alert("Something went wrong. Please refresh and try again. Make sure you only enter either heads or tails as your choice (all lowercase).")
    }
} else {
    // true coin result is tails
    if (choice==="heads") {
        alert("The flip was tails but you chose heads...you lose!")
    } else if (choice==="tails") {
        alert("The flip was tails and you chose tails...you win!")
    } else {
        alert("Something went wrong. Please refresh and try again. Make sure you only enter either heads or tails as your choice (all lowercase).")
    } 
} 