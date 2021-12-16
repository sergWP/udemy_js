'use strict';

// new RegExp('pattern', 'flag');

// const ans = prompt('Введите имя');
// const reg = /n/ig;

//pattern
// . - все символы

//flags
// i - независимо от регистра
// g - несколько вхождений
// m - многострочный режим

// строчные методы
// console.log(ans.search(reg)); // первый символ строки
// console.log(ans.match(reg)); // все вхождения, нужен флаг g

// const pass = prompt('Pass');
// console.log(pass.replace(/./g, '*'));    // return  ******
// console.log(pass.replace(/\./g, '*'));   // return  abc***

// console.log('12-33-36'.replace(/-/g, ':'));

// console.log(reg.test(ans)); // true

// class
// \d - digits: все цифры
// \w - words: все буквы
// \s - spaces: пробелы

// const ans = prompt('Введите цисла');
// const reg = /\d/g;
// console.log(ans.match(reg));

const str = 'My name R2D2';
console.log(str.match(/\w\d\w\d/i));

// обратные классы

// \D - не числа
// \W - не буквы