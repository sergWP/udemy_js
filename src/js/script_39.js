'use strict';

const timerId = setTimeout(() => {
    console.log('hello')
}, 2000);

const timerId2 = setTimeout((text) => {
    console.log(text)
}, 2000, 'Boobba');

/////
const timerId3 = setTimeout(logger, 1);

function logger() {
    if(i === 3) {
        clearInterval(timedId4);
    }
    console.log('Text');
    i++;
}

clearTimeout(timerId3);
/////

const btn = document.querySelector('.button');
let timedId4,
    i = 0;

btn.addEventListener('click', ()=> {
   //const timedId4 = setTimeout(logger, 1000);
   const timedId4 = setInterval(logger, 1000);
});

// если функция большая, задержка работает не правильно
// рекурсивный setTimeout

let id = setTimeout( function log() {
    console.log('hello');
    id = setTimeout(log, 500);
}, 500);