
console.log('======= Задание № 1 ========');


// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. (использовать createElement / appendChild)

function drawChess() {
    let mainBlock = document.querySelector('.main-block');
    let block;
    let flag = true;


    // let alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    // let num = ['1', '2', '3', '4', '5', '6', '7', '8'];

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


let basket = {
    product: [{
        name: "галстук",
        price: 50
    },
    {
        name: "рубашка",
        price: 100
    },
    {
        name: "ботинки",
        price: 150
    },
    {
        name: "брюки",
        price: 200
    }],

    allproduct() {
        let result = null;
        for (let elem of this.product) {
            result += elem.price;

        }
        return result;
    }
}


function renderCart() { // функция генерация корзины
    const cartBody = document.querySelector(".shop"); // получение блока корзины
    const productInnerCart = [];    // создание масива иметирующего наличие или отсутствие товаров
    for (let i = 0; i < 2; i++) {   // получение и добавление товаров из объекта cart
        productInnerCart.push(basket.product[i])
    }
    if (productInnerCart == 0) { // проверка на наличие товаров в корзине
        cartBody.insertAdjacentHTML("beforeend", `Корзина пуста`)
    } else {
        let m = null // создание переменной для хранения суммы товаров 
        productInnerCart.forEach(element => {
            m += element.price * element.count // генерация суммы товаров на основе количества и цен товаров 
        });
        cartBody.insertAdjacentHTML("beforeend", `
        В корзине: ${productInnerCart.length} товаров на сумму ${m} рублей
        `) // вывод количества и суммы товаров .
    }



}
renderCart()

function renderCatalog() { // функция генерации каталога на основе объекта cart
    const catalogBody = document.querySelector("#catalog"); // получение блока каталога


    for (const product of basket.product) { // получение массива из объекта 
        catalogBody.insertAdjacentHTML("afterbegin", `  
        <div class="catalog__product">
            <h2 class="product-heading">${product.name}</h2>
            <img class="product-img" src="${product.img}" alt="${product.name}">
            <span class=product-price>${product.price}</span>
            <button>Добавить в корзину</button>
        </div>
    `) // добавление разметки собраной на основе массива из объекта 


    }
}
renderCatalog()
