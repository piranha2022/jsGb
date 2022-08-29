// ДОМАШНЕЕ ЗАДАНИЕ № 2

// // 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 - В префиксной форме инкрементирование производится сразу, т.е. с = a + 1 = 2
// d = b++; alert(d);           // 1 -В постфиксной форме сначала происходит возвращение значения, т.е. d = b
// c = (2 + ++a); alert(c);      // 5 - сначала к 2 прибавляется a, а потом прибавляется a + 1, c = (2 + 1 + a + 1)
// d = (2 + b++); alert(d);      // 4 - снчала к 2 прибавляется b, а потом прибалвяется 1, d = (2 + b + 1)
// alert(a);                    // 3 - потому что сначала а = ++а (это 1 + 1 = 2) а потом а = 2 + (++a) = 3
// alert(b);                    // 3 - так как сначала b = b++ это 1, а потом b = 1 + 2 = 3
// // Почему код даёт именно такие результаты?


// // 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2); // x = 1 (2 * 2) = 5
// alert(x);      // 5


// // 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// // если a и b положительные, вывести их разность;
// // если а и b отрицательные, вывести их произведение;
// // если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

// function number(a, b) {
//     if (a >= 0 && b >= 0)
//         console.log(a - b);
//     else if (a <= 0 && b <= 0)
//         console.log(a * b);
//     else
//         console.log(a + b);
// }
// number(
//     -10, 5);


// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

// let a = 5;

// switch (a) {
//     case a = 0:
//         console.log(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
//         break;
//     case a = 0:
//         console.log(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
//         break;
//     case a = 1:
//         console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
//         break;
//     case a = 2:
//         console.log(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
//         break;
//     case a = 3:
//         console.log(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
//         break;
//     case a = 4:
//         console.log(4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
//         break;
//     case a = 5:
//         console.log(5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
//         break;
//     case a = 6:
//         console.log(6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
//         break;
//     case a = 7:
//         console.log(7, 8, 9, 10, 11, 12, 13, 14, 15);
//         break;
//     case a = 8:
//         console.log(8, 9, 10, 11, 12, 13, 14, 15);
//         break;
//     case a = 9:
//         console.log(9, 10, 11, 12, 13, 14, 15);
//         break;
//     case a = 10:
//         console.log(10, 11, 12, 13, 14, 15);
//         break;
//     case a = 11:
//         console.log(11, 12, 13, 14, 15);
//         break;
//     case a = 12:
//         console.log(12, 13, 14, 15);
//         break;
//     case a = 13:
//         console.log(13, 14, 15);
//         break;
//     case a = 14:
//         console.log(14, 15);
//         break;
//     case a = 15:
//         console.log(15);
//         break;
//     default:
//         console.log('введите число от 0 до 15');


// }

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.



function numberSumm(a, b) {
    return a + b;
}
function numberDifference(a, b) {
    return a - b;
}
function numberMultiplication(a, b) {
    return a * b;
}
function numberDivision(a, b) {
    return a / b;
}

// summ = numberSumm(a, b);
// // console.log('Сумма чисел ' + summ);
// difference = numberDifference(a, b);
// console.log('Разность чисел ' + difference);
// multiplication = numberMultiplication(a, b);
// console.log('Произведение чисел ' + multiplication);
// division = numberDivision(a, b);
// console.log('Деление чисел ' + division);



// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case ('Сумма'):
            result = numberSumm(arg1, arg2);
            console.log(result);
            break;

        case ('Разность'):
            result = numberDifference(arg1, arg2);
            console.log(result);
            break;

        case ('Произведение'):
            result = numberMultiplication(arg1, arg2);
            console.log(result);
            break;

        case ('Деление'):
            result = numberDivision(arg1, arg2);
            console.log(result);
            break;
    }
}

mathOperation(10, 20, 'Произведение');





