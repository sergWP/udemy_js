/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms = '';
do {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
} while (!numberOfFilms);

switch (true) {
    case numberOfFilms < 10:
        alert('Просмотрено довольно мало фильмов');
        break;
    case numberOfFilms > 9 && numberOfFilms <= 30:
        alert('Вы классический зритель');
        break;
    case numberOfFilms > 30:
        alert('Вы киноман');
        break;
    default:
        alert('Произошла ошибка');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for(let i = 0; i < 2; i++ ) {
    let question = prompt('Один из последних просмотренных фильмов?', '');

    if(question.length < 50) {
        let rating = +prompt('На сколько оцените его?', '');

        if (rating) {
            personalMovieDB.movies[question] = rating;
        } else {
            i = 0;
        }

    } else {
        i = 0;
    }
}

console.log(personalMovieDB);