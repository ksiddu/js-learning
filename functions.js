// function with no parameters

function greet() {

    console.log("Hello World");
}



// function with parameter
function greetHello(msg) {

    console.log("Welcome ", msg);
}

// function with parameter
function greetUser(user) {

    console.log(` Welcome  ${user} `);
}

greet();
greetHello('Siddu');
greetHello('Kampli');


// function with 2 parameters and return stmt
function add2Numbers(a, b) {
    return a + b;
}

// function with 3 parameters and return stmt
function add3Numbers(a, b, c) {
    return a + b + c;
}

console.log("add2Numbers:", add2Numbers(1, 2));
console.log("add3Numbers:", add3Numbers(1, 2, 3));

// function expression - creating an alias variable to function definition
// to create an anonymous function with no name and assigned to specific variable
console.log("function expression");
let add = function(a, b) {
    return a + b;
}

console.log("add:", add(1, 2));

let sum = add
console.log("sum:", sum(1, 2));

//console.log("function typeof:", typeof add);
console.log(add); // [Function: add]
console.log(sum); // [Function: add]