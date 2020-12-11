'use strict';

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button')[1];

// console.log(btns);

// const circles = document.getElementsByClassName('circle'); // метод сам понимает, тчто это класс

// console.log(circles);

// const hearts = document.querySelectorAll('.heart'); //обязательно ставить точку
// console.log(hearts);

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

//29 лекция


const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
//существует только внутри js

// const text = document.createTextNode('Тут был я');

div.classList.add('black');

document.body.append(div);

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[2]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);

div.innerHTML = '<h1>Hello</h1>';
//важно не использовать его для безопасности

div.insertAdjacentElement("beforeend ", '<h2>Hello</h2>');

// div.textContent = "Hello";


