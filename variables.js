// variables : to store and manipulate data
let num = 2 + 2;

console.log(num);

console.log(num + 3);

let username = "Siddu";

console.log(username);

username = "Siddu's Computer";

console.log(username);

username = '"Siddu" "Kampli"';

console.log(username);

// constants

let radius = 5;
const PI = 3.14;

// PI = 4; // throws error as PI is a constant

let area = PI * radius * radius;

console.log(area);


// data types: Primitive and Objects

// Primitive: number, string, boolean, null, undefined, symbol

let data = 8

console.log(typeof(data));

data = "Siddu"

console.log(typeof(data));

data = true

console.log(typeof(data));

data = 3.142

console.log(typeof(data));

// Primitive: number

let num1 = 254544566

console.log(num1*25);


num1 = 0xf // 15: hexadecimal number

console.log(num1);

num1 = 5e5 // 5 * 10^5

console.log(num1);

num1 = 10000000 // to differntiate how many zeroes

console.log(num1);

num1 = 100_00_000 // to differntiate how many zeroes(7)

console.log(num1);

let num2 = 5/0;

console.log(num2);

let num3 = -5/0;

console.log(num3);

// max. number : 1.7976931348623157e+308
console.log(Number.MAX_VALUE);

// min. number: 5e-324
console.log(Number.MIN_VALUE);

// max. number * any number outputs: Infinity
console.log(Number.MAX_VALUE * 10 );

// min. number * any number 
console.log(Number.MIN_VALUE * 10);

// use BigInt
let num4 = 10501050105010501050105010501051

console.log(num4); // outputs: 1.05010501050105e+31

// usage of BigInt to keep the digits
num4 = 10501050105010501050105010501051n

console.log(num4); // outputs: 10501050105010501050105010501051

// Primitive: string

let user = "Siddu Kampli"

console.log(user);

let firstName = "Gavi";

let lastName = "Kampli";

user = firstName + " " + lastName;

console.log(user);

// escape character
user = "Siddu Kampli \"Ltd\"";

console.log(user);

user = "Siddu Kampli \nLtd";

console.log(user);

user = "Siddu Kampli \tLtd";

console.log(user);


// Primitive: boolean

let flag = 6 > 5;

console.log(flag);

console.log(typeof flag);

// Primitive: null

let msg1 = null;

console.log(msg1);
console.log(typeof msg1); // outputs: object

// Primitive: undefined

let msg2;

console.log(msg2);
console.log(typeof msg2); // outputs: undefined

// NaN and typeof NaN

let num5 = 5 / "Siddu"

console.log(num5); // outputs: NaN

console.log(typeof num5); // outputs: number





