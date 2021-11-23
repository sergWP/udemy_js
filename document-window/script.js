'use strict';
// https://drive.google.com/file/d/1eTxWzmaDfN0CXHC7Dv_AE39A1GlNO1nI/view

const box = document.querySelector('.box'),
      button = document.querySelector('button');

const width = box.clientWidth,
      height = box.clientHeight;

const offsetWidth = box.offsetWidth,
      offsetHeight = box.offsetHeight;

// console.log('width >>', width);
// console.log('height >>', height);

// console.log('width >>', offsetWidth);
// console.log('height >>', offsetHeight);

button.addEventListener('click' , () => {
    // BUG?
    // max-height 75%
    console.log( Math.floor(( box.scrollTop * 100) / box.scrollHeight ) + '%');
});

console.log(box.getBoundingClientRect())