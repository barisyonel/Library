let myVariable = "BilgeAdam Akademi KD-21 Frontend Eğitimi XYZ Akademi";
console.log(myVariable, typeof myVariable);
console.log(myVariable.length);
console.log(myVariable.charAt(0));
console.log(myVariable.charAt(1));
console.log(myVariable.charAt(2));
console.log(myVariable.charAt(3));
console.log(myVariable.charAt(4));
// console.log(myVariable.charAt(39));
console.log(myVariable.charAt(myVariable.length-1));
console.log(myVariable.charAt(99));//Boş Değer Döndü!
console.log(myVariable.charAt(-1));//Boş Değer Döndü!
console.log(myVariable.charAt(-5));//Boş Değer Döndü!

console.log(myVariable[0]);
console.log(myVariable[1]);
console.log(myVariable[2]);
console.log(myVariable[3]);
console.log(myVariable[4]);
console.log(myVariable[myVariable.length-1]);
console.log(myVariable[99]);
console.log(myVariable[-1]);
console.log(myVariable[-5]);

console.log(myVariable.toLowerCase());
console.log(myVariable.toUpperCase());

//substring() - parça ayırmak veya koparmak için kullanılır.
console.clear();
console.log(myVariable);
console.log(myVariable.substring());
console.log(myVariable.substring(0));
console.log(myVariable.substring(5));
console.log(myVariable.substring(5,10));
console.log(myVariable.substring(-4));
console.log(myVariable.substring(-1));//- değerler geçersiz 0 olarak algılanır.
console.log(myVariable.substring(10,5));
let test = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sequi eligendi, alias molestias laborum nesciunt soluta debitis dicta corporis. Ullam, vitae accusantium ex esse nisi eum aperiam qui? Earum, quo.";
console.log(test);
console.log(test.substring(0,35)+"...");


//split() ayraç- ayırma
console.clear();
console.log(myVariable);
console.log(myVariable.split());
console.log(myVariable.split(" "));
console.log(myVariable.split(""));
console.log(myVariable.split("i"));
console.log(myVariable.split(" ",2));

//trim() - boşluk kırpıcı
console.clear();
let fullname = "    Erdem Sabri Beşik     ";
console.log(fullname);
console.log(fullname.trimStart());
console.log(fullname.trimEnd());
console.log(fullname.trim());

//replace()
console.clear();
console.log(myVariable);
console.log(myVariable.replace("JJ","XX"));
console.log(myVariable.replace("Akademi","OKULU"));
console.log(myVariable.replaceAll("Akademi","OKULU"));
console.log(myVariable.replaceAll("i","xXx"));

//slice() = parçala dilimle
console.clear();
console.log(myVariable);
console.log(myVariable.slice());
console.log(myVariable.slice(0));
console.log(myVariable.slice(5,10));
console.log(myVariable.slice(-7));
console.log(myVariable.slice(10,5));//Boş Değer Döner
console.log(myVariable.slice(-7,49));
console.log(myVariable.slice(-7,-1));
console.log(myVariable.slice(10,-7));

//includes(): T/F içeriyor mu?
console.clear();
console.log(myVariable);
console.log(myVariable.includes("Bilge"));
console.log(myVariable.includes("B"));
console.log(myVariable.includes("xge"));
console.log(myVariable[18]);
console.log(myVariable.includes("i",2));
console.log(myVariable.includes("K"));
console.log(myVariable.includes("K",19));
console.log(myVariable.includes("BilgeAdam"));
console.log(myVariable.includes("BilgeAdam",1));

//indexOf()
console.clear();
console.log(myVariable);
console.log(myVariable.indexOf("Bilge"));
console.log(myVariable.indexOf("ilge"));
console.log(myVariable.indexOf("lge"));
console.log(myVariable.indexOf("ge"));
console.log(myVariable.indexOf("e"));
console.log(myVariable.indexOf("x"));
console.log(myVariable.indexOf("i"));
console.log(myVariable.indexOf("i",2));
console.log(myVariable.indexOf("i",17));
console.log(myVariable.indexOf("i",36));
console.log(myVariable.indexOf("i",38));
console.log(myVariable.indexOf("i",40));
console.log(myVariable.indexOf("i",52));

//startsWith,endsWith böyle mi başlıyor, böyle mi bitiyor
console.clear();
console.log(myVariable);
console.log(myVariable.startsWith("Bilge"));
console.log(myVariable.startsWith("ilge"));
console.log(myVariable.startsWith("ilge",1));
console.log(myVariable.endsWith("demi"));
console.log(myVariable.endsWith("dem"));
console.log(myVariable.endsWith("dem",51));

console.clear();
let employee = "1)Erdem-Sabri-Beşik-E-1992-Developer";
console.log(employee);
console.log(employee.split("-",3).toString().substring(2).split(",",1).toString());






