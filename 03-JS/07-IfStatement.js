//if(koşul){
// yapılacak işlemleri
//}


//if(koşul){
// yapılacak işlemleri
//}
//else{
// yapılacak işlemler
//}


//if(koşul){
// yapılacak işlemleri
//}
//else if(koşul2){
// yapılacak işlemler
//}
//else if(koşul3){
// yapılacak işlemler
//}
//else if(koşul4){
// yapılacak işlemler
//}...
//else{
// yapılacak işlemler
//}

// let password = "123";
// let username = "esb";
// let kullanici = prompt("username:");
// let sifre = prompt("password:");

// if(username === kullanici){
//     if(password === sifre){
//         console.log("!!!Giriş Başarılı!!!");
//     }else{
//         console.log("parola hatalı!");       
//     }
// }else{
//     console.log("kullanıcı adı hatalı!");
// }
// if(username === kullanici && password === sifre){
//         console.log("!!!Giriş Başarılı!!!");
        
// }else{
//     console.log("kullanıcı adı veya parolası hatalı!");
// }

let age = 18;
age<18 ? console.log("yaşınız küçük") :
age === 18 ? console.log("yaşınız tam 18") :
console.log("yaşınız 18'den büyüktür");

let user = {
    id: "1",
    role:"admin"
}
let user2 = {
    id: "2",
    role:"moderator"
}

// user.role === "admin" && console.log("Admin ile giriş yapıldı!");
user2.role === "admin" && console.log("Admin ile giriş yapıldı!");
console.clear();

let month = 10;
// if(month==1){console.log("Ock")}
// else if(month==2){console.log("Şbt")}
// else if(month==3){console.log("Mrt")}
// else if(month==4){console.log("Nsn")}
// else if(month==5){console.log("Mys")}
// else if(month==6){console.log("Haz")}
// else if(month==7){console.log("Tem")}
// else if(month==8){console.log("Agu")}
// else if(month==9){console.log("Eyl")}
// else if(month==10){console.log("Ekm")}
// else if(month==11){console.log("Kas")}
// else if(month==12){console.log("Ara")}
// else{console.log("geçersiz ay girişi yaptınız!");
// }

switch(month){
    case 1:console.log("Ock");break;
    case 2:console.log("Şbt");break;
    case 3:console.log("Mrt");break;
    case 4:console.log("Nsn");break;
    case 5:console.log("Mys");break;
    case 6:console.log("Haz");break;
    case 7:console.log("Tem");break;
    case 8:console.log("Agu");break;
    case 9:console.log("Eyl");break;
    case 10:console.log("Ekm");break;
    case 11:console.log("Kas");break;
    case 12:console.log("Ara");break;
    default: console.log("geçersiz!");
}

switch(month){
    case 1:
    case 2:
    case 3:console.log("Mevsim : KIS");break;
    case 4:
    case 5:
    case 6:console.log("Mevsim: ILKBAHAR");break;
    case 7:
    case 8:
    case 9:console.log("Mevsim: YAZ");break
    case 10:
    case 11:
    case 12:console.log("Mevsim: SONBAHAR");break;
    default: console.log("geçersiz!");
}


