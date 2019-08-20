const address = {
  street: "Elm Street",
  building: 6,
}

const john = {
  firstName: "John",
  lastName: "Doe",
  age: 16,
  address: address
}

objectCopyDP = function(obj) {

    //Проверим наличие аршумента
    if (obj && obj instanceof Object) {

        console.log(obj);

        var objCopy = {};

        for (var key in obj) {

            //Проверим не является ли свойство ссылкой на другой обьект
            if (obj[key] instanceof Object) {
                console.log('... '+key + ' -> копирую ссылочный тип');
                objCopy[key] = objectCopyDP(obj[key]);
            }
            else {
                console.log('... '+key);
                objCopy[key] = obj[key];
            }
        }

        return objCopy;
    }
    else return obj;
}

// Тестируем ...



console.clear();
const ivan = objectCopyDP(john);
ivan.firstName = 'Ivan';
ivan.lastName = 'Popovich';
console.log(ivan);
address.street = 'Akhmatova';
console.log(john);
console.log(ivan);
