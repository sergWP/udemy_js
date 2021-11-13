'use strict';

function learn(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Практика урока. Калбеки');
}

learn('JS', done);

// Практика
let res;
function global(result, callback) {
    res = `результат: ${result}`;
    callback();
    console.log(result*2);
}

function calc(a, b) {
    return a * b;
}

global(calc(5,6), () => {
    alert(res);
});