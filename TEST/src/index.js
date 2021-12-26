// IMPORT
const myModule = require('./js/script_71');
const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.bye();

// ES6 import
// импорт попереммнным
import sayHi, {one, two} from './js/script';
console.log(`${one} and ${two}`);

// переименовывание
import {one as first} from './js/script';
console.log(`One as First: ${first}`);

// импорт всего и определяем как data
// import * as data from './js/script';
// data.sayHi();

// напрямую импортируем
import seyHi from  './js/script';
sayHi();