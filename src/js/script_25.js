'use strict';

const state = {
    base: '/',
    privat: true,
    mounting: function () {
        name: 'Peter'
    }
}

const { mounting: {name} } = state;

console.log(name);

if (state.privat) {
    console.log('PRIVAT')
}

const viva = () => {
    console.log( 'Viviven' );
}

const arr = [4, 5, 100];
arr.push(2021);

console.log(arr);

viva();


