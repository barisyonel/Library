//DOM = Document Objec Model
// console.log(document);
// console.log(window);
// console.log(this);

let element;
//Selectors
//id'ye göre seçici(tek öge getirir.)
element = document.getElementById("head-1");
element = document.getElementById("head-2");

//class'a göre seçici [HTMLCOLLECTION]
element = document.getElementsByClassName("list-item");
element = document.getElementsByClassName("list-item")[4];
element = document.getElementsByClassName("list-item").length;
element = document.getElementsByClassName("first");
element = document.getElementsByClassName("second");
element = document.getElementsByClassName("second")[0];
element = document.getElementsByClassName("list-item");

// let arrayConvert = Array.from(element);
// console.log(arrayConvert);
// arrayConvert.forEach(item=>console.log(item));
// element.forEach(item=>console.log(item)); HATALI!!!! ARRAY DEĞİL!!

//element'e göre seçici [HTMLCOLLECTION]
element = document.getElementsByTagName("li");
element = document.getElementsByTagName("a");
element = document.getElementsByTagName("h3");

//ES-6 ile Birlikte yeni gelen seçiciler (Query Seçicileri)
//Query seçicilerinde css selectorler kullanılabilir.

//Query Selector - her zaman tek öge getirir. İlk gördüğü elementi alır.
element = document.querySelector("#head-2");
element = document.querySelector("#head-1");
element = document.querySelector(".second");
element = document.querySelector(".first");
element = document.querySelector(".container .first");
element = document.querySelector("body>.first");
element = document.querySelector("li");
element = document.querySelector("p");

//QuerySelectorAll [NODELIST]
element = document.querySelectorAll("#head-1");
element = document.querySelectorAll("#head-2");
element = document.querySelectorAll(".list-item");
element = document.querySelectorAll(".list-item:first-child");
element = document.querySelectorAll(".list-item:last-child");
element = document.querySelectorAll(".list-item:nth-child(2)");
element = document.querySelectorAll(".list-item:nth-child(3)");
element = document.querySelectorAll(".list-item:nth-child(odd)");
element = document.querySelectorAll(".list-item:nth-child(even)");
element = document.querySelectorAll("p");
element = document.querySelectorAll("li");
element = document.querySelectorAll("a");
element = document.querySelectorAll("a")[1];
element = document.querySelectorAll("a").length;
// console.log(element);

//Basit Css Özelliği Verme
const header = document.querySelector("#head-1");
header.style.color = "red";
header.style.backgroundColor = "#1c1c1c";
header.style.textAlign = "center";
header.style.padding = "20px";

const oddListItems = document.querySelectorAll(".list-item:nth-child(odd)"); 
const evenListItems = document.querySelectorAll(".list-item:nth-child(even)");
oddListItems.forEach(e=>{
    e.style.color= "orangered";
});
evenListItems.forEach(e=>{
    e.style.color= "green";
});

//element oluşturma
//<li><a href="#">İletişim</a></li>
const newListItem = document.createElement("li");
const newAnchorItem = document.createElement("a");
newAnchorItem.href = "#";
newAnchorItem.setAttribute("target","_blank");
// newAnchorItem.innerHTML = "İletişim";
// newAnchorItem.innerText="İletişim";
newAnchorItem.textContent= "İletişim";

newListItem.appendChild(newAnchorItem);

const navList = document.querySelector("nav ul");
const navListItem = document.querySelector("nav ul li:nth-child(2)");
// navList.appendChild(newListItem);
// navListItem.after(newListItem);
navListItem.before(newListItem);
navList.innerHTML+="<li><a href='#'>Deneme</a></li>";

// console.log(newAnchorItem);
// console.log(newListItem);

const buton = document.querySelector("button");
// buton.className = "bilge";
// buton.className = "adam";
// buton.className = "bilge adam";
buton.classList.add("bilge","adam");
buton.classList.add("esb","js");
buton.classList.remove("bilge");
buton.classList.remove("adam","esb");
buton.classList.replace("js","bilgeAdam");
// buton.classList.replace("js","bilge");
buton.classList.remove("bilgeAdam");
buton.classList.toggle("dark");
buton.classList.toggle("dark");

const body = document.querySelector("body");

buton.onclick = function(){
    body.classList.toggle("dark");
    buton.textContent= buton.textContent=="Light"?"Dark":"Light";
}
// console.log(buton);

const choosen = document.querySelector("nav ul li a");
console.log(choosen);
console.log(choosen.parentElement);
console.log(choosen.parentElement.parentElement);
console.log(choosen.parentElement.parentElement.parentElement);
console.log(choosen.parentElement.parentElement.parentElement.parentElement);
console.log(choosen.parentElement.parentElement.parentElement.parentElement.parentElement);
console.log(choosen.parentElement.parentElement.parentElement.parentElement.parentElement.children);
console.log(choosen.parentElement.parentElement.parentElement.parentElement.parentElement.children[0]);
console.log(choosen.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children);
console.log(choosen.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[2]);

const target = choosen.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[2];

target.innerText = "BilgeAdam JS"
console.log(choosen.parentElement.parentElement.parentElement.parentElement);
console.log(choosen.parentElement.parentElement.parentElement.parentElement.previousElementSibling);




