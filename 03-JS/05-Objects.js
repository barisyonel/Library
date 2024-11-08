const obj1 = {};
console.log(obj1);
const obj2 = new Object();
console.log(obj2);

const birthDate = 2003;
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
//Dot(.) Notation
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.birthDate);
console.log(employee.languages);
console.log(employee.languages.length);
console.log(employee.languages[2]);
console.log(employee.education.highschool);
console.log(employee.education.master);
// console.log(employee..luckyNumber); HATA!
//[Bracket] Notation
console.log(employee[".luckyNumber"]);
console.log(employee["isInstructor"]);
console.log(employee["firstName"]);

console.log(employee.getAge());
console.log(this);
console.clear();


employee.gender = "Male";
console.log(employee);
employee.firstName = "Yamaç";
console.log(employee);
delete employee.isInstructor;
console.log(employee);
console.log(employee.lastName);

//obje metotları
console.log(Object.entries(employee));
console.log(Object.entries(employee).length);
console.log(Object.entries(employee)[2][0],Object.entries(employee)[2][1]);
console.clear();

console.log(employee);
console.log(Object.keys(employee));
console.log(Object.values(employee));
console.clear();

console.log(employee);
const assignedObject = Object.assign({},employee);
console.log(assignedObject);
// console.log(...employee); //sayılamayan yapılar spreadle loglanamazlar.
const spreadedObject = {...employee};
console.log(spreadedObject);
console.clear();

console.log(employee);
//freeze(dondurma) - create,edit,delete işlemleri kitlenir objeye dışardan hiçbir şekilde etki edilemez!
// Object.freeze(employee)
// employee.firstName = "Yağmur";
// employee.hasCar = false;
// delete employee.languages;
// console.log(employee);

//seal(müherlemek) - create ve delete işlemleri kitlenir, edit işlemi yapılabilir.
// Object.seal(employee)
// employee.firstName = "Yağmur";
// employee.hasCar = false;
// delete employee.languages;
// console.log(employee);

//preventExtensions - uptade ve delete yapılabilir, create işlemi kitlidir. daralmaya açık genişlemeye kapalı bir yapı oluşturur.
Object.preventExtensions(employee);
employee.firstName = "Yağmur";
employee.hasCar = false;
delete employee.languages;
console.log(employee);

console.log(employee.hasOwnProperty("firstName"));
console.log(employee.hasOwnProperty("birthDate"));
console.log(employee.hasOwnProperty("languages"));




















