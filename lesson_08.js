const address = {
  city: 'Philadelphia',
  street: "City Ave",
  building: 8,
  apt: 21
}

const iarmolatii = {
  firstName: "Andrii",
  lastName: "Iarmolatii",
  age: 36,
  address: address
}

copyObjectDeep = function(obj) {

    //console.log(obj);

    // Проверяем массив ли это
    if (obj instanceof Array) {
        console.log('... copy => Array');
        newObject = [];

        for (var i = 0;i<obj.length;i++) {
            newObject[i] = copyObjectDeep(obj[i]);
        }

        return newObject;
    }
    else
        if (obj instanceof Object) {
        console.log('... copy => Object');

        newObject = {};

        for (var key in obj) {
            newObject[key] = copyObjectDeep(obj[key]);
        }

        return newObject;
        }
    else {
    return obj;
}

    return newObject;
}

// Скопируем объект в новый
var alex = copyObjectDeep(iarmolatii);

// Изменим свойства нового скопированного объекта
alex.firstName = 'Alex';
alex.lastName = 'Yarmolatii';

//console.log(alex);

// Изменим объект address
address.city = 'Minsk';
address.street = 'Kalinina';
address.building = 6;
address.apt = 44;

console.log(iarmolatii);
console.log(alex);
