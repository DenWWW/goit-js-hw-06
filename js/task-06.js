/*
1. Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
2. Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
*/

const input = document.getElementById('validation-input');

input.addEventListener('blur', (event) => {
  const expectedLength = parseInt(event.target.getAttribute('data-length'));
  const actualLength = event.target.value.length;

  if (actualLength === expectedLength) {
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');
  } else {
    event.target.classList.remove('valid');
    event.target.classList.add('invalid');
  }
});
