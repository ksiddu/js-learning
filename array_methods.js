// push method
let nums = [1, 2, 3, 4];

console.log(nums)

console.log(nums.push(10)); // push returns the length after adding the value to an array
console.log(nums)

// pop method
console.log(nums.pop()); // pop deletes the last value & returns the value deleted from an array
console.log(nums)

// shift method
console.log(nums.shift()); // shift deletes the first value & returns the value deleted from an array
console.log(nums)

// unshift method
console.log(nums.unshift(9)); // unshift adds as the first value & returns the length after adding the value to an array
console.log(nums)

// splice method : delete/adds/ modifies one or more elements
let nums1 = [10, 20, 30, 40];

console.log(nums1)

console.log(nums1.splice(1, 1)); // 20: removes 1 element starting from 1st index

console.log(nums1)

nums1.splice(0, 0, 1, 2); // adds 2 values

console.log(nums1)

// array length

console.log(nums1.length)

nums1.splice(2, 2); // deletes 2 values starting from index 1

console.log(nums1)

// some method: to test  a function with each element

let nums_one = [2, 4, 6, 7, 19]

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }

  
    console.log(nums_one.some(isEven));
}