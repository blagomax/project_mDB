/* Задания на урок 30:

1) Удалить все рекламные блоки со страницы (правая часть сайта) done

2) Изменить жанр фильма, поменять "комедия" на "драма" done

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS done 

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту  

5) Добавить нумерацию выведенных фильмов */


/* Задания на урок 33:

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


// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     const t = document.querySelector('.adding__input').value;
//     alert(t);
// });

// console.log(t);
// console.log(x);

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Марсианин",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };
    
    //Решение первой задачи
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

        addForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let newFilm = addInput.value;
            const favorite = checkbox.checked;

            if (newFilm) {

                if (newFilm.length > 21) {
                    newFilm = `${newFilm.substring(0,22)}...`;
                }

                if (favorite) {
                    console.log("Добавляем любимый фильм");
                }

                movieDB.movies.push(newFilm);
                
                createMovieList(movieDB.movies, movieList);
            }

            event.target.reset();

        });

         
   
    
    //решение второй задачи

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };


    const makeChanges = () => {
        genre.textContent = "Драма";

    poster.style.cssText = "background-image: url(img/bg.jpg)"
    };

   
    
    // const name = document.querySelector('.promo__genre');
    // console.log(name);
    
    // document.querySelector('.promo__genre').innerHTML = "драма";
    
    //решение третьей задачи
    
    
    // const name = document.querySelector('.promo__genre');
    // name.textContent = "Драма";
    
    //решение четвертой задачи

    const sortArr = (arr) => {
        arr.sort();
    };
    
    

    function createMovieList(films, parent) {

        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);

            });
        });
    }

    sortArr(movieDB.movies);
    makeChanges();
    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);

});






