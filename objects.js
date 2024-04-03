let alien = {
    name: 'Siddu',
    tech: 'JS',
    'work exp': 7
}

console.log(alien);

console.log(typeof alien);

// to fetch specific object fields(value) using . operator
console.log(alien.name);
console.log(alien.tech);

// to fetch specific object fields(value) using []
console.log(alien['name']);
console.log(alien['tech']);
console.log(alien['work exp']);

// cannot use . operator if key name is 2 words
// cannot use . operator when we don't know key name(dynamically passed)