'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // TABS
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', event => {
       const target = event.target;

       if (target && target.classList.contains('tabheader__item')) {
           tabs.forEach((item, i) => {
               if(target == item) {
                   hideTabContent();
                   showTabContent(i);
               }
           })
       }
    });

    // FUNCTIONS
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    //TIMER
    const deadline = '2021-12-1';

    function getTimeRemaining(endtime) {

        const t = (Date.parse(endtime) - Date.parse(new Date())),
              days = Math.floor(t / (60*60*24*1000)),
              hours = Math.floor(t / (60*60*100) % 24),
              minutes = Math.floor(t / (60*100) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }

    }
    
    function addZero(num) {
        if(num > 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

    function setTimer(selector, end) {
        const position = document.querySelector(selector),
              days = position.querySelector('#days'),
              hours = position.querySelector('#hours'),
              minutes = position.querySelector('#minutes'),
              seconds = position.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();
        
        function updateClock() {
            const t = getTimeRemaining(end);

            days.innerHTML = addZero(t.days);
            hours.innerHTML = addZero(t.hours);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);

            if(t.total <= 0) {
                clearInterval(timeInterval)
                console.log('Акция закончилась')
            }

        }

    }

    setTimer('.timer', deadline);

    // MODAL

    const modalAction = document.querySelectorAll('[data-modal]'),
          modalWindow = document.querySelector('.modal'),
          modalClose = modalWindow.querySelector('[data-close]');

    modalAction.forEach( (modal) => {
        modal.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        })
    });

    modalClose.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
    });

    modalWindow.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target === modalWindow) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
       if(e.code === 'Escape' && modalWindow.style.display) {
           closeModal();
       }
    });

    function openModal() {
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modalWindow.style.display = '';
        document.body.style.overflow = '';
    }

    const modalTimerId = setTimeout(openModal, 3000);

    function showModalByScroll() {
        if( window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1 ) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // MENU CARD - CLASS

    class Menu {
        constructor(image, name, description, price, selector, ...classes) {
            this.image = image;
            this.name = name;
            this.description = description;
            this.parent = document.querySelector(selector);
            this.classes = classes; // передаваемые классы в виде массива
            this.price = price;
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = Math.ceil(this.price * this.transfer);
        }

        insertMenuCard() {
            const element = document.createElement('div');

            // проверка, было ли переданы классыв рест-оператором. Указываем классы по умолчанию
            if(this.classes.length === 0) {
                this.classes.push('menu__item');
            }
            this.classes.forEach(className => element.classList.add(className)); // добавление класса с масиива this.classes

            element.innerHTML = `<img src=${this.image} alt="${this.name}">
                                    <h3 class="menu__item-subtitle">${this.name}</h3>
                                    <div class="menu__item-descr">${this.description}</div>
                                    <div class="menu__item-divider"></div>
                                    <div class="menu__item-price">
                                        <div class="menu__item-cost">Цена:</div>
                                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                                    </div>
                                `;
            this.parent.append(element);
        }
    }

    new Menu(
        'img/tabs/vegy.jpg',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9.25,
        '.menu .container'
    ).insertMenuCard();

    new Menu(
        'img/tabs/elite.jpg',
        'Меню "Премиум"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        16.36,
        '.menu .container',
        'menu__item',
        'big'
    ).insertMenuCard();

    new Menu(
        'img/tabs/post.jpg',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14.88,
        '.menu .container',
        'menu__item'
    ).insertMenuCard();

});