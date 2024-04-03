

// function expression : assign function to a variable
let greet = function() {
    console.log("hello world");
    return 1;
}

console.log(greet());

// arrow function : no function keyword, just add function behaviour
let greet1 = () => {
    console.log("hello js world using arrow function");
    return 1;
}

console.log(greet1());

// arrow function with arguments/parameters: no function keyword, just add function behaviour
let greet2 = (name) => {
    console.log(`Welcome ${name}`);
    return 1;
}

console.log(greet2('Siddu'));

// arrow function with arguments/parameters: no function keyword, just add function behaviour
let add = (num1, num2) => {
    console.log(`Addition of ${num1} and  ${num2}`);
    return num1 + num2;
}

console.log(add(2, 2));

// arrow function with arguments/parameters and one statement: no curly braces are required
let addition = (num1, num2) => num1 + num2 // just one line code
console.log(addition(3, 4));