
console.log('======= Задание № 1 ========');


// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. (использовать createElement / appendChild)

function drawChess() {
    let mainBlock = document.querySelector('.main-block');
    let block;
    let flag = true;




    let figure = {
        0: ['-263px -19px', '-484px -22px', '-372px -17px', '-150px -16px', '-150px -16px', '-372px -17px', '-484px -22px', '-263px -19px'],
        1: ['-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px'],
        6: ['-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px'],
        7: ['-263px -116px', '-484px -116px', '-372px -116px', '-150px -116px', '-150px -116px', '-372px -116px', '-484px -116px', '-263px -116px'],
    };


    for (let i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            if (j == 0) flag = !flag;

            block = document.createElement('div');
            if (flag) block.className = 'block black';
            else block.className = 'block white';

            if (figure[i] !== undefined && figure[i][j] !== undefined) {
                block.style.backgroundImage = 'url(сhess_symbols_set_.png)';
                block.style.backgroundPosition = figure[i][j];
            }

            mainBlock.appendChild(block);
            flag = !flag;
        }
    }
}

drawChess();


console.log('======= Задание № 2 ========');

// 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 2.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

console.log('======= Задание № 3 ========');


// 3*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
// 3.1. Создать массив товаров (сущность Product);
// 3.2. При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.