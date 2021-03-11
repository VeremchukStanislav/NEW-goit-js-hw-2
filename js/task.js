'use strict';

// Задание 1
// Запиши условие в инструкции if так, чтобы функция работала правильно.

function checkAge(age) {
  if (age >= 18) {
    return 'Вы совершеннолетний человек';
  }

  return 'Вы не совершеннолетний человек';
}

// Задание 2
// Функция checkPassword получает пароль пользователя в параметр password,
// проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD
// и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

//     удали переменную message;
//     удали else;
//     код должен работать так же, как и до оптимизации.


function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';

  if (password === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  }

  return 'Доступ запрещен, неверный пароль!';
}

checkPassword('mangohackzor')
checkPassword('polyhax')
checkPassword('jqueryismyjam')

// Задание 3
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате.
// Она принимает два параметра, значения которых будут задаваться во время её вызова.

//     available - доступное количество товаров на складе;
//     ordered - количество единиц товара в заказе.

// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

function checkStorage(available, ordered) {

  if (ordered === 0) {
    return 'В заказе еще нет товаров';
  } if (ordered > available) {
    return 'Слишком большой заказ, на складе недостаточно товаров!';
  } 
    return 'Заказ оформлен, с вами свяжется менеджер';
}

// Задание 4
// Объяви переменную fruits и присвой ей массив фруктов - строк 'яблоко', 'слива', 'груша' и 'апельсин'.

const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// Задание 5
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.
// Имя переменной 	Значение переменной
// firstElement 	первый элемент массива
// secondElement 	второй элемент массива
// lastElement 	последний элемент массива

const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

// Задание 6
// Переопредели значения элементов с индексами 1 и 3. Замени 'слива' на 'персик', а 'апельсин' на 'банан'.

const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
fruits[1] = 'персик';
fruits[3] = 'банан';

// Задание 7
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

const fruits = ['яблоко', 'персик', 'груша', 'банан'];
const fruitsArrayLength = fruits.length

// Задание 8
// Объяви две перемнные:
// Имя переменной 	Ожидаемое значение
// lastElementIndex 	индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement 	значение последнего элемента массива

const fruits = ['яблоко', 'персик', 'груша', 'банан'];
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

// Задание 9
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

function getExtremeElements(array) {
    
    const firstElem = array[0];
    const lastIndexElem = array.length - 1;
    const lastElem = array[lastIndexElem];
    const newArray = [firstElem, lastElem];

  return newArray

  }

getExtremeElements([1, 2, 3, 4, 5])
getExtremeElements(['Земля', 'Марс', 'Венера'])
getExtremeElements(['яблоко', 'персик', 'груша', 'банан'])

// Задание 10
// Дополни код функции splitMessage(message, delimeter) так,
// чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

function splitMessage(message, delimeter) {
  let words;
    words = message.split(delimeter);
  console.log(words)
  return words;
}

splitMessage('Манго спешит на поезд', ' ');
splitMessage('Манго', '');
splitMessage('лучшее_за_неделю', '_');

// // Задание 11
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки,
// в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord).
// Эта функция принимает строку, состоящую из слов разделённых только пробелами(параметр message)
// и цену гравировки одного слова(параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

function calculateEngravingPrice(message, pricePerWord) {

const arrayMessage = message.split(' ');
  return arrayMessage.length * pricePerWord;

}

// // Задание 12
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string
// результат соединения элементов массива array c разделителем delimeter - строку.



// // Задание 13

// // Задание 14

// // Задание 15

// // Задание 16

// // Задание 17

// // Задание 18

// // Задание 19

// // Задание 20

// // Задание 21

// // Задание 22

// // Задание 23

// // Задание 24

// // Задание 25

// // Задание 26

// // Задание 27

// // Задание 28

// // Задание 29

// // Задание 30

// // Задание 31

// // Задание 32

