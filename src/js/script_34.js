// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('touches >>', e.touches);
        console.log('targetTouches >>', e.targetTouches);
        console.log('changedTouches >>', e.changedTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('end');
    });

});