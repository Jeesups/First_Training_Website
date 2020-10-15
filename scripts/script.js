/*
console.log('Hello World!');
var a = "Hello ";
var b = "World";
var c = a + b;
console.log(c);
console.log(a + b);

let d = "Hello Wold ";
let e = "World";
e = "Heaven";
const CONSTANT = 10;
console.log(d + e);
console.log(CONSTANT);
*/
/* Data types */
/* 
var b = 2; // number
var a = "Hello" //string
var c = false; //boolean
var d = 0.2; //float
var e = null; //null 
var f; //undefined
var g = String(4);

console.log(a,b,c,d,e,f, g + a);
*/
/* Math */
/** 
var a = 7;
console.log(++a);
console.log(a++);
console.log(a);
*/
/** if statemets */
/** 
var a = 2;
var b = 2;
if(a == 1){
    console.log("A is equal to 1");
}
else if (a === 2){
    console.log("A is equal to 2 and it is Integer");
}
else if(a == 2){
    console.log("A is equal to 2");
}
else{
    console.log("A is neither 1 nor 2 ");
}
*/
/** Arrays and their methods*/
/** 
let a = new Array();
a = [1,2,3,4];
let animal = ["Dog","Cat","Hamster","Fox"];

animal.pop(); //deletes last value from array
animal.shift(); // deletes fist value from array
animal.unshift('cow'); //Adds value as first in the array
animal.push('Horse'); //Appends value as last object in the array
animal.splice(1,2, 'Wolf','Snake'); //Removes values from range, however, if you add third argument, then it will add record in place of deleted ones starting from first index in the argument

let part = animal.slice(0,2);

console.log(part);
console.log(a);
console.log(animal[0]);
console.log(animal.length);
console.log(animal.join('+'))
*/
/** Objects */
/** 
let person = {
    name: 'John', 
    lastname: 'Smith', 
    age: 24, 
    schools: {
        primary: '25',
        highschool: '65'
}
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person['lastname']);
person.lastname = 'Connor';
console.log(person['lastname']);

person['age'] = 30;
console.log(person['age']);


console.log(person.schools);
console.log(person.schools.primary);
*/
/** Loops */
/** 
for(let i = 0; i < 10; i++)
{
    console.log('Hello '+ String(i+1));
}
let something = true;
while(something == true){
    for(let i = 0; i < 10; i ++){
        if(i == 7){
            console.log("Inside loops!");
            something = false;
        }
    }
}

let person = {
    name: 'John', 
    lastname: 'Smith', 
    age: 24}

for( x in person){
    //console.log(person[x]);
   // console.log(x);
    console.log(x + ': '+ person[x]);
}
*/

/** Functions */
/** 
function CalculateValue(a,b){
    return a + b;
}

let calc = function(x,y){
    return x*y;
}
//IMPORTANT: since js works just like html and css it goes from top to bottom, so addressing functions which will be defined lower will result in a error.
console.log(CalculateValue(4,1));
console.log(calc(5,5));

// you can call function within variable by pushing body of anonymous function into first () and after it adding additional () for arguments, that way only value is stored in variable not entire function.
let cal = 
(function(x,y){
    return x/y;
})(2,5);
console.log(cal);
*/

/** Loops on the arrays */

let people = [ 
    {name:'John', lastname:'Smith', age:25},
    {name:'Mike', lastname:'Carpenter', age:35},
    {name:'John', lastname:'Molases', age:63},
]

/** 
for( let i = 0; i < people.length; i++){
    //console.log(people[i]);
}
*/
people.forEach(function(person){
    console.log(person.name);
});