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
