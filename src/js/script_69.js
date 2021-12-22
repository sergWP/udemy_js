'use strict';

function User(name, age) {
    this.name = name;
    let userAge = age;

    this.say = () => {
        console.log(`name: ${this.name}, age: ${userAge}`);
    };

    this.getAge = () => {
        return userAge;
    };

    this.setAge = (age) => {
        if(typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('error AGE variable')
        }
    }
}

const ivan = new User('Ivan', 24);
console.log(ivan.name);
console.log(ivan.getAge());

ivan.setAge(36);
ivan.setAge(300);

ivan.say();