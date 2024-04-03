let num = 6;

if (num % 2 == 0) {
    console.log(num, " is a even number")
}
else {
    console.log(num, " is a not an even number")
}

let num1 = 6;
let num2 = 6;

if (num1 > num2) {
    console.log(num1, " is greater")
}
else {
    console.log(num2, " is greater")
}

console.log("Bye!!")

// using boolean
let num3 = 9;

let result3 = num3 % 2 === 0;
if (result3) {
    console.log(num3, " is a even number")
}
else {
    console.log(num3, " is a odd number")
}

// using ternary operator
let num4 = 10;

let result4 = (num4 % 2 === 0) ? "Even" : "Odd";

console.log(num4, " is a ", result4)

// switch statement : when there are more than one values to compare
// day 1: Monday, day2: Tuesday , etc

let day = 1;

switch (day) {
    case 1: console.log("Monday")
        break;
    case 2: console.log("Tuesday")
        break;
    case 3: console.log("Wednesday")
        break;
    case 4: console.log("Thursday")
        break;
    case 5: console.log("Friday")
        break;
    case 6: console.log("Saturday")
        break;
    case 7: console.log("Sunday")
        break;
    default:
        console.log("Wrong number")

}