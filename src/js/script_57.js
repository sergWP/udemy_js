'use strict';

// filter
const names = ['Ivan', 'anna', 'Ksenia', 'Volodimir'];
const shortNames = names.filter(function (name) {
   return name.length < 5
});
// console.log(shortNames);


// map
let answers = ['ADaab', 'FOLA', 'Andrew'];
answers = answers.map(item => {
    return item.toLowerCase()
});
// console.log(answers);


// every/some
const arr = [4, 'wdw', 'VARRA'];
const arr2 = [4, 5, 100];
const someRes = arr.some(item => {
    return typeof (item) === 'number'
});
const everyRes = arr2.every(item => {
    return typeof (item) === 'number'
});
// console.log(someRes);
// console.log(everyRes);


// reduce
const arr3 = [4,5,8,12,40];
const arrString = ['apple', 'plum', 'grip'];
const arr3res = arr3.reduce((sum, current)=>{
    return sum + current;
});

const arrStringRes = arrString.reduce((sum, current) => `${sum}, ${current}`);

// console.log(arr3res);
// console.log(arrStringRes);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newaArr = Object.entries(obj)
    .filter(item => {
        return item[1] === 'persone'
    }).map(item => item[0]);

console.log(newaArr)