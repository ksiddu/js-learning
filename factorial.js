
console.log("using iterative approach");
let fact = 1;
let n = 5;
for(let i = 1; i <= n; i++){

    fact = fact * i;

}

console.log(n, fact)


console.log("using recursion approach");
function factorial(n){
    
    if( n === 0){
        return 1;

    }
    return n * factorial(n-1);
}

let result = factorial(n);

console.log(n, result)