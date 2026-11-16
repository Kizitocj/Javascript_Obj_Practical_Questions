//Question 1
const student = {
    name: 'Ada',
    age: 17,
    isPresent: true,

    greet: function() {
        console.log('Hi, I am ' + this.name);
    }
};

//Question 2
console.log(student.name);
console.log(student['age']);
student.greet();

const phone = {
    brand: 'Tecno',
    model: 'Spark 10',
    price: 120000,

    describe: function() {
        return this.brand + ' ' + this.model + ' costs ' + this.price;
    }
};

console.log(phone.describe());

//Question 3
const car = {
    make: 'Toyota',
    'top speed': 180
};

let property = 'make';
console.log(car[property]);
console.log(car['top speed']);




