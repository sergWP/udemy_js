'use strict';

/*
Какое будет выведено значение: let x = 5; alert( x++ ); ?
Чему равно такое выражение: [ ] + false - null + true ?
Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
Чему равна сумма [ ] + 1 + 2?
Что выведет этот код: alert( "1"[0] )?
Чему равно 2 && 1 && null && 0 && undefined ?
Есть ли разница между выражениями? !!( a && b ) и (a && b)?
Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
Что выведет этот код: alert( +"Infinity" ); ?
Верно ли сравнение: "Ёжик" > "яблоко"?
Чему равно 0 || "" || 2 || undefined || true || falsе ?
 */

// let x = 5; console.log(x++); // 5
// console.log([ ] + false - null + true ); // NaN
// let y = 1; let x = y = 2; console.log(x); // 2
// console.log([ ] + 1 + 2); // string // 12
// console.log( "1"[0] ); // 1

// console.log(2 && 1 && null && 0 && undefined); // null
// И запинается на лжи
// ИЛИ запинается на правде

// console.log(!!( 1 && 2 ) === (1 && 2)) // false
// console.log(null || 2 && 3 || 4); // 3

// let a = [1, 2, 3],
//     b = [1, 2, 3];
// console.log(a == b) // false

// console.log(+"Infinity") // Infinity
// "Ёжик" > "яблоко"  // false

// console.log( 0 || "" || 2 || undefined || true || falsе ); // 2