
// contains unqiue elements and maintains insertion order
let set = new Set();

set.add(1);
set.add(2);
set.add(2);
set.add(3);
set.add(4);

console.log(set)
console.log(set.size)

for(let i of set){
    console.log(i)
}

let map = new Map();

map.set("Siddu", 1);
map.set("Navin", 2);
map.set("Arun", 3);

console.log(map.keys());
console.log(map.values());

// using for of when only values
for(let k of map.keys()){
    console.log(k, map.get(k));
}

for(let [k, v] of map){
    console.log(k, " : ", v)
}

map.forEach( (value, key) =>  console.log(key, " : ", value));