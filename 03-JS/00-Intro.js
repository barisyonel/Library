// console.log("External Js çalıştırıldı!");

//Veri Çıkışları
// alert("BilgeAdam Boost");
// confirm("Emin misin?");// T/F Döner.
console.log("BilgeAdam");
console.warn("Uyarı Mesajı");
console.error("Hata Mesajı");
console.info("Bilgilendirme Mesajı");
console.table(["BilgeAdam","Akademi","Frontend","JavaScript","KD-21 Sınıfı"]);
console.table({fullname:"Erdem Sabri Beşik",job:"Developer",birthDate:1992});
console.clear();
// console.log(document);
// document.write("Selam ben Javascript!")

//veri giriş
//html inputları
//promptlar
// prompt("Adınızı giriniz: ");
// !!! prompt ve inputlardan HERZAMAN STRING VERİ GELİR.

//variables
//var(variables),let,const
console.log(fullname);//undefined
var fullname = "Erdem Sabri Beşik";
console.log(fullname);
var fullname = "Eren Abdullah Beşik";
console.log(fullname);
fullname = "Yağmur Beşik";
console.log(fullname);
//ES6-let & const(constant)
// console.log(country);//HATA!
let country = "Turkey"
console.log(country);
// let country = "Germany";//HATA!
country = "UK";
console.log(country);
// console.log(TCNO);
const TCNO = "123123123123";
console.log(TCNO);
// const TCNO = "123";
// TCNO = "123";

//camelCasingMetot
//kebab-case-methot
//snake_case_methot
//PascalCaseMethot
console.clear();
//DataTypes
//1)primitive Types(string,number,boolean,undefined,null,symbol..) (callStack)
//2)reference Types(array,object,function...) (heapStack)
let string = "BilgeAdam Akademi";
console.log(string);
console.log(typeof string);

// let job = prompt("işiniz:");
// console.log(job);
// console.log( typeof job);
// !!! prompt ve inputlardan HERZAMAN STRING VERİ GELİR.
let username = "Erdem Sabri";
let age =  32;
let university = "SDU";
console.log("Merhaba ben Erdem Sabri, 32 yaşındayım, SDU mezunuyum.");
console.log("Merhaba ben "+username+", "+age+ " yaşındayım, "+university+ " mezunuyum.");
console.log("Merhaba ben,",username,age,"yaşındayım,",university, "mezunuyum.");
//ES6- Template Literals(backTips`` '' "")
console.log(`Merhaba ben ${username}, ${age} yaşındayım, ${university} mezunuyum`);
console.log(`Merhaba ben ${username},
    ${age} yaşındayım,
    ${university} mezunuyum`);
let number = 36;
console.log(number,typeof number);
number = 3.14;
console.log(number,typeof number);
console.log(5+5);
console.log(5-5);
console.log(5/5);
console.log(5*5);
console.log(5**5);
console.log(5%5);
console.log("*****");
console.log("5"-5);
console.log("5"/"5");
console.log(5*"5");
console.log("5"**5);
console.log(5%"5");
console.log("*****");
console.log("5"+5);
console.log("5"+"5");
console.log(5+"5");
console.log("*****");
console.log(5+Number("5"));

// !!! prompt ve inputlardan HERZAMAN STRING VERİ GELİR.
//her zaman eğer toplama yaptırmayacaksak bile sayısal bir veri çektiğimizde (input veya prompt ile Number parantezine alınıp veri tipi dönüşümü yapılmalıdır.)

const hasCar = true;
console.log(hasCar,typeof hasCar);
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(Boolean(-1));
console.log(Boolean(1));
console.log(Boolean(56));
console.log(Boolean(" "));
console.log(Boolean("abc"));
console.log(Boolean([]));
console.log(Boolean({}));

let tanimsiz;
console.log(tanimsiz, typeof tanimsiz);

let bosDeger = null;
console.log(bosDeger, typeof bosDeger);//! object döner.

let arrayOne = ["BilgeAdam","Akademi",1992,true,null];
console.table(arrayOne);
console.log(arrayOne);
console.log(typeof arrayOne);
console.log(Array.isArray(arrayOne));
console.log(Array.isArray(hasCar));

let person = { user:"esb",mail:"erdem@erdem.com" };
console.log(person);
console.log(typeof person);

function hello(){
   return "Hello Func. is running...";
}

console.log(hello);
console.log(typeof hello);
console.log(hello());












