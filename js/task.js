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

function makeStringFromArray(array, delimeter) {
  let string;

 string = array.join(delimeter);
 
  return string;
}

// // Задание 13
// Термин slug - это человеко - понятный уникальный идентификатор, который используется в веб - разработке
// для создания читабельных URL - адесов.

// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com / posts / 1q8fh74tx,
// можно сделать slug из названия статьи.
// В результате адрес получится более приятным для восприятия: mysite.com / posts / массивы - для - новичков.
// Внимание

// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug,
// созданный из этой строки.

//     Значением параметра title будут строки, слова которых разделены только пробелами.
//     Все символы slug должны быть в нижнем регистре.
//     Все слова slug должна быть разделены тире.

function slugify(title) {
 
  const lowerCaseWords = title.toLowerCase();
  const words = lowerCaseWords.split(' ');
  const slug = words.join('-');

  return slug;
}
console.log(slugify('Массивы для новичков'));
console.log(slugify('Английский для разработчика'));
console.log(slugify('Десять секретов JavaScript'));
console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ'));

// Задание 14
Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

    firstTwoEls - массив из первых двух элементов.
    nonExtremeEls - массив из всех элементов кроме первого и последнего.
    lastThreeEls - массив из трёх последних элементов.

const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
const firstTwoEls = fruits.slice(0,2);
console.log(firstTwoEls);
const nonExtremeEls = fruits.slice(1,4);
console.log(nonExtremeEls);
const lastThreeEls = fruits.slice(2);
console.log(lastThreeEls);

// // Задание 15
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
const newClients = ['Персик', 'Хьюстон'];

const allClients = oldClients.concat(newClients); 

// // Задание 16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива
// со всеми элементами двух исходных firstArray и secondArray.
// Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength,функция должна вернуть копию массива длиной maxLength элементов.

// В противном случае функция должна вернуть новый массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
const newArr = firstArray.concat(secondArray);

return newArr.slice(0,maxLength);
  }
console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));
console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4));
console.log(makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3));
console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2));
console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4));

// // Задание 17
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

const start = 3;
const end = 7;

for (let i = start; i <= end ; i += 1 ) {
  console.log(i);
}

// // Задание 18
// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number)
// и возвращает сумму всех целых чисел от единицы и до этого числа.
// Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

function calculateTotal(number) {
  let total = 0;
for (let i = 0; i <= number; i += 1){
    total += i;
}

  return total;
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
console.log(calculateTotal());

// // Задание 19
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

for (let i = 0; i < fruits.length; i += 1) { 
  const fruit = fruits[i]; 
  console.log(fruit);
}

// // Задание 20
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел,
// и рассчитывает общую сумму его элементов.
// Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

function calculateTotalPrice(order) {
 let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
// total += order[i]; }
//   console.log(order);
//   return total;
// }
  
  for (const ordered of order) {
total += ordered; }
  console.log(order);
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice());

// // Задание 21
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов
// разделённых пробелом
// (параметр string) и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0];
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
     
  }
   return longestWord

}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
console.log(findLongestWord());

// // Задание 22
// Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив 
// всех целых чисел от значения min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i < max; i += 1){
    numbers.push(i);
  }
  return numbers;
}
  console.log(createArrayOfNumbers(1, 3));
  console.log(createArrayOfNumbers(14, 17));
  console.log(createArrayOfNumbers(29, 34));

// // Задание 23
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел(параметр numbers) и возвращает новый массив,
// в котором будут только те элементы массива numbers, которые больше чем значение параметра value(число).

function filterArray(numbers, value) {
  const biggestNumber = [];
  for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] > value ){
      biggestNumber.push(numbers[i]);
      }
  }

  return biggestNumber;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

// // Задание 24
// Функция checkFruit(fruit) принимает строку с названием фрукта(параметр fruit),
// и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

//     фрукт есть в массиве, то функция возвращает true;
//     фрукта нет в массиве, то функция возвращает false.

function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  return fruits.includes(fruit); // Дополни эту строку
}

// // Задание 25
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах[1, 3, 5] и[0, 8, 5, 3] общими будут числа 3 и 5,т.к.они присутствуют в обоих исходных массивах.
// А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины
// в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов,
// которые присутствуют в обоих исходных массивах.

function getCommonElements(array1, array2) {
  let newArray = [];
  for (const number of array1) {
    if (array2.includes(number)) {
      newArray.push(number);
    }
    
  }
  return newArray;
}

// // Задание 26
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

function calculateTotalPrice(order) {
  let total = 0;

for (const number of order){
  total += number}
  return total;
}

// // Задание 27
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
}

// // Задание 28
// Дополни выражения остатка от деления так, чтобы код проходил тесты.

const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 6;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// // Задание 29
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end.
// Чётным считается число которое делится на 2 без остатка.

function getEvenNumbers(start, end) {
  const newArr = [];
  for (let i = start; i <= end; i+=1) {
    if (i % 2 === 0) {
      newArr.push(i);
    }
  }
    return newArr;
}
  console.log(getEvenNumbers(2, 5));
  console.log(getEvenNumbers(3, 11));
  console.log(getEvenNumbers(6, 12) );
  console.log(getEvenNumbers(8, 8));
  console.log(getEvenNumbers(7, 7));
  
// // Задание 30
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break
  }
}

// // Задание 31
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

//     возвращала первое число от start до end, которое делится на divisor без остатка;
//     не использовала оператор break;
//     не использовала переменную number.

function findNumber(start, end, divisor) {
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return i
    }
  }

  return number;
}

// // Задание 32
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива
// массив.includes(значение) - проверяет, есть ли в массиве array значение value,
// возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

function includes(array, value) {
  for (const number of array) {
    if (number === value) {
      return true
    }
  }
return false
}
console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));
console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));
console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива'));
console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви'));