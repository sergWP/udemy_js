'use strict';

function showThis(a, b) {
    console.log(this)
    function sum() {
        console.log(this)
        return a + b
    }

    console.log(sum())
}

//showThis(4, 8);

const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this)
    }
}

// obj.sum()

function sayName(surname) {
    console.log(this.name + surname)
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this*num;
}

const double = count.bind(2)
console.log(double(5))
console.log(double(12565))


// 1) Обычная функция: this = window, но если use strict = undefined
// 2) контекст у методов объектов - это сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) ручная привязка this: apply, call, bind

// 1. В обычных функциях его нет вообще, если мы не apply, call, bind
// 2. В стрелочных он поднимается в области видимости и ищет родителя кто вызвал
// 3. А в объектах, классах и тп. this это объект в котором его вызвали.