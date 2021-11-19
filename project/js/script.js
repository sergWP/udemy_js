/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const promoAdv = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg'),
      promoGenre = promoBg.querySelector('.promo__genre'),
      iterativeList = document.querySelector('.promo__interactive-list'),
      iterativeListItems = iterativeList.querySelectorAll('li');

promoAdv.forEach(item => {
    item.remove();
});

promoGenre.innerText = 'драма';
promoBg.style.backgroundImage = 'url(./img/bg.jpg)';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Бурунда",
        "Хабалка"
    ]
};

const moviesSort = movieDB.movies.sort();

iterativeListItems.forEach(item => {
    item.remove();
});

for (let i = 0; i < moviesSort.length; i++) {
    iterativeList.innerHTML += `<li class="promo__interactive-item">${i+1}) ${moviesSort[i]}<div class="delete"></div></li>`;
}





