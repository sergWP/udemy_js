'use strict';

// обработка ошибок
try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch (e) {
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
}

// продолжаем выполнять код, даже если получили ошибку

console.log('still normal')