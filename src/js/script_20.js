'use strict';

const options = {
    name: 'Fedor',
    width: 100,
    height: 20,
    colors: {
        border: 'red',
        bg: 'black'
    },
    makeTest: function() {
        console.log('Test')
    }
}

delete options.name; // удаление из объекта

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`)
    }
}

console.log(Object.keys(options).length); // количество елементов в объекте
options.makeTest(); // собственный метод

// деструктуризация
const {border, bg} = options.colors;
console.log(bg);

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object