const address = {
    country:"Italy"
}

const person = {
  firstName: "firstName",
  lastName: "lastName",
  age: 36,
  address: address
}

const address2 = {
    country:"Italy"
}

const person2 = {
  firstName: "firstName",
  lastName: "lastName",
  age: 36,
  address: address2
}



Object.freeze(person);
person.firstName = 'Iarmolatii';
address.country = 'Ukraine';
console.log(person);

deepFreeze = function(obj) {
    Object.freeze(obj);
    for (var key in obj) {
        if (obj[key] instanceof Object) {
             deepFreeze(obj[key])
        }
    }
}

deepFreeze(person2);
person.firstName = 'Iarmolatii';
address.country = 'Ukraine';
console.log(person2);
