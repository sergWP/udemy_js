'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age; // скрыть извне
    }

    say() {
        console.log(`name: ${this.name}, age: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if(typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('error AGE variable')
        }
    }
}

const ivan = new User('Ivan', 24);
console.log(ivan.age);
ivan.age = 99;

ivan.say();