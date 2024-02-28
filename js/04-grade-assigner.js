// Anshul Kumar Comp 690 SDCCE Spring 2024 Module 3 assignment

let num = parseFloat(prompt('Enter a number between 1 and 100'))
let letterGrade

// if (num<1 || num>100 || isNaN(num)) {
//     alert("You must enter a number between 1 and 100. Please refresh and try again.")

if (num>=1 && num<60) {
    letterGrade="an F"
} else if (num>=60 && num<70) {
    letterGrade="a D"
} else if (num>=70 && num<80) {
    letterGrade="a C"
} else if (num>=80 && num<90) {
    letterGrade="a B"
} else if (num>=90 && num<=100) {
    letterGrade="an A"
} else {
    alert("You must enter a number between 1 and 100. Please refresh and try again.")
    letterGrade = "an unknown grade"
}

console.log(`You received ${letterGrade}`)