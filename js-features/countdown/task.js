// Обычная сложность

// let seconds = 10;

// const intervalId = setInterval(() => {
//     seconds--;
//     if (seconds < 1) {
//         clearInterval(intervalId);
//         alert('Вы победили в конкурсе!');
//     }
//     document.getElementById('timer').innerHTML = seconds;
// }, 1000);

// Повышенная сложность 1

// let count = 10;
// let counter = setInterval(timer, 1000);

// function timer() {
//     count--;
    
//     if (count <= 0) {
//         clearInterval(counter);
//         alert('Вы победили в конкурсе!');
//     }

//     function formatTime(seconds) {
//         const hours = Math.floor(seconds / 3600);
//         const minutes = Math.floor((seconds % 3600) / 60);
//         const secs = seconds % 60;
//         return `${('00' + hours).slice(-2)}:${('00' + minutes).slice(-2)}:${('00' + secs).slice(-2)}`;
//     }

//     document.getElementById('timer').innerHTML = formatTime(count);
// }

// Повышенная сложность 2

let count = 10;
let counter = setInterval(timer, 1000);

function timer() {
    count--;
    
    if (count <= 0) {
        clearInterval(counter);
        // Пример: инициировать загрузку файла
        window.location.href = 'https://avatars.mds.yandex.net/get-mpic/11487459/2a00000197ea3d7743d172bd6993b229c87f/orig';
        alert('Время вышло! Файл будет загружен.');
    }

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${('00' + hours).slice(-2)}:${('00' + minutes).slice(-2)}:${('00' + secs).slice(-2)}`;
    }

    document.getElementById('timer').innerHTML = formatTime(count);
}