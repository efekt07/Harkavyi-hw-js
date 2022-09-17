// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

const hamburger = 5;
const fries = 1;

if(hamburger >= 3 && fries >= 1){
    console.log('Ми поїли');
} else {
    console.log('Ми йдемо в інше кафе')
}

// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

let price = 1200;

if(price >= 1000 && price <= 1900){
    console.log('Ціна в діапазоні')
} else {
    console.log('Ціна поза діапазоном')
}


// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
// Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
// Результат виводити в консоль.

let price2 = 1900;

if(price2 < 1000 || price2 > 1900){
    console.log('Ціна поза діапазоном')
} else {
    console.log('Ціна в діапазоні')
}


let price3 = 2100;

if(price3 !== 1000 && price3 < 1000 || price3 !== 1900 && price3 >1900){
    console.log('Ціна поза діапазоном')
} else {
    console.log('Ціна в діапазоні')
}


// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

let seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
let num = 3;
if(num === 1){
    console.log(seasons[0]);
} else if(num === 2){
    console.log(seasons[1]);
} else if(num === 3){
    console.log(seasons[2]);
} else {
    console.log(seasons[3]);
}


// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

let a = 1;
let b = 2;
let c = 3;

if (a > b){
    if (a > c){
    console.log(`a = ${a}`)
    } else if (b > a && b > c){
    console.log(`b = ${b}`)
}
} else {
    console.log(`c = ${c}`)
}


// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

let day = 5;

switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');  
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday'); 
        break;
}


// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

let symbol = "*";
let num1 = 4;
let num2 = 2;

switch(symbol){
    case "+":
        console.log('Додавання');
        let result1 = num1 + num2;
        console.log(result1)
        break;
    case "-":
        console.log('Віднімання');
        let result2 = num1 - num2;
        console.log(result2)
        break;
    case "*":
        console.log('Множення');
        let result3 = num1 * num2;
        console.log(result3)
        break;
    case "/":
        console.log('Ділення');  
        let result4 = num1 / num2;
        console.log(result4)
        break;
}


// 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

string = 'Columbia';
console.log(string);
newString = string.replace(/o/g, '').replace(/u/g, '').replace(/i/g, '').replace(/a/g, '');
console.log(newString);

string = 'Columbia';
console.log(string);
newString = string.replace(/[ouia]/g, '')
console.log(newString);

// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закнченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

//     Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
//     https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk
