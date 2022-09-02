// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

console.log('=========== Задание № 1 ===========');

let number = 2;

while (number <= 100) {
    let check = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            check = false;
            break;
        }
    }
    if (check) console.log(number);
    number++;
}




// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

console.log('=========== Задание № 2 ===========');

// function getNumber(min, max) {
//     let number = parseInt(Math.random() * (max - min) + min);
//     if (number === -0) number = 0;
//     return number;
// }
let basket = [
    {
        product: "галстук",
        price: 50
    },
    {
        product: "рубашка",
        price: 100
    },
    {
        product: "ботинки",
        price: 150
    },
    {
        product: "брюки",
        price: 200
    }
];
let basketPrice = 0;
for (let prod of basket) {
    basketPrice += prod.price;
    console.log("Товар " + prod.product + " стоит: " + prod.price + " руб.");
}


function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket) {
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket) + " руб.");

// 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//     for(…){// здесь пусто}

console.log('=========== Задание № 3 ===========');
for (let i = 0; i < 10; console.log(i++)) { }


// 4. * Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

console.log('=========== Задание № 4 ===========');

let i = 0,
    j = 0;
let max = 20;

while (i < max) {
    space = "";
    star = "";
    for (j = 0; j < max - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) star += "*";
    console.log(space + star);
    i++;
}





