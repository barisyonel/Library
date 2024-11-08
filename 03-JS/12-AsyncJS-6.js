// console.log("Test Deneme-1");

// setTimeout(()=>{
//     console.log("Test Deneme-2");
// },2000);

// setTimeout(() => {
//     console.log("Test Deneme-3");
// },1000);
// setTimeout(() => {
//     console.log("Test Deneme-4");
// },0);

// console.log("Test Deneme-5");

// let timer = 0;
// const chronometer = setInterval(()=>{
//     timer++;
//     console.log(timer);
//     if(timer === 5){
//         clearInterval(chronometer);
//         console.log("Süre Doldu!");
//     }
// },1000);

// xhr = xml http request
// xml = extensible markup language
// json= javaScript Object Notation

//HTTP Requests
//GET : Veri getirir.
//POST: Veri gönderir.
//PATCH: Veri günceller.
//PUT: Veri günceller.
//DELETE: Veri siler.

// let person = 
// {
//     id:"1",
//     username:"esb", //=> erdemSabri
//     birth: 1992,
//     role:"admin"
// }

//PUT => {
//     id:"1",
//     username:"erdemSabri", 
//     birth: 1992,
//     role:"admin"
// }

//PATCH => { 
//     username:"erdemSabri",
//     ability: "JS"
// }

//HTTP Status Codes
// 1xx	Bilgi
// 100	Continue	Devam
// 101	Switching Protocols	Anahtarlama Protokolü
// 102	Processing	WebDAV : İşlem
// 2xx	Başarı
// 200	OK	Tamam
// 201	Created	Oluşturuldu
// 202	Accepted	Onaylandı
// 203	Non-Authoritative Information	Yetersiz Bilgi
// 204	No Content	İçerik Yok
// 205	Reset Content	İçeriği Baştan al
// 206	Partial Content	Kısmi İçerik
// 207	Multi-Status	WebDAV :Çok-Statü
// 210	Content Different	WebDAV :Farklı İçerik
// 3xx	Yönlendirme
// 300	Multiple Choices	Çok Seçenek
// 301	Moved Permanently	Kalıcı Taşındı
// 302	Moved Temporarily	Geçici Taşındı
// 303	See Other	Diğerlerine Bak
// 304	Not Modified	Güncellenmedi
// 305	Use Proxy	Proxy Kullan
// 307	Temporary Redirect	Geçici olarak yeniden gönder
// 4xx	İstemci hataları
// 400	Bad Request	Kötü İstek
// 401	Unauthorized	Yetkisiz
// 402	Payment Required	Ödeme Gerekli
// 403	Forbidden	Yasaklandı
// 404	Not Found	Sayfa Bulunamadı
// 405	Method Not Allowed	İzin verilmeyen Metod
// 406	Not Acceptable	Kabul Edilemez
// 407	Proxy Sunucusuna giriş yapmak gerekli	
// 408	İstek zaman aşamına uğradı	
// 409	Conflict	(Hatlar) Çakıştı,Çakışma
// 410	Gone	Bak
// 411	Length Required	
// 412	Precondition Failed	
// 413	Request Entity Too Large	
// 414	Request-URI Too Long	
// 415	Unsupported Media Type	Desteklenmeyen medya türü
// 416	Requested range unsatifiable	
// 417	Expectation failed	
// 422	Unprocessable entity	WebDAV :
// 423	Locked	WebDAV :
// 424	Method failure	WebDAV :
// 451	Unavailable For Legal Reasons	Yasal nedenlerle gösterilemiyor
// 5xx	Sunucu hatası
// 500	Internal Server Error	
// 501	Uygulanmamış	
// 502	Geçersiz Ağ Geçidi	
// 503	Hizmet Yok	
// 504	Gateway Timeout	
// 505	HTTP Version not supported	HTTP versiyonu desteklenmiyor
// 507	Insufficient storage	WebDAV :

