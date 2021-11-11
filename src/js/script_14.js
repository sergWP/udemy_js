'use strict';

// WHILE
let num = 50;
while (num <= 55) {
    console.log(num);
    num++;
}

// DO ... WHILE
let count = 10;
do {
    console.log(count);
    count++;
}
while (count < 15);

// FOR
for (let i = 1; i < 10; i++) {
    if (i == 6) {
        //break;      // прерываем цикл
        continue;   // пропускаем 6
    }
    console.log(i);
}