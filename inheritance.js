
class Parent{
    constructor(){
        this.fatherName = "Enamul Haque";
    }

}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
        // method
        fullName(){
            return this.name + " " + "Haque";
        }
}

// creating object
const baby = new Child("Nazmul");
const baby2 = new Child("Shathi");
// console.log(baby);
console.log(baby.fatherName); //accessing property 
// console.log(baby2);
console.log(baby2.fullName()); //calling method