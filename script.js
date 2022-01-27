'use strict';
const icons = ['img/bridge.svg', 'img/cake.svg', 'img/dress.svg'];

icons.forEach(el => {
    const img = document.createElement('div');
    img.className = 'mini__item';
    img.style.backgroundImage = `url(${el})`;
    img.addEventListener('click', e => showPopup(`<img alt='pic' src='${el}'>`));
    document.body.append(img);

});

const popup = document.querySelector('.popup'),
    popupClose = popup.lastElementChild,
    popupContent = popup.firstElementChild;
const body = document.querySelector('body');

const closePopUp = function (e) {
    e.target.parentElement.style.display = 'none';
    document.body.style.overflow = '';
    body.style.background = 'none';
}

//закрывать при нажатие мышки вне поля
body.addEventListener('click', (e) => {
    e.target.firstElementChild.style.display = 'none';
          body.style.background = 'none';
});



//закрытие при нажатие кнопки esc
document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.keyCode == 27) {
        popup.style.display = 'none';
    }

});

const showPopup = function (text) {
    popup.style.display = 'block';
    popupContent.innerHTML = text;
    document.body.style.overflow = 'hide';
    body.style.background = 'grey';

}

popupClose.addEventListener('click', closePopUp);

//#hw1 link(git)
// 1. Закрывать при нажатие на поле вне картинки 
// 2. Предусмотреть возможность закрытие по кнопке нажатия на кнопки: esc, alt+f4(preventDefaul) 
//3.сделать интерфейс в виде lightbox = все элементы за popup становятся затемнеными (кроме одной картинки, которую показывает)
//4. Запретить промотку если открыта модельное окно