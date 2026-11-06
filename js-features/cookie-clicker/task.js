const cookie = document.getElementById('cookie'); // Элемент печеньки
const scoreDisplay = document.getElementById('clicker__counter'); // Элемент для вывода счёта
let score = 0; // Счётчик кликов
let lastClickTime = null; // Время последнего клика (для расчёта скорости)
let isSmall = false; // Флаг для чередования размера

// Обработчик клика
cookie.addEventListener('click', () => {
  // Увеличиваем счёт
  score++;
  scoreDisplay.textContent = score;

  // Меняем размер печеньки
  isSmall = !isSmall;
  const newSize = isSmall ? '150px' : '200px'; // Пример размеров
  cookie.style.width = newSize;
  cookie.style.height = newSize;

  // Расчёт и вывод скорости (опционально)
  const currentTime = new Date().getTime();
  if (lastClickTime) {
    const interval = currentTime - lastClickTime; // Интервал в миллисекундах
    const clicksPerSecond = 1000 / interval; // Переводим в клики в секунду
    document.getElementById('speed').textContent = `${clicksPerSecond.toFixed(2)} кл/с`;
  }
  lastClickTime = currentTime; // Запоминаем время текущего клика
});