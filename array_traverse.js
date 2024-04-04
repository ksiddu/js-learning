
let nums = [20, 40, 60, 80]
// for of loop : fetches each value in an array
console.log('using for of loop')
for(let i of nums){
    console.log(i)
}

// for in loop : fetches each index in an array
// for in loop : designed maily to access object keys
// in array keys are nothing but array indexes
console.log('using for in loop')
for(let j in nums){
    console.log(j, nums[j])
}


// forEach loop
console.log('using forEach method')
nums.forEach((n) => {

    console.log(n)

})

// forEach loop with extra arguments
console.log('using forEach method with extra arguments')
nums.forEach((n, i, nums) => {

    console.log(i, n, nums)

})

// filter, map and reduce

let my_nums = [1, 2, 3, 4, 5, 6];

let result = my_nums.filter( n => n % 2 === 0)
        .map( n => n *2)
        .reduce( (a, b) => a + b);



console.log(result)

