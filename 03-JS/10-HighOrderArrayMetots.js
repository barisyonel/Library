const fruits = ["Muz","Cilek","Elma","Armut","Kiraz","Erik"];
const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(fruits);
console.log(numbers);

//forEach()
//-dizi içerisinde tektek gezinmemizi sağlar.
//-orjinal diziyi değiştirmez!
//-bir değer dönmez!

// fruits.forEach(mevye=>console.log(mevye+" Stokta Mevcut!"));
// console.log(fruits.forEach(mevye=>{return mevye}));
// console.log(fruits);
fruits.forEach((mevye,index,arr)=>console.log(`
${arr} dizinde; ${index}.indexte ${mevye} elemanı bulunur.`));

numbers.forEach(sayi=>console.log(sayi**2));
// numbers.forEach((sayi,index)=>{
//     numbers[index] = sayi**2;
//     console.log(sayi);
// });
// console.log(numbers);
console.clear();

//map() ES6
//-orjinal diziyi değiştirmez!
//-yeni bir dizi döner.orjinal dizi üzerindeki elemanları tektek gezer değişiklikler yapabilir ama elemanları yeni diziye ekler.
//-yeni bir dizi döndürmesi.
console.log(fruits);
const mappedFruits = fruits.map(item=>item+" çok Şekerli");
console.log(mappedFruits);
console.log(fruits);
console.log(numbers);
// const mappedNumbers = numbers.map(item => {
//     if(item%3==0){
//         console.log(item);
//         return item
//     }
//     else{
//         return null
//     }
// });
const mappedNumbers = numbers.map(item=>item%3);
console.log(mappedNumbers);
console.log(numbers);

const users = [
    {
        id:"1",
        userName: "Erdem Sabri Besik"
    },
    {
        id:"2",
        userName: "Yagmur Besik"
    },
    {
        id:"3",
        userName: "Yamac Besik"
    }
];
const newEmails = users.map(person=>{
    let domain = person.userName.split(" ").join("").toLowerCase();
    return domain+"@bilgeadam.com"
})
console.log(users);
console.log(newEmails);
console.clear();

//filter() - orj diziyi değiştirmez-yeni dizi döner.
const family = ["Erdem Sabri Besik","Yagmur Besik","Yamac Besik","Cagrı Tunel","Cansu Tunel","Mira Tunel"];
const filteredFamily = family.filter(person=>person.includes("Besik"))
console.log(family);
console.log(filteredFamily);
console.log(numbers);
const filtredNumbers = numbers.filter(num=>num%3===0);
console.log(filtredNumbers);

const mixed = ["Erdem",1992,true,null,32,"1923","BilgeAdam",{key1:"val1"},"56"];
const filtredStrings = mixed.filter(item=> typeof item === "string");
const filtredNumbers2 = mixed.filter(item=> typeof item === "number");
console.log(filtredStrings);
console.log(filtredNumbers2);
const filtredStrings2 = mixed.filter(item=>typeof item === "string" && isNaN(parseFloat(item)));
const filtredStrings3 = mixed.filter(item=>{
    if(typeof item === "string"){
        if(isNaN(parseFloat(item))){
            return item;
        }
    }
});
console.log(filtredStrings2);
console.log(filtredStrings3);
console.clear();

//some,every
console.log(numbers);
console.log(numbers.some(item=>item%2===0));
console.log(numbers.some(item=>item%11===0));
console.log(numbers.every(item=>item%1===0));
console.log(numbers.every(item=>item%2===0));

//reduce
const totalNumbers = numbers.reduce((hafiza,guncel)=>hafiza+guncel,0)
// const totalNumbers = numbers.reduce((hafiza,guncel)=>{
//     return hafiza+guncel
// },100)
console.log(totalNumbers);
const products = [
    {
        id:"1",
        productName:"TV",
        productPrice: 38000
    },
    {
        id:"2",
        productName:"Araba",
        productPrice: 5250300
    },
    {
        id:"3",
        productName:"Laptop",
        productPrice: 80000
    },
]
const totalPrice = products.reduce((hafiza,guncel)=>hafiza+guncel.productPrice,0);
console.log(totalPrice);
console.log(products);
console.log(products.productPrice);
const maxPrice = products.reduce((hafiza,guncel)=>Math.max(hafiza,guncel.productPrice),0);
const minPrice = products.reduce((hafiza,guncel)=>Math.min(hafiza,guncel.productPrice),+Infinity);
console.log(maxPrice);
console.log(minPrice);
const stringReduce = products.reduce((h,g)=>h+"__"+g.productName,"");
console.log(stringReduce);
console.clear();

//sort() - sıralama - Orj. diziyi değiştirir!
const mixedNums = [12,34,88,1234,55,100,235,8,5,98];
console.log(mixedNums);
// mixedNums.sort((a,b)=>a-b);
// mixedNums.sort((a,b)=>b-a);
// fruits.sort();
console.log(mixedNums);
console.log(fruits);
sortedFruits = fruits.toSorted();
console.log(fruits);
console.log(sortedFruits);
fruits.push("Elma");
console.clear();
console.log(fruits);

//find()
console.log(fruits.find(item=>item==="Elma"));
console.log(fruits.findIndex(item=>item==="Elma"));
console.log(fruits.findLast(item=>item==="Elma"));
console.log(fruits.findLastIndex(item=>item==="Elma"));

console.log(numbers);
console.log(numbers.find(item=>item%2===0));
console.log(numbers.findIndex(item=>item%2===0));
console.log(numbers.findLast(item=>item%2===0));
console.log(numbers.findLastIndex(item=>item%2===0));


























