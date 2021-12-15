'use strict';

localStorage.setItem('number', 5);
localStorage.setItem('plumbum', 10);

console.log(localStorage.getItem('number'));

localStorage.removeItem('number');

localStorage.clear();

const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));