//https://medium.com/nuances-of-programming/я-никогда-не-понимал-замыкания-в-javascript-часть-первая-3c3f02041970
// Когда функция объявляется, то она содержит описание функции и замыкание.
// Замыкание — это коллекция всех переменных из области видимости во время создания функции.

'use strict';
function createCounter() {
    let counter = 0;
    const myFunction = function() {
        counter = counter + 1;
        return counter;
    }
    return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);

// example 2
let c = 4;
function addX(x) {
    return function(n) {
        return n + x;
    }
}
const addThree = addX(3);
let d = addThree(c);
console.log('example partial application', d);

// Способ, с помощью которого я навсегда запомнил замыкания — это сравнение их с рюкзаком.
// Когда функция создана и передаётся куда-либо, или возвращается из другой функции, то она носит с собой рюкзак.
// А в этом рюкзаке хранятся все переменные, которые были в области видимости во время создания этой функции.