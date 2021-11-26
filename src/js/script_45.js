'use strict';

class User {
    constructor(age, name) {
        this.age = age,
        this.name = name,
        this.human = true
    }
    hello(name) {
        console.log(`Здравствуйте, ${this.name}`);
    }
    exit(name) {
        console.log(`Пользователь ${this.name} ушел`);
    }
}

let user = new User(22, "Вася");
user.hello();
user.exit();

let user2 = new User(36, "Коля");
console.log(user2)