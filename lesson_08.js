const address = {
    city: 'empty',
    street: "empty",
    building: 8,
    apt: 21
}

const person = {
    firstName: "Andrii",
    lastName: "Iarmolatii",
    age: 36,
    address: address
}

Object.defineProperty(person, "yearOfBirth", {

    get: function () {
        return (new Date()).getFullYear - this.age;
    },
    set: function (newValue) {
        this.age = (new Date()).getFullYear() - newValue;
    }
})


copyObjectDeep = function (obj) {

    // Проверяем массив ли это
    if (obj instanceof Array) {

        newObject = [];

        for (var i = 0; i < obj.length; i++) {
            newObject[i] = copyObjectDeep(obj[i]);
        }

        return newObject;
    }
    else if (obj instanceof Object) {

        newObject = {};

        for (var key in obj) {

            newObject[key] = copyObjectDeep(obj[key]);
        }

        var propArray = Object.getOwnPropertyNames(obj);

        for (var i = 0; i < propArray.length; i++) {
            var k = propArray[i];

            var desc = Object.getOwnPropertyDescriptor(obj, k);

            if (typeof desc.get == 'function' || typeof desc.set == 'function') {
                Object.defineProperty(newObject, k, desc);
            }

        }

        return newObject;
    }
    else {
        return obj;
    }

    return newObject;
}

// Скопируем объект в новый
var alex = copyObjectDeep(person);

// Изменим свойства нового скопированного объекта
alex.firstName = 'Alex';
alex.lastName = 'Yarmolatii';

// Изменим объект address
address.city = 'Minsk';
address.street = 'Kalinina';

console.log('   ');
console.log(person);
console.log('   ');
console.log(alex);
