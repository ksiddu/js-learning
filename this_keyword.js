let laptop1 = {
    cpu: 'i9',
    ram: 16,
    brand: 'HP',
    getConfig: function () {
        let storage = 100;
        console.log(storage);
        //console.log(laptop1.cpu);
        console.log(this.cpu); // this means current object, as cpu is a property of object not a function getConfig
    },

    compare: function (laptop2) {
        if (this.cpu > laptop2.cpu) {
            console.log(laptop1);
        }
        else {
            console.log(laptop2);
        }
    }
}

//console.log(laptop1)
//laptop1.getConfig();


let laptop2 = {
    cpu: 'i6',
    ram: 16,
    brand: 'Apple',
    getConfig: function () {
        let storage = 100;
        console.log(storage);
        //console.log(laptop2.cpu);
        console.log(this.cpu); // this means current object, as cpu is a property of object not a function getConfig
    }
}


//console.log(laptop2)
//laptop2.getConfig();

function getFastestLaptop(l1, l2) {

    if (l1.cpu > l2.cpu) {
        console.log(l1);
    }
    else {
        console.log(l2);
    }
}

getFastestLaptop(laptop1, laptop2);
laptop1.compare(laptop2);