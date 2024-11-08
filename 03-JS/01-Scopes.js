//Global Scope
var sayi1 = 10;
let sayi2 = 20;
const sayi3 = 30;
let test = "testing scopes..."

//Functional Scope
function Scope(){
    var sayi1 = 99;
    let sayi2 = 88;
    const sayi3 = 77;
    const testFunc = "Func Scope Testing string..."
    console.log(`--Functional Scope--
    sayi1: ${sayi1}
    sayi2: ${sayi2}
    sayi3: ${sayi3}
    test : ${test}`);
}
//Block Scope
if(true){
    var sayi1 = 1199;
    let sayi2 = 1188;
    const sayi3 = 1177;
    console.log(`--Block Scope--
    sayi1: ${sayi1}
    sayi2: ${sayi2}
    sayi3: ${sayi3}
    test : ${test}`);
}





console.log(`--Global Scope--
    sayi1: ${sayi1}
    sayi2: ${sayi2}
    sayi3: ${sayi3}
    FuncTest: ${"testFunc burada çağırılamaz"}`);
Scope();


console.clear();

//!Dikkat
var x = 10;
function func(){
    console.log(x);
    var x = 20;
}

func();