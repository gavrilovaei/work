/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
// console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const name1 = prompt("Один из последних просмотренных фильмов?", ""),
    rate1 = prompt("На сколько оцените его?", ""),
    name2 = prompt("Один из последних просмотренных фильмов?", ""),
    rate2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[name1] = rate1;
personalMovieDB.movies[name2] = rate2;
console.log(personalMovieDB);