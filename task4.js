

console.log('======= Задание № 1 ==========');

// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.


function num2Obj(num) {
    if (isNaN(num)) {
        console.log('Ошибка: параметр не является числом');
    } else if (num > 999 || num < 0) {
        console.log('Ошибка: допустимый диапазон 0-999');
        var obj = {};
        return obj;
    } else {
        var digits = ['единицы', 'десятки', 'сотни'];
        var obj = {};
        var i = 0;
        for (var i = 0; num != 0; i++) {
            obj[digits[i]] = num % 10;
            num = (num - num % 10) / 10;
        }
    }
    return obj;
}
console.log(num2Obj(678));
console.log(num2Obj(45));
console.log(num2Obj(5));


console.log('======= Задание № 2 ==========');


// 2.Продолжить работу с интернет - магазином:
// 2.1.В прошлом домашнем задании вы реализовали корзину на базе массивов.Какими объектами можно заменить их элементы ?
//     2.2.Реализуйте такие объекты.
// 2.3.Перенести функционал подсчета корзины на объектно - ориентированную базу.

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
console.log('товаров в корзине на сумму ' + basket.allproduct() + ' руб.');



