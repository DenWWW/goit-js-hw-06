/*
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
3. Оновлюй інтерфейс новим значенням змінної counterValue.
*/

const [decrementBtn, counterValue, incrementBtn] = document.querySelectorAll(
  '#counter button, #counter span'
);
let value = 0;

const updateCounter = () => (counterValue.textContent = value);

decrementBtn.addEventListener('click', () => ((value -= 1), updateCounter()));

incrementBtn.addEventListener('click', () => ((value += 1), updateCounter()));

console.log(incrementBtn);
