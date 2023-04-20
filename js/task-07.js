// вибираємо елементи з DOM
/*
Напиши скрипт, який реагує на зміну значення `input#font-size-control` (подія `input`) і змінює інлайн-стиль `span#text`, оновлюючи властивість `font-size`. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
*/

const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function handleFontSizeChange() {
  const fontSize = fontSizeControl.value + 'px';
  text.style.fontSize = fontSize;
}

fontSizeControl.addEventListener('input', handleFontSizeChange);