//ReadyState Kodları
//0 - Unsent
//1 - Opened
//2 - Headers_Received
//3 - Loading
//4 - Done

const url = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// console.log(xhr);
// console.log(xhr.readyState,"Unsent");

// xhr.onreadystatechange = ()=>{
//     if(xhr.readyState === 4 && xhr.status === 200){
//         console.log(xhr.readyState,"Done");
//         console.log(xhr.response[50].title.toUpperCase().substring(0,20)); 
//     }
//     else if(xhr.readyState === 3){
//         console.log(xhr.readyState,"Loading"); 
//     }
//     else if(xhr.readyState === 2){
//         console.log(xhr.readyState,"Headers_Received"); 
//     }
//     else if(xhr.readyState === 1){
//         console.log(xhr.readyState,"Opened"); 
//     }
// }
// xhr.open("GET",url);
// xhr.setRequestHeader("Content-type","appliacation/json; charset=utf-8");
// xhr.responseType="json";
// xhr.send();
const data = {
    userId:999,
    // id:999,
    title:"KD-21 Boost",
    body: "BilgeAdam Akademi Frontend"
}
// console.log(data);
let newPost = JSON.stringify(data);
// console.log(newPost);

// const xhrPost = new XMLHttpRequest();
// xhrPost.onreadystatechange = ()=>{
//     if(xhrPost.readyState === 4 && xhrPost.status === 201){
//         console.log("Başarılı!");
//         console.log(xhrPost.response);
//     }
// }
// xhrPost.open("POST",url);
// xhrPost.setRequestHeader("Content-type","application/json; charset=utf-8");
// xhrPost.responseType="json";
// xhrPost.send(newPost);

//ES-6 Promise & Fetch API

// const promiseObject = new Promise((resolve,reject)=>{
//     // resolve("Başarılı İşlem..");
//     reject("Upps Bir Hata Oluştu..");
// })
// .then(response=>{
//     console.log(5*2);
//     return response})
// .then(data=>console.log(data))
// .catch(err=>console.error(err));

// console.log(promiseObject);

//Feth yapıları promise döndürür!

// const todoUrl = "https://jsonplaceholder.typicode.com/todos";
// const fetchGet = fetch(todoUrl)
// .then(response=>response.json())
// .then(data=>console.log(data[100].title))
// .catch(err=>console.log(err));

// console.log(fetchGet);
// const postData= {
//         userId: 999,
//         id: 9999,
//         title: "Hello",
//         completed: true
//     }
// const newPosts = JSON.stringify(postData);
// const fetchPost = fetch(todoUrl,{
//     method:"POST",
//     body:newPosts,
//     headers: {"Content-type":"application/json; charset=utf-8"}
// })
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

// const getPokemon = fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1300")
// .then(res=>res.json())
// .then(data=>{
//     console.log(data.results[500].name)
//     console.log(data.results[500].url)
//     fetch(data.results[500].url)
//     .then(res2=>res2.json())
//     .then(data2=>console.log(data2.sprites.other.dream_world.front_default));
// })
// const getPokemon2 = fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1300")
// .then(res=>res.json())
// .then(data=>{
//     console.log(data.results[150].name)
//     console.log(data.results[150].url)
//     return fetch(data.results[150].url)  
// })
// .then(data2=>data2.json())
// .then(data22=>console.log(data22.sprites.other.dream_world.front_default));

//ES-7 async - await
const jsonUrl = "https://jsonplaceholder.typicode.com/posts";

const asyncGet = async()=>{
    const response = await fetch(jsonUrl);
    const veri = await response.json();
    console.log(veri); 
}
// asyncGet();

const asyncPoke = async()=>{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1300");
    const veri = await response.json();
    console.log(veri.results[700].name);
    console.log(veri.results[700].url);
    
    const res2 = await fetch(veri.results[700].url)
    const veri2 = await res2.json();
    console.log(veri2.sprites.other["official-artwork"].front_default);
}
asyncPoke();



