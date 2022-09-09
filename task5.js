



// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. (использовать createElement / appendChild)

function renderchessboard() {
    const chessBoard = document.querySelector(".chess-board");
    const refCell = document.createElement("div");
    refCell.classList.add("chess-cell");
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];


    for (let colomn = 0; colomn <= 9; colomn++) {
        if (colomn == 0 || colomn == 9) {
            for (let rows = 0; rows <= 9; rows++) {
                let cell = refCell.cloneNode(true);
                chessBoard.appendChild(cell);
                if (rows > 0 && rows < 9) {
                    cell.textContent = rows
                }
            }
        }
        else {
            for (let rows = 0; rows <= 9; rows++) {
                let cell = refCell.cloneNode(true);
                chessBoard.appendChild(cell);

                if (rows == 0 || rows == 9) {

                    cell.textContent = alphabet[colomn - 1]
                } else {
                    if (rows % 2 != 0 && colomn % 2 != 0 || colomn % 2 == 0 && rows % 2 == 0) {
                        cell.classList.add("chess-cell_black");
                    } else {
                        cell.classList.add("chess-cell_white");
                    }
                }
            }
        }
    }
}
renderchessboard();





// 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 2.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».


let basket = {
    product: [{
        name: "галстук",
        price: 50,
        img: 'img/galstuk.svg'
    },
    {
        name: "рубашка",
        price: 100,
        img: 'img/rubashka.svg'
    },
    {
        name: "ботинки",
        price: 150,
        img: "img/botinki-1.jpg"
    },
    {
        name: "брюки",
        price: 200,
        img: "img/bruki.svg"
    },

    ],

}


function renderCart() {
    const cartBody = document.querySelector(".shop");
    const productInnerCart = [];
    for (let i = 0; i < 2; i++) {
        productInnerCart.push(basket.product[i])
    }
    if (productInnerCart == 0) {
        cartBody.insertAdjacentHTML("beforeend", `Корзина пуста`)
    } else {
        let m = null
        productInnerCart.forEach(element => {
            m += element.price
        });
        cartBody.insertAdjacentHTML("beforeend", `
        В корзине: ${productInnerCart.length} товаров на сумму ${m} рублей
        `)
    }



}
renderCart()

function renderCatalog() {
    const catalogBody = document.querySelector("#catalog");


    for (const product of basket.product) {
        catalogBody.insertAdjacentHTML("afterbegin", `
        <div class="catalog__product">
            <h2 class="product-heading">${product.name}</h2>
            <img class="product-img" src="${product.img}" alt="${product.name}">
            <span class=product-price>${product.price}</span>
            <button>Добавить в корзину</button>
        </div>
    `)


    }
}
renderCatalog()
