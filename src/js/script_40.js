'use strict';

const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());
// console.log(now.getTime());

// console.log(now.setHours(14));
// console.log(now);

// равнозначно
// const now2 = new Date('2021-11-20');
// new Date.parse('2021-11-20');

let start = new Date();
for (let i = 0; i< 100000; i++) {
    let some = i ** 3;
}
let end = new Date();

// продолжительность работы функции
console.log(end-start);