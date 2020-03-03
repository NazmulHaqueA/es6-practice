
const age1 = [20,30,40,50];
const age2 = [25,35,45,55];
const age3 = [15,60,65,70];
const ages = age1.concat(age2).concat(age3);
const ages2 = age1.concat(age2).concat(age3).concat([80,90,100]);
console.log(ages2);
const allAges1 = [age1,age2,age3, 80,90,100];

console.log(allAges1);
// three dots : spread operator
const allAges = [10,15, ...age1,...age2,...age3, 80,90,100];
console.log(allAges);

// 

const a = 550;
const b = 650;
const c = 450;


const max = Math.max(a,b,c);
console.log(max);

const taka = [50,250,200];
const maximum = Math.max(taka);//it will return NaN
console.log(maximum);

// solve is a three dot
const taka1 = [50,250,200];
const maximum1 = Math.max(...taka1);
console.log(maximum1);


