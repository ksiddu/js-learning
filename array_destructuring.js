
let nums = [10, 20, 30, 40];

console.log(nums);

let [a, b, c, d] = nums;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let nums1 = [1, 2, 3, 4];

let [var1, var2, ,var4] = nums1;

console.log(var1);
console.log(var2);
console.log(var4);


let nums2 = [5, 6, 7, 8, 9, 10];

let [var5, var6, ...var7] = nums2;

console.log(var5);
console.log(var6);
console.log(var7);
console.log(typeof var6);
console.log(typeof var7);


// swap 2 values using array destructuring
let x = 1;
let y = 2;

console.log('x:', x);
console.log('y:', y);

[x, y] = [y, x];
console.log('after swap');
console.log('x:', x);
console.log('y:', y);

