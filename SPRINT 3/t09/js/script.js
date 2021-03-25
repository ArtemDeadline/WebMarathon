
let validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if(!Number.isInteger(value)){
                throw new TypeError("The age is not an integer");
            }
            if(value < 0 || value > 200){
                throw RangeError("The age seems invalid");
            }
        }
        console.log(`Setting value '${value}' to '${prop}'`);
        obj[prop]=value;
        return true;
    },
    get: function(obj, prop){
        console.log(`Trying to access the property '[${prop}]'...`);
        return prop in obj? obj[prop]: false;
    }
}

let person = new Proxy({}, validator);
person.age = 100;
// Setting value '100' to 'age'
console.log(person.age);
// Trying to access the property 'age'...
// 100
person.gender = "male";
// Setting value 'male' to 'gender'
person.age = 'young';
// Uncaught TypeError: The age is not an integer
person.age = 300;
// Uncaught RangeError: The age is invalid
