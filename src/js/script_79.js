'use strict';

function* generator() {
    yield 'S';
    yield 'C';
    yield 'R';
    yield 'I';
    yield 'P';
    yield 'T';
}

const str = generator();

// console.log(str.next());
// console.log(str.next());
// console.log(str.next());

function* f(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const counter = f(19);

// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());

for (let k of f(7)) {
    console.log(k);
}