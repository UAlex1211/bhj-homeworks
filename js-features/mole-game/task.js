
// Глобальные переменные для счёта
let killedMoles = 0;
let misses = 0;

// Функция для проверки наличия крота в лунке
function hasMole(hole) {
  // Используем classList.contains для более удобной проверки
  return hole.classList.contains('hole_has-mole');
}

// Обработчик клика по лунке
function handleClick(e) {
  // Получаем кликнутый элемент
  const clickedHole = e.target;

  // Проверяем, есть ли крот в нажатой лунке
  if (hasMole(clickedHole)) {
    // Крот есть — увеличиваем счёт и отображаем его
    killedMoles++;
    document.getElementById('dead').textContent = killedMoles;

    // Если игрок набрал 10 кротов — победа
    if (killedMoles === 10) {
      alert('Победа!');
      resetGame();
    }
  } else {
    // Крота нет — увеличиваем счётчик промахов и отображаем его
    misses++;
    document.getElementById('lost').textContent = misses;

    // Если игрок набрал 5 промахов — игра заканчивается
    if (misses === 5) {
      alert('Проигрыш!');
      resetGame();
    }
  }
}

// // Функция для появления крота в случайной лунке
// function showMole() {
//   // Получаем все лунки
//   const holes = document.querySelectorAll('.hole');

//   // Случайным образом выбираем лунку
//   const randomHole = holes[Math.floor(Math.random() * holes.length)];

//   // Удаляем старый класс (если он есть) и добавляем новый (появился крот)
//   randomHole.classList.remove('hole_has_mole');
//   randomHole.classList.add('hole_has_mole');

//   // После небольшой задержки скрываем крота снова
//   setTimeout(() => {
//     randomHole.classList.remove('hole_has_mole');
//     // Здесь можно вызвать showMole() для следующего появления
//   }, 1000);
// }

// Инициализация игры
function resetGame() {
  killedMoles = 0;
  misses = 0;
  document.getElementById('dead').textContent = 0;
  document.getElementById('lost').textContent = 0;
  showMole(); // Первое появление крота
}

// Регистрируем обработчики событий для всех лунок
const holes = document.querySelectorAll('.hole');
holes.forEach(hole => {
  hole.addEventListener('click', handleClick);
});