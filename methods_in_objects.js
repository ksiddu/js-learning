let laptop = {
    cpu: 'i9',
    ram: 16,
    brand: 'HP',
    greet: function(){
        console.log('hello laptop')
    },
    add: function(num1, num2){
        return num1 + num2
    }
}

console.log(laptop)
laptop.greet();
console.log(laptop.add(1, 2));


//console.log(typeof laptop)