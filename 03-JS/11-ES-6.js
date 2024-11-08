//1-Template Literals (`${JS Kodları}`)
//2-var yerine let ve const değişken tanımlama yapıları
//3-Array Methodlarında map,filter,reduce
//4-Arrow Func.
//5-Default Parameters
//6-Spread Operatörü(...)
//      -Rest Parameters(sonsuz parametre)
//      -Kopyamala
//7-Destructing
const fruits = ["Muz","Cilek","Elma","Armut","Kiraz","Erik"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
const [first,second,,,test,...other] = fruits;
console.log("*****");
console.log(first);
console.log(second);
console.log(test);
console.log(other);
console.log(fruits);
console.log("*****");

const[username,email,password]=["esb","erdem@erdem.com","test123"];
console.log(username);
console.log(email);
console.log(password);

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
console.clear();
console.log(employee);
const {firstName,birthDate} = employee
console.log(firstName);
console.log(birthDate);

// let x = 36;
// console.log(x);
// debugger;
// x= 40;
// console.log(x);
// debugger;
// x=90;
// console.log(x);

let tahmin;
while(true){
    try{
        tahmin= prompt("lütfen bir sayı giriniz:");
        tahmin= parseInt(tahmin);
        if(isNaN(tahmin)){
            throw new Error("Lütfen bir sayı giriniz!");
        }
        break;
    }catch(error){
        alert(error.message);
    }finally{
        console.log("işleniyor....");
        
    }
}
console.log(tahmin);










