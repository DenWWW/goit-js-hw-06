/*
Напиши скрипт, який для кожного елемента масиву ingredients:

1.Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement(). -- done
2.Додасть назву інгредієнта як його текстовий вміст. -- done
3.Додасть елементу клас item. -- done
4.Після чого, вставить усі <li> за одну операцію у список ul#ingredients. --done
*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const uList = document.querySelector('#ingredients');

const liArray = ingredients.map((ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
});

uList.append(...liArray);