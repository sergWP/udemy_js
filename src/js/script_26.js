'use strict';

//to string
console.log(typeof (String(null)));
console.log(typeof (String(4)));

//конкатинация
console.log(typeof (null + ''));

// to number
console.log(typeof (Number('4')));

// унарный плюс
console.log(typeof (+'5'));

//parseInt
console.log(typeof (parseInt('5px', 10)));

//to boolean
// 0, '', null, undefined, NaN

let switcher = null;
switcher ? console.log('Working') : null;

console.log(typeof (Boolean('4')));

console.log(typeof (!!"565"));