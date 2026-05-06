console.log("Hello, JavaScript!");

let age = 19;
let name = "Danil";
let isStudent = true;

console.log("Name: ", name);
console.log("Age: ", age);
console.log("Is student: ", isStudent);

let value = 10;
console.log(value);
value = "теперь это строка";
console.log(value);
value = true;
console.log(value);

let newPrice = 10;
console.log("Значение:", newPrice);
console.log("Тип", typeof newPrice);

newPrice = "12";

console.log("Значение:", newPrice);
console.log("Тип", typeof newPrice);

let num = 42;
let str = String(num);
let str2 = num.toString();
let str3 = "" + num;

let strNum = "123";
let int = Number(strNum);
let int2 = parseInt("42.5");
let float = parseFloat("3.14");
let int3 = +"99";

let bool1 = Boolean(1);
let bool2 = !!1;
let bool3 = Boolean(0);
let bool4 = Boolean("");

console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
console.log(true + 1);
console.log(false + 1);
console.log(null + 1);
console.log(undefined + 1);

console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);

let obj1 = { name: "John" };
let obj2 = { name: "John" };

console.log(obj1 == obj2);
console.log(obj1 === obj2);

let obj3 = obj1;
console.log(obj1 === obj3);

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2);


let a2 = 12;
let b2 = 15;

console.log(a2 + b2);


let yourAge = 18;

if (yourAge >= 18) {
   console.log("Доступ разрешен");
} else {
   console.log("Доступ запрещен")
}


let temperature = 15; 

if (temperature < 0) {
    console.log("Холодно");
} else if (temperature >= 0 && temperature <= 20) {
    console.log("Прохладно");
} else {
    console.log("Тепло");
}



let isLoggedIn = true;
let isAdmin = false; 

if (isLoggedIn && isAdmin) {
    console.log("Полный доступ");
} else if (isLoggedIn && !isAdmin) {
    console.log("Ограниченный доступ");
} else {
    console.log("Доступ запрещён");
}


let a3 = 10;
let b3 = "10";

console.log("a3 == b3 :", a3 == b3);   // true
console.log("a3 === b3:", a3 === b3);  // false

let monthNumber = 8; 

switch (monthNumber) {
    case 1:
        console.log("Январь");
        break;
    case 2:
        console.log("Февраль");
        break;
    case 3:
        console.log("Март");
        break;
    case 4:
        console.log("Апрель");
        break;
    case 5:
        console.log("Май");
        break;
    case 6:
        console.log("Июнь");
        break;
    case 7:
        console.log("Июль");
        break;
    case 8:
        console.log("Август");
        break;
    case 9:
        console.log("Сентябрь");
        break;
    case 10:
        console.log("Октябрь");
        break;
    case 11:
        console.log("Ноябрь");
        break;
    case 12:
        console.log("Декабрь");
        break;
    default:
        console.log("Ошибка: неверный номер месяца. Введите число от 1 до 12.");
}