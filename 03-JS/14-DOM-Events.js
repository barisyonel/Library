//1.Yöntem
// document.getElementsByTagName("button")[0].onclick = function(){
//     alert("Butona tıklandı!");
// }

// const buton = document.getElementsByTagName("button")[0];
// buton.onclick = function(){
//     console.log("butona tıklandı!");  
// }
// buton.onclick = ()=>{
//     console.log("butona tıklandı!");  
// }

// 2.Yöntem
const buton = document.querySelector("button");

buton.addEventListener("click",run);

// function run(){
//     console.log("butona tıklandı!");
// }

//Mouse Eventleri
const nav = document.querySelector("nav");
// nav.addEventListener("click",run);
// nav.addEventListener("dblclick",run);
// nav.addEventListener("mousedown",run);
// nav.addEventListener("mouseup",run);
// nav.addEventListener("mouseover",run);
// nav.addEventListener("mouseout",run);
// nav.addEventListener("mouseenter",run);
// nav.addEventListener("mouseleave",run);

//Klavye Eventleri
// document.addEventListener("keypress",run);
// document.addEventListener("keyup",run);
// document.addEventListener("keydown",run);

let input = document.querySelector("input");
let body = document.querySelector("body");
input.addEventListener("keyup",()=>{
    let value = input.value;
    // console.log(value);
    body.style.backgroundColor = value;
});

// input.addEventListener("focus",run);
// input.addEventListener("blur",run);
// input.addEventListener("change",run);
// input.addEventListener("copy",run);
// input.addEventListener("paste",run);
// input.addEventListener("cut",run);

// let form = document.querySelector("form");
// form.addEventListener("submit",run);

//diğer bazı eventler
// window.addEventListener("load",run);
// window.addEventListener("resize",run);
window.addEventListener("scroll",scrollWin);

function scrollWin(){
    let position = window.scrollY;
    console.log("scroll position: ",position);
    
}

function run(e){
    // e.preventDefault();
    console.log(e.type);
    // console.log(e);
    // console.log(e.key);
}
