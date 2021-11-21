/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener("DOMContentLoaded", () => {

    const promoAdv = document.querySelectorAll('.promo__adv img'),
        promoBg = document.querySelector('.promo__bg'),
        promoGenre = promoBg.querySelector('.promo__genre'),
        form = document.querySelector('form.add'),
        formButton = form.querySelector('button');

    let iterativeList = document.querySelector('.promo__interactive-list'),
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

    let {movies} = movieDB;

    clearMovies();
    sortMovies();
    innerMovies();
    addEvent();

    formButton.addEventListener('click', (event) => {
        event.preventDefault();
        clearMovies();

        let formValue = form.querySelector('input').value,
            favorite = form.querySelector('input[type="checkbox"]');

        if (formValue) {
            if (formValue.length > 21) {
                formValue = `${formValue.substring(0, 21)}...`;
            }
            movies[movies.length] = formValue;

            if (favorite.checked) {
                console.log('Добавляем любимый фильм')
            }
        }

        formReset();
        sortMovies();
        innerMovies();
        addEvent()

    });


    /* FUNCTIONS */

    // CLEAR DEFAULT MOVIES
    function clearMovies() {
        iterativeListItems = iterativeList.querySelectorAll('li');
        iterativeListItems.forEach(item => {
            item.remove();
        });
    }

    // RESET FORM
    function formReset() {
        form.reset();
    }

    // SORT MOVIES
    function sortMovies() {
        movies.sort();
    }

    // INSERT MOVIE TO PAGE FROM OBJ
    function innerMovies() {
        for (let i = 0; i < movies.length; i++) {
            iterativeList.innerHTML += `<li class="promo__interactive-item">${i + 1}) ${movies[i]}<div class="delete"></div></li>`;
        }
        addEvent();
    }

    // EVENT FOR DELETE MOVIE
    function addEvent() {
        let deleteBtns = iterativeList.querySelectorAll('.delete');
        for (let deleteBtn of deleteBtns) {
            deleteBtn.addEventListener('click', deleteMovie);
        }
    }

    // DELETE FUNCTION
    function deleteMovie(e) {
        e.preventDefault();

        const targetMovie = e.target.parentNode.innerText,
            targetMovieArr = targetMovie.split(') ');

        delete movies[targetMovieArr[0] - 1];

        const result = movies.filter(movie => {
            if (movie) {
                return true
            }
        });

        result.sort();
        movies = [];
        for (let key in result) {
            movies[key] = result[key]
        }

        clearMovies();
        sortMovies();
        innerMovies();
        addEvent();

    }

});