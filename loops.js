
let msg = "Hi";

// for loop
console.log("using for loop");
for (let i = 1; i <= 5; i++) {
    console.log(i, msg);
}

// while loop
msg = "Hello";
console.log("using while loop");
let j = 1;

while (j <= 5) {
    console.log(j, msg);
    j++;
}

// do while loop
msg = "Welcome";
console.log("using do while loop");
let k = 1;

do {
    console.log(k, msg);
    k++;
} while (k <= 5)