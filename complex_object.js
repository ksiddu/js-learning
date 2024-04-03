// having an object insde another object
let alien = {
    name: 'Siddu',
    tech: 'JS',
    laptop: {
        cpu: 'i7',
        ram: 4,
        brand: 'Asus'
    }

}


console.log(alien);

console.log(alien.tech);
console.log(alien.laptop);
console.log(alien.laptop.cpu);
console.log(alien.laptop.ram);
console.log(alien.laptop.brand);
console.log(alien.laptop.brand.length);

// to check if the key exists
console.log(alien?.laptop)

console.log(alien.laptop?.brand)

console.log(alien.laptop?.brand?.length)


// iterate between the keys of the object
// for in loop
for (let key in alien) {

    console.log('Key: ', key)

    console.log('Value: ', alien[key])


}

let laptop = alien['laptop'];


// iterate between the keys of the object
// for in loop
console.log('Laptop key and value');
for (let key in laptop) {

    console.log('Key: ', key)

    console.log('Value: ', laptop[key])


}