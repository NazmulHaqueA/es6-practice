const hubby = "Elias";
// hubby = "Omar"; 
// TypeError: Assignment to constant variable.
console.log(hubby);


const numbers = [12,45];
numbers[1] = 88;
numbers.push(100);

// numbers = [5,6,7];
// TypeError: Assignment to constant variable.

console.log(numbers);

//same as array will happen if we declare object

const actor = {name:" Shakib ", phone: 123};


// let : similar to variable but cannot be accessed from outside of a scope

var i =15;
let sum = 0;

for(let i = 0; i<10; i++){
    sum = sum |+ i;
}
console.log(i);
// i undefined as it is trying to access from outside the scope; but as we set a variable i = 15 it will output us 15.


// function default parameter for not provided values
function add(num1 = 0, num2 = 0){

    // setting defaults value in 3 ways.
    // 1
    // if(num1 == undefined){
    //     num1 = 0;
    // }
    // 2
    // num2 = num2 || 0;

    // 3 is to set the value in the parameter as : add(num1=0, num2=20){} 


    return num1+num2;
}

let total = add(5,7);
console.log(total);
total = add(7);
console.log(total);
total = add();
console.log(total);



// Template string , multiple line string

const firstName = "Nazmul";
const lastName = "Haque";
const fullName = firstName+" "+lastName+ " is a good boy!";
// Template using ~ (Carret Sign under escape will generate `` this and inside this write the variables ${------})
const fullNameTemplate = `${firstName} ${lastName} is a good boy!`;
const fullNameTemplate2 = `${firstName} ${100+2+3*4+5/6} is a good boy!`;
console.log(fullName);
console.log(fullNameTemplate);
console.log(fullNameTemplate2);


// multiline

const multiLine = "Hi\n" + "I'm Nazmul\n" + "Welcome!\n";
const multiLine2 = `Hi
I'm Nazmul
Welcome!`;
console.log(multiLine);
console.log(multiLine2);

