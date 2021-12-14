'use strict';

window.addEventListener('DOMContentLoaded', function() {

    const slider = document.querySelector('.offer__slider'),
          sliderWrapper = slider.querySelector('.offer__slider-wrapper'),
          sliderCounter = slider.querySelector('.offer__slider-counter'),
          sliderCounterPrev = sliderCounter.querySelector('.offer__slider-prev'),
          sliderCounterNext = sliderCounter.querySelector('.offer__slider-next'),
          slides = sliderWrapper.querySelectorAll('.offer__slide');

    let currentSlide = sliderCounter.getAttribute('data-current');

    // hide slides
    const hideAllSlides = () => {
        slides.forEach((slide) => {
            slide.classList.add('hide');
        });
    };

    hideAllSlides();

    // counter modification
    const sliderModification = (i) => {
        hideAllSlides();

        i > slides.length ? i = 1 : null;
        i === 0 ? i = slides.length : null;

        sliderCounter.setAttribute('data-current', i);
        sliderCounter.querySelector('#current').innerHTML = i < 10 ? `0${i}` : i;
        slides[i-1].classList.remove('hide');
    };

    sliderModification(currentSlide);

    // show next slide
    const showNextSlide = (current) => {
        current = current + 1;
        sliderModification(current);
    };

    const showPrevSlide = (current) => {
        current = current - 1;
        sliderModification(current);
    };

    sliderCounterNext.addEventListener('click', () => {
        let currentSlide = +sliderCounter.getAttribute('data-current');
        sliderModification(currentSlide + 1);
    });

    sliderCounterPrev.addEventListener('click', () => {
        let currentSlide = +sliderCounter.getAttribute('data-current');
        sliderModification(currentSlide - 1);
    });

});