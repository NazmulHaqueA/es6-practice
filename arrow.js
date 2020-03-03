
// Normally declared function and calling
// function doubleIt(num){
//     return num*2;
// }
// const result = doubleIt(5);
// console.log(result);


// We can declare as follows

const doubleIt = function(num){
    return num*2;
}

const result = doubleIt(5);
console.log("From doubleIT ", result);


const doubleIt1 = function myFunc(num){
    return num*2;
}

const result1 = doubleIt1(5);
console.log("From MyFunc: ", result1);


// Arrow Function

const doubleITArrow = num =>num*2;
// const doubleITArrow = (num) =>num*2; same
const resultArrow = doubleITArrow(50);
console.log("From Arrow Function: ", resultArrow);

// Arrow function multiple parameter

const add = (num1,num2) => num1+num2;
const sum = add(10,90);
console.log("Sum = ",sum);

// arrow function with no parameter

const give5 = () => 5;
console.log(give5());


// Arrow function with body

const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const  result = sum * diff;
    return result;
}

const result2 = doMath(10,5);
console.log("Do Math Result: ",result2);

