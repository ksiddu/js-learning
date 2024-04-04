// to create multiple objects with function

function Alien(name, tech) {
    this.name = name;
    this.tech = tech;
    this.work = function () {
        console.log('Solving bugs from 12 hrs');
    }


}

let alien1 = new Alien('Siddu', 'Java');

console.log(alien1);
alien1.work();

let alien2 = new Alien('Ravi', 'JS');


console.log(alien2);
alien2.work();
