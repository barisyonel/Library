//For Loops
//for(başlangıç;bitiş;artış){
//  yapılacak işlemler
//}

// for(let i=0; i<10; i++){
//     console.log(i);
// }

// for(let i=0; i<100; i++){
//     i%15==0 && console.log(i);
// }

// for(let i=0; i<10; i++){
//     if(i===5){
//         break;
//     }
//     console.log(i);
// }
// console.log("döngü sonlandı!");

// for(let i=0; i<10; i++){
//     if(i===5){
//         continue;
//     }
//     console.log(i);
// }
// console.log("döngü sonlandı!");

//while Loops
//while(koşul){
// yapılacak işlemler
//}

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// while(true){
//     let input = prompt(`
//         1-Kişi arama,
//         2-Mesaj gönderme,
//         3-Çıkış
//         `);
//     if(input==="1"){
//         console.clear();
//         console.log("kişi aranıyor....");
//     }
//     else if(input === "2"){
//         console.clear();
//         console.log("mesaj gönderiliyor....");
//     }
//     else if(input === "3"){
//         console.clear();
//         console.log("program kapatılıyor!!!");
//         break;
//     }
//     else{
//         console.log("hatalı giriş lütfen 1 ile 3 arasında bir rakam giriniz!!");
        
//     }
// }

// let i = 9999;
// do{
//     console.log(i);
//     i++
// }while(i<10);

//for...in - sayılamayan yapılarda kullanılır.
const employee = {
    firstName: "Erdem Sabri",
    "lastName": "Beşik",
    birthDate: 1992,
    isInstructor: true,
    languages: ["html","css","js","python","c"],
    education: {
        highschool:"SDU",
        master:"IKCU"
    },
    getAge: function(){
        return 2024 - this.birthDate
    },
    ".luckyNumber": 36,
    lastName:"Beşiroğlu"
}
console.log(employee);
for(let i in employee){
    // console.log(i);
    console.log(`
    key:${i}=>${employee[i]}
        `); 
}
//for...of - sayılabilen yapılarda kullanılır.
const fruits = ["Muz","Elma","Armut","Kiraz","Erik"];
console.clear();
console.log(fruits);
for(meyve of fruits){
    console.log(meyve);
}
let fullname = "Erdem Sabri Beşik";
for (let harf of fullname){
    console.log(harf);
}
console.clear();

let sayac=0;
let string= "BilgeAdam Akademi Frontend Eğitimiiiiii";
for(let letter of string){
    if(letter==="i"){
        sayac++
    }
}
console.log("bu cümlede geçen i sayısı: ", sayac);


