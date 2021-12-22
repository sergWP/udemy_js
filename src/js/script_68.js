'use strict';

const user = {
    name: 'Alex',
    age: 36,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        return this.age = this.age * num;
    }
};

user.userAge = 1.2;

console.log( Math.floor( user.userAge ) );