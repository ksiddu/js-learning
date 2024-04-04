// to create an array

// method1 : to create an array
let nums = [1, 2, 3, 4];

for (let i of nums) {
    console.log(i);
}

// method2 : to create an array with new and Array class
let nums1 = new Array(3);

nums1[0] = 1;
nums1[1] = 2;

for (let j of nums1) {
    console.log(j);
}

// method3 : to create an array with new and Array class, use push method to add the values to Array
let nums2 = new Array;

nums2.push(5)
nums2.push(6)
nums2.push(7)

// for of loop : arrays
for (let k of nums2) {
    console.log(k);
}


// for loop : arrays

let len = nums2.length;

for (let l = 0; l < len; l++) {
    console.log(l, nums2[l]);
}

console.log(nums2[3]); //undefined : for array out of bounds

// different types of data
// with all string values
let data = ['Navin', 'Kiran', 'Chirag']

for (let i = 0; i < data.length; i++) {
    console.log(i, data[i], typeof data[i]);
    //console.log(typeof names[i]);
}

// with string values and boolean
let data1 = ['Siddu', 'Shyam', true]

for (let i = 0; i < data1.length; i++) {
    console.log(i, data1[i], typeof data1[i]);

}

// with string values and number
let data2 = ['Siddu', 'Shyam', 32]

for (let i = 0; i < data2.length; i++) {
    console.log(i, data2[i], typeof data2[i]);

}

// with string values, an object and an function
let data3 = ['Siddu', 'Shyam', { key1: 'value1', key2: 'value2', key3: 3 }, function (){console.log("Hello World");}]

for (let i = 0; i < data3.length; i++) {
    console.log(i, data3[i], typeof data3[i]);

}

// to call a function
data3[3]();

function greet() {

    console.log("Hello World");

}

let my_obj = {
    key1: 'value1', key2: 'value2', key3: 3
}
// typeof object, arrays and functions is Object


console.log(typeof my_obj);
console.log(typeof data1);
//console.log(typeof greet);
