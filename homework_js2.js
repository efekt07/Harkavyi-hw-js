// * ЗАВДАННЯ 1
//   *
//   * 1. Оголосіть змінну та присвойте їй стрілочну функцію
//   *
//   * 2. У функції не повинно бути параметрів
//   *
//   * 3. Поверніть з функції рядок "Привіт, світ!"
//   *
//   * 4. Викличте функцію та виведіть результат у консоль
//   *
//   */

const func1 = () => {
    return 'Hello World!'
}
console.log(func1())


// * ЗАВДАННЯ 2
//   *
//   * 1. Виведіть у консоль "Привіт, світ!" із затримкою 5 секунд
//   *
//   * 2. Використовуйте стрілочну функцію
//   */


setTimeout (() => {
    console.log('Hello World')

}, 5000)


// * ЗАВДАННЯ 3
//   *
//   * 1. Створіть об'єкт із трьома властивостями та присвойте його значення змінній:
//   * - name
//   * - surname
//   * - favoriteNumber
//   *
//   * 2. Напишіть функцію, що прийматиме цей обʼєкт як аргумент і
//   *     створюватиме в ньому додаткове поле age з довільним значенням.
//   * Результат роботи функції це вивід у консоль рядка
//   * "My name is <name> <surname>, I'm <age> years old and my favorite number is <favoriteNumber>"
//   */

let object = {
    name: 'Yaroslav',
    surname: 'Harkavyi',
    favoriteNumber: '5'
};

const func3 = (f) => {
    f.age = '28';
    console.log(`My name is ${f.name} ${f.surname}, I'm ${f.age} years old and my favorite number is ${f.favoriteNumber}`)
};

func3(object)


// * ЗАВДАННЯ 4
//   *
//   * 1. Створіть масив з кількома елементами таких типів (int, boolean, string)
//   *
//   * 2. Створіть стрілочну функцію, що прийматиме цей масив як аргумент.
//   *
//   * 3. В функції замініть елемент масиву з типом int на інший з типом string
//   *
//   * 4. Поверніть новий масив як результат роботи функції та виведіть його у консоль
//   */

let arr = [3, 'Ukraine', true, false]

const func4 = (newArr) => {
    newArr[0] = 'Lviv';
    return newArr;
}
console.log(func4(arr))


// * ЗАВДАННЯ 5
//   *
//   * 1. Виправте код щоб обидва вирази (setTimeout та myFn()) працювали.
//   *
//   * setTimeout(function myFn() {
//   * console.log('hello from myFn')
//   * }, 2000)
//   *
//   * myFn()
//   */

function myFn(){
    setTimeout(function(){
console.log('hello from myFn')
}, 2000)
}

myFn()

// або

const myFn = () => {
    setTimeout(() => {
console.log('hello from myFn')
}, 2000)
}

myFn()

// * ЗАВДАННЯ 6
//   *
//   * 1. Створіть масив із 3 об'єктами "cars"
//   *
//   * 2. Кожен об'єкт повинен мати три властивості
//   * - carBrand (рядок)
//   * - price (число)
//   * - isAvailableForSale (логічне значення)
//   *
//   * 3. Створіть функцію, що прийматиме цей масив в якості аргументу.
//   *
//   * 4. В середині функції додайте ще один такий же обʼєкт в масив.
//   *     Не створюйте новий обʼєкт в середині функції, а візьміть його з масиву.
//   *
//   * 5. Поверніть з функції новий масив. Результат роботи функції виведіть у консоль.
//   */

let cars = [
    {
        carBrand : 'Toyota',
        price : 25000,
        isAvailableForSale : true
    },
    {
        carBrand : 'Honda',
        price : 22000,
        isAvailableForSale : false
    },
    {
        carBrand : 'Subaru',
        price : 18000,
        isAvailableForSale : true
    }
]

const func6 = (carsNew) => {
      carsNew.splice(2, 0, carsNew[0]);
      return carsNew
}
console.log(func6(cars))


// * ЗАВДАННЯ 7
//   *
//   * 1. Створіть обʼєкт
//   *
//     const myObject = {
//         key1: true,
//         key5: 10,
//         key3: 'abc',
//         key4: null,
//         key10: NaN,
//      }
//   *
//   * 2. Створіть функцію, що прийматиме цей обʼєкт як аргумент.
//   *
//   * 3. У функції реалізуйте логіку: якщо назва властивості (ключ) дорівнює key3 або key10
//   *     то виводьте значення властивості в консоль.
//   */

const myObject = {
    key1: true,
    key5: 10,
    key3: 'abc',
    key4: null,
    key10: 3,
}
const func7 = (obj) => {
    if (obj.hasOwnProperty('key3')) {
        console.log(obj.key3)
    }
    if (obj.hasOwnProperty('key10')) {
        console.log(obj.key10)
    }
}
func7(myObject);


// ** ЗАВДАННЯ 8
//   *
//   * 1. Створіть функцію "findProductById" із двома параметрами:
//   * - ID товару
//   * - масив товарів
//   *
//   * 2. Функція повинна повернути товар із певним ID
//   *
//   * 3. Якщо товару з певним ID у масиві товарів немає,
//   * функція має повернути "undefined"
//   *
//   * 4. Також всередині функції виведіть у консоль товар по ID

const products = [
    { productId: 1355, name: 'phone' },
    { productId: 5131, name: 'laptop' },
    { productId: 6134, name: 'tablet' },
]

function findProductById(id, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].productId === id) {
        console.log(arr[i]);
        return `{ postID: ${arr[i].productId}, name: ${arr[i].name}}`;
      }
    }
  }
console.log(findProductById(6134, products))



/** ЗАВДАННЯ 9
 *
 * 1. Створіть функцію "arraySortInfo" з одним параметром - "inputArray", та реалізуйте наступну логіку
 *
 * 2. Якщо хоча б один елемент у масиві не є числом – повернути "Деякі елементи не є числами"
 *
 * 3. Якщо числа у масиві відсортовані за зростанням - повернути "Масив відсортований за зростанням"
 *
 * 4. Якщо числа в масиві відсортовані за спаданням - повернути "Масив відсортований за спаданням".
 *
 * 5. Якщо масив не відсортований - повернути "Масив не відсортований"
 */

/*  const a = [5, 'abc', 10, 1]
 const b = [4, 10, 14, 25, 25, 50]
 const c = [150, 132, 80, 40]
 const d = [15, 26, 10, 23, 85]

 console.log(arraySortInfo(a)) // Деякі елементи не є числами
 console.log(arraySortInfo(b)) // Масив відсортований за зростанням
 console.log(arraySortInfo(c)) // Масив відсортований за спаданням
 console.log(arraySortInfo(d)) // Масив не відсортований */

 /**
  * ПІДКАЗКИ
  *
  * Підказка 1: Використовуйте метод масивів "every"
  * Підказка 2: Ви повинні використовувати два параметри в колбек функції "element", "index"
  * Підказка 3: Кожен елемент масиву, крім першого, слід порівнювати з попереднім
  */


// тут я написав те, що ви пояснювали в кінці минулого заняття, але так і не розібрався)
const a = [5, 'abc', 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];


function arraySortInfo(array){

    if(array.every((element, index) => {
        if(index > 0){
            return element >= array[index-1]
        } else {
            return true
        }
    } )){
        return 'Масив відсортований за зростанням'
    }
}

console.log(arraySortInfo(b));