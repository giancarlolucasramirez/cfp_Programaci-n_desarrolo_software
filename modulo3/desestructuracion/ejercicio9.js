const person = {
    name : 'Daniel',
    lastName : 'Lopez',
    cui: 255458855,
    addres : {
        zip: 121525,
        city:'guatemala',
    }
}

const {name,addres:{zip,city}} = person

console.log(city);