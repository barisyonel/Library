let sayi = 5.49999999;
console.log(sayi, typeof sayi);
let floor = Math.floor(sayi);
console.log(floor);
let ceil = Math.ceil(sayi);
console.log(ceil);
let round = Math.round(sayi);
console.log(round);

let width = "196.54px";
console.log(width, typeof width);
console.log(parseInt(width));
console.log(parseFloat(width));
width = parseInt(width);
let calculate = width + 20;
console.log(calculate);
calculate = width * 0.25;
console.log(calculate);
console.log(NaN, typeof NaN);
//! NaN(Not a Number) yapısı benzersiz bir number veritipidir.
console.log(NaN == NaN);
console.log(isNaN(calculate));

console.log(Math.PI);
console.log(Math.sqrt(9));
console.log(Math.pow(2,5));

let mutlak = -5;
console.log(Math.abs(mutlak));

console.log(Math.max(1992,345,645,1236,2356,12,14,768));
console.log(Math.min(1992,345,645,1236,2356,12,14,768));

console.clear();
let price = 6.7896543;
console.log(price);
console.log(price.toFixed());
console.log(price.toFixed(2));
console.log(price.toFixed(3));
console.log(price.toFixed(4));
console.log(price.toFixed(5));
console.log(Math.trunc(price));
console.log(price.toPrecision(3));
console.log(price.toPrecision(4));
console.log(price.toPrecision(2));

// let birth = Number(prompt("doğum yılınızı giriniz:"));
// let birth = parseInt(prompt("doğum yılınızı giriniz:"));
// let result = 2024+birth;
// console.log(result);

let randomNumbers = Math.floor(Math.random()*10);//0-9 arası
//  randomNumbers = Math.ceil(Math.random()*10);//1-10 arası
//  randomNumbers = Math.round(Math.random()*10);//0-10 arası
console.log(randomNumbers);















