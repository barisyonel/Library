let myArray = [];
console.log(myArray, typeof myArray);
let myArraySec = new Array();
console.log(myArraySec);

let persons = ["Erdem","Okan","Yasin","Merve"];
console.log(persons);
let numbs = [1,2,3,4,5,6,7,8,9];
console.log(numbs);
let multi = ["BilgeAdam",true,1992,["js","python","c"],{key1:"val1"}];
console.log(multi);
console.log(multi.length);
console.log(multi[0]);
console.log(multi[1]);
console.log(multi[2]);
console.log(multi[3]);
console.log(multi[3].length);
console.log(multi[3][2]);
console.log(multi[multi.length-1]);
console.clear();

const fruits = ["Muz","Elma","Armut","Kiraz","Erik"];
console.log(fruits);
console.log(fruits[3]);
fruits[3] = "Kivi";
console.log(fruits);
console.log(fruits[4]);
console.log(fruits[5]);
fruits[5] = "Mango";
console.log(fruits);
console.clear();

//push() - sona eleman/ları ekler. metot loglanırsa yeni dizi uzunluğunu döner.
console.log(fruits);
// fruits.push("Karpuz");
// fruits.push("Karpuz","Kavun");
console.log(fruits.push("Karpuz"));
console.log(fruits);

//pop() - sondan eleman siler. metot loglanırsa silinen elemanı veya undefined döner.
// fruits.pop()
console.log(fruits.pop());
console.log(fruits);

//unshift() - dizinin başına eleman/ları ekler. metot loglanırsa yeni dizi uzunluğunu döner.
// fruits.unshift("Guava");
// fruits.unshift("Guava","Kavun");
console.log(fruits.unshift("Guava","Kavun"));
console.log(fruits);

//shift() - dizinin başından eleman siler. metot loglanırsa silinen elemanı veya undefined döner.
// fruits.shift()
console.log(fruits.shift());
console.log(fruits);
console.clear();

//slice() - diziden bir parça ayırır.Orj. diziyi değiştirmez! yeni bir dizi döndürür.
console.log(fruits);
let slicedFruits = fruits.slice(); //eski array kopyalama yöntemi
slicedFruits = fruits.slice(0); //eski array kopyalama yöntemi
slicedFruits = fruits.slice(1,3); 
slicedFruits = fruits.slice(-1); 
slicedFruits = fruits.slice(-2); 
slicedFruits = fruits.slice(3,1);//boş array döner.
slicedFruits = fruits.slice(3,-1);
console.log(slicedFruits);
//ES6-Spread Operatörüyle Kopyalama
const spreadedArray = [...fruits]; //yeni kopyalama yöntemi
console.log(spreadedArray);
console.log(...fruits);
console.clear();

//splice() - orj. diziyi değiştiren bir metotdur.parça çıkarma işlemi yapar. metot loglanırsa çıkarılan parçayı döndürür.
console.log(fruits);
// fruits.splice(2);
// fruits.splice(2,3);
// console.log(fruits.splice(2,3));
// fruits.splice(1,3,"X","Y","Z","J","K","L");
console.log(fruits);
console.clear();

//reverse() diziyi tersine çeviren. Orj. dizi değiştirir.
// fruits.reverse();
//toReversed() diziyi tersine çeviren. Orj. dizi değiştirmez. Yeni bir dizi döner.
reversedFruits = fruits.toReversed();
console.log(reversedFruits);
console.log(fruits);

//concat() array birleştirme.
let oddNumbers = [1,3,5,7,9];
let evenNumbers = [2,4,6,8,10];
let randoms = ["x","y","z"];
console.log(oddNumbers,evenNumbers,randoms);
let allNumbers = oddNumbers.concat(evenNumbers);
console.log(allNumbers);
let allItems = evenNumbers.concat(oddNumbers,randoms);
console.log(allItems);
spreadedAllItems = [...evenNumbers,...oddNumbers,...randoms];
console.log(spreadedAllItems);

//includes() - içeriyor mu?
console.log(fruits.includes("Erik"));
console.log(fruits.includes("erik"));
console.log(fruits.includes("rik"));
console.log(fruits.includes("Elma"));
console.log(fruits.includes("Elma",3));

//indexOf()/lastIndexOf()
console.clear();
fruits.push("Muz");
console.log(fruits);
console.log(fruits.indexOf("Muz"));
console.log(fruits.indexOf("Muz",2));
console.log(fruits.indexOf("Muz",8));
console.log(fruits.lastIndexOf("Muz"));
console.log(fruits.lastIndexOf("Muz",6));
console.log(fruits.lastIndexOf("Muz",0));

//join(),toString()
console.log(fruits.toString());
console.log(...fruits);
console.log(fruits.join(""));
console.log(fruits.join(" "));
console.log(fruits.join(","));
console.log(fruits.join("*****"));






















 









