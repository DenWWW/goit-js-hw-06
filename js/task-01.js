/*
- Напиши скрипт, який:

1.Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. -- done

2.Для кожного елемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього). 
Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM. -- done
*/

const categories = document.querySelectorAll('ul#categories > li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul > li');
  console.log(`Category: ${categoryName}`);
  console.log(`Number of items: ${categoryItems.length}`);
});