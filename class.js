// declaring class and constructor
class Student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = "Annada Govt. High School";
    }
}

// creating method

const student1 = new Student(1, "Nazmul");
const student2 = new Student(2, "Arif");

console.log(student1); //show all properties
console.log(student1.name); //accessing a particular property 
console.log(student2.school);//accessing a particular property 