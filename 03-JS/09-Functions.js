//Foksiyonlar invoke edilmeden çalışmazlar.
//1-Function Declaration
//Hoisting özelliği vardır.

yazdir();

function yazdir(){
    console.log("yazdırılıyor...");
}

yazdir();

function kare(sayi){
    console.log(sayi**2);
}
kare(12);

function kup(num){
    return num**3
}

kup(4);
console.log(kup(4));
kare(kup(3));
console.clear();

//2-Function Expression
//Hoisting özelliği yoktur.

// print();
const print = function(){
    console.log("printing...");
}
print();

const welcome = function(first,last){
    console.log(`Hoşgeldiniz, ${first} ${last}.`);
 
}
welcome("Bilge","Adam");

//ES-6 - Default Parameters
const selamlama = function(user="Ziyaretçi"){
    console.log("Selam",user);
}
// welcome();
selamlama();
selamlama("eSb");

const birth = function(){
    let date = Number(prompt("Doğum yılınızı giriniz:"));
    return 2024-date;
}

// console.log(birth());

// let tarih = Number(prompt("Doğum yılınızı giriniz:"));

const dogum = function(bilgi){
    return 2024-bilgi;
}
// console.log(dogum(tarih));
console.clear();
//ES-6 Arrow Functions (fat arrow =>)
// let hello = function(fullname){console.log("Hoşgeldiniz",fullname)};
// let hello =(fullname)=>{console.log("Hoşgeldiniz",fullname)};
// let hello =fullname=>{console.log("Hoşgeldiniz",fullname)};
let hello = fullname=>console.log("Hoşgeldiniz",fullname);

//NOT: Arrow functionlarda okun karşışında tek bir işlem varsa süslü parantezler koyulmayabilir. süslü parantezlerin koyulmadığı durumda arrow func. özelliği olarak yapı direkt return edilir.

const calculate = (x,y)=> x*y;
// const calculate = (x,y)=>{return x*y};
// const calculate = (x,y)=>{
//     console.log(x);
//     console.log(y);
//     return x*y
// };
console.log(calculate(3,6));



hello("BilgeAdam");

//CallBack Fonsiyon: başka bir fonksiyonun parametresi olarak verilen fonksiyonlara callback fonksiyonlar denir.
const topla= (x,y)=>x+y;
const cikar= (x,y)=>x-y;
const carp= (x,y)=>x*y;
const bol= (x,y)=>x/y;
const hesapla= (sayi1,sayi2,callback)=> callback(sayi1,sayi2);

console.log(hesapla(5,9,topla));
console.log(hesapla(5,9,cikar));
console.log(hesapla(5,9,carp));
console.log(hesapla(5,9,bol));

//3-IIFE (inmediately invoked func. expression)
(
    function(isim,soyisim){
        console.log(isim,soyisim);
    }
)("BilgeAdam","Akademi");

//Recursive (özyinelemeli)

const faktoryel = sayi=>{
    if(sayi==0 || sayi==1)
    {
        return 1;
    }
    else
    {
        return sayi * faktoryel(sayi-1);
    }
}
console.log(faktoryel(5));
console.log(faktoryel(1));
console.log(faktoryel(0));
console.log(faktoryel(6));



