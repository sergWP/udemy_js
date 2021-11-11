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

// let numberOfFilms = '';
// do {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// } while (!numberOfFilms);
//
// switch (true) {
//     case numberOfFilms < 10:
//         alert('Просмотрено довольно мало фильмов');
//         break;
//     case numberOfFilms > 9 && numberOfFilms <= 30:
//         alert('Вы классический зритель');
//         break;
//     case numberOfFilms > 30:
//         alert('Вы киноман');
//         break;
//     default:
//         alert('Произошла ошибка');
// }

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// for(let i = 0; i < 2; i++ ) {
//     let question = prompt('Один из последних просмотренных фильмов?', '');
//
//     if(question && question.length < 50) {
//         let rating = +prompt('На сколько оцените его?', '');
//
//         if (rating) {
//             personalMovieDB.movies[question] = rating;
//         } else {
//             i--;
//         }
//
//     } else {
//         i--;
//     }
// }

// let done = false;

// while (!done) {
//     let question1 = prompt('Один из последних просмотренных фильмов?', '');
//     if(question1.length && question1.length < 50) {
//         let rating1 = +prompt('На сколько оцените его?', '');
//
//         if(rating1) {
//             personalMovieDB.movies[question1] = rating1;
//
//             let question2 = prompt('Один из последних просмотренных фильмов 2?', '');
//             if(question2.length && question2.length < 50) {
//                 let rating2 = +prompt('На сколько оцените его 2?', '');
//
//                 if(rating2) {
//                     personalMovieDB.movies[question2] = rating2;
//                     done = true;
//                 }
//             }
//         }
//     }
// }

// do {
//     let question1 = prompt('Один из последних просмотренных фильмов?', '');
//     if(question1.length && question1.length < 50) {
//         let rating1 = +prompt('На сколько оцените его?', '');
//
//         if(rating1) {
//             personalMovieDB.movies[question1] = rating1;
//
//             let question2 = prompt('Один из последних просмотренных фильмов 2?', '');
//             if(question2.length && question2.length < 50) {
//                 let rating2 = +prompt('На сколько оцените его 2?', '');
//
//                 if(rating2) {
//                     personalMovieDB.movies[question2] = rating2;
//                     done = true;
//                 }
//             }
//         }
//     }
// } while (!done);

/** Правильный вариант **/

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);