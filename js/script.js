//cod

let newLogin = "Gilani";
let newPass = "6334";
let login = prompt("Login");
let password = prompt("passwor");
if (login === newLogin && password === newPass) {
  console.log("Welcome");
} else {
  console.log("error");
}

//#1
let a = "Hello, Works";
alert(a);
console.log(a);

//#2
let b = 5;
let c = 8;
let d = 5;
console.log(b + c / (d * b));

//#3
// let non = /55sd;
// let none = 5fg;

//Data
let Data = "28.02.1999";
console.log(Data);

// Math.PI;
console.log(Math.PI);

//const
const r = 25;
console.log(r);
//const r = 26;
//cont изменить нельзя

//prompt
let name = prompt("name");
let address = prompt("Address");
let contact = prompt("contact");
console.log(
  `Меня зовут ${name}, я живу ${address}, мой номер телефона ${contact}`
);

//rub & usd
let rub = 68;
let usd = 1;
console.log(30000 / rub);

//const

const MY_CONST = "2";
if (MY_CONST < 10) {
  console.log("Константа меньше 10");
} else {
  console.log("Константа больше 10");
}

//code
let q = 2;
let t = 9;
if (q < t) {
  console.log("code");
} else if (q > t) {
  console.log("nocode");
} else {
  console.log("error");
}

let code = "css";
switch (code) {
  case "html":
    console.log("Html");
    break;
  case "js":
    console.log("js");
    break;
  case "css":
    console.log("css");
    break;
  case "scss":
    console.log("scss");
    break;
  case "react":
    console.log("react");
    break;
  case "vujs":
    console.log("vujs");
    break;
  default:
    console.log("error");
    break;
}

//x & y
let x = 10;
let y = 7;
if (x > y) {
  console.log("x больше чем y");
} else {
  console.log("x меньше чем y");
}

//promt
let num = prompt("введите число");
let even_or_Odd = num % 2;
if (even_or_Odd === 0) {
  console.log(`Число ${num} четное`);
} else {
  console.log(`Число ${num} не четное`);
}

let f = prompt("Введите число");
let g = prompt("Введите число");
let e = prompt("Введите число");
if (true) {
  console.log(Math.max(f, g, e));
} else {
  console.log("error");
}

//func

const z = 2;
func(55);
function func(z) {
  if (z > 10) {
    console.log("Константа больше 10");
  } else if (z < 10) {
    console.log("Константа меньше 10");
  } else {
    console.log("error");
  }
}

showMessage();
function showMessage() {
  alert("Привет, Мир");
  console.log("Привет, Мир");
}

cons();
function cons() {
  console.log("JavaScript");
}

let text = "Gilani";
if (text === "Lorem") {
  console.log("У вас ошибка в тексте");
} else if (text) {
  console.log(`Содержимое переменной: ${text}`);
} else {
  console.log("error");
}
