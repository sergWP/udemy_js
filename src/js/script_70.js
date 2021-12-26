'use strict';

// глобальная область видимости
const num = 11;

// анонимная, самовызывающаяся функция // function expression
// локальная область видимости
(function () {
    let num = 2;
    console.log(num);
    console.log(num + 2)
}());

console.log(num);

//---- модуль -----//

const user = (function () {
    const privat = function () {
        console.log('Privat function');
    }

    return {
        sayHello: privat
    }
}());

user.sayHello();