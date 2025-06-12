const { NearMeRounded } = require("@material-ui/icons");

const user={
    "name":"sai",
    "bramch":"Civil",
    "roll_number":15018,

    set name(name){
        this.name=name;
    },
    get name(){
        return this.name;
    }
}
console.log(user);
let arr=["I","GO","HOME"];
for(i=0;i<arr.length;i++){
    console.log(arr[i])
}
arr.pop();
for(i=0;i<arr.length;i++){
    console.log(arr[i])
}
arr.push("VINAY");
for(i=0;i<arr.length;i++){
    console.log(arr[i])
}
let arr2=["I","Study","Java Script","Right","Now"]

arr2.splice(0,3,"SAI","STUDY")
for(i=0;i<arr2.length;i++){
    console.log(arr2[i])
}

let someUsers=arr2.filter(item=>item=="SAI")
console.log(someUsers);

let someUsers1=arr2.map(item=>item+"I");
console.log(someUsers1);

let someUsers2=arr2.sort();  //array is sorting and storing in itself only.
console.log(someUsers2);


let someUsers3=arr2.reverse();
console.log(someUsers3);


let names = "I am studying now";
let arr3=names.split(' ');
console.log(arr3);

// let books=[];
// const fetchpost=async()=>{
//     try{
//     response=await fetch("http://localhost:8085/bookproject/books");
//     console.log(books);
//     // console.log(response.data);
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }
// fetchpost();

class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name="VALIDATION_ERROR"
    }
}
function test(){
    throw new ValidationError("Whoops");
}


// try{
//     test();
// }catch(err){
//     alert(err.message);
// }


//CURRYING:----
//curring ---->it transforms the functions with multiple arguements into nested functional series each function taking a single arguement
//Currying helps you avoid passing the same variable again and again.
// It helps to create a higher order function.


function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
sum(1)(2)(3);
console.log(sum(1)(2)(3));


function sum2(a) {
    return (b, c) => {
        return a * b * c
    }
}

console.log(sum2(10)(12,13));

// Spread Operator is used to expand or spread an iterable or an array

console.log(...arr3);

const a1=["one","two","Three"]
const a2=[...a1,"Four","Five"]
console.log(a2);

//Clone Array using Spread Operator

a3=[1,2,3,4]
a4=a3
console.log(a3);//1,2,3,4
console.log(a4);//1,2,3,4
a3.push(5)// --->here both a3 and a4 referencing the same values or same array
console.log(a3);//1,2,3,4,5
console.log(a4);//1,2,3,4,5

a5=[1,2,3,4]
a6=[...a5]// -->it makes the copy of the same array an dchanges are done to that
console.log(a5);
console.log(a6);
a5.push(5);//--> only value appends to the a5 array
console.log(a5);
console.log(a6);

//Spread Operator with Object
const obj1={x:2,y:3}
const obj2={z:4}
const obj3={...obj1,...obj2}
console.log(obj3)

//When spread operator is used as a parameter then it is called rest parameter
//you cal also accept the multiple arguements using the rest parameter 

let fun=(...args)=>{
    console.log(args);
}

fun(1,2,3);

// you can pass the multiple arguements using the spread operator in a function

let summation=(x,y,z)=>{
    console.log(x+y+z)
}
let a7=[1,2,3,4,5];

summation(...a7);

//SET and WEAK SET 
//set contains the only numbers,strings,objects etc...,
//weak set only contains the objects and weak sets are not iterable unlike set it will throw an error

// DESTRUCTURING ASSIGNMENT 
// const person = {
//     name: 'SAI',
//     age: 25,
//     gender: 'male'    
// }                                       

// let name = person.name;   ---->before destructuring assignment of object
// let age = person.age;
// let gender = person.gender;

// console.log(name); // SAI
// console.log(age); // 25
// console.log(gender); // male

// after destructuring assignment operator

// assigning object attributes to variables
const person = {
    name: 'SAI',
    age: 25,
    gender: 'male'    
}

// destructuring assignment
let { name, age, gender } = person;  // here order of variables does not matter

console.log(name); // SAI
console.log(age); // 25
console.log(gender); // male

//Array Destructuring
let numbers=["one","two","three"]
let [x,y,z]=numbers
console.log(x);
console.log(y);
console.log(z);

//Assign Default Values

let[a=10,b=7,c=8,d=10]=numbers;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//Skip Items
const arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
const [f, , g] = arrValue;

console.log(x); // one
console.log(z); // three


//Assign Remaining Elements to a Single Variable

let[H,...I]=numbers;
console.log(H);
console.log(I);



//setTimeout():---
//This method executes a block of code after the specified time the method execuytes the code only once.
//setTimeout(function, milliseconds);--->syntax of setTimeOut

function greet(){
    console.log("Hello Good Morning");
}
let intervalId=setTimeout(greet,3000);
console.log(intervalId);

//If you want to stop the setTimeOut then you can use clearTimeOut();

clearTimeout(intervalId);


//Call Back Function
//In javascript you can also pass function as a argument.The function that is passed an arguement to the another function is called "CallBack Function"

// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Sai', callMe);

/*
In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.
A promise may have one of three states.
 1.pending
 2.fulfilled
 3.Rejected 
 if the promise returns successfully then resolve method is called if an error occurs then reject method is called
 */
let promise = new Promise(function(resolve, reject){
    
});

// a promise
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {
    try {
        // wait until the promise resolves 
        let result = await promise1; 

        console.log(result);
    }   
    catch(error) {
        console.log(error);
    }
}

// calling the async function
asyncFunc(); // Promise resolved


/* setInterval():--
The setInterval() method repeats a block of code at every given timing event.

The commonly used syntax of JavaScript setInterval is:

setInterval(function, milliseconds);

Its parameters are:

    function - a function containing a block of code
    milliseconds - the time interval between the execution of the function
 */

/*
 JavaScript clearInterval()

As you have seen in the above example, the program executes a block of code at every specified time interval. If you want to stop this function call, then you can use the clearInterval() method.

The syntax of clearInterval() method is:

clearInterval(intervalID);

Here, the intervalID is the return value of the setInterval() method.

 */


/* Difference between javascript and Json:-
JSon objects and javascript object syntataically same but the difference is:--
--incase of json key/value pair should be in double quotes incase of javascript no double quotes not necessary
--Json cannot contain functions 
--Java script can contain functions
--Json can be created and we can use in another programming languages 
--javascript objects can br used only in js
 */

//Conversion of json to javascript object

// JavaScript object
const jsonData = { "name": "SAI", "age": 22 };

// converting to JSON
const obj = JSON.stringify(jsonData);

// accessing the data
console.log(obj); // "{"name":"SAI","age":22}"


// MAP:----

// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// Methods and properties are:

//     new Map() – creates the map.
//     map.set(key, value) – stores the value by the key.
//     map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
//     map.has(key) – returns true if the key exists, false otherwise.
//     map.delete(key) – removes the element (the key/value pair) by the key.
//     map.clear() – removes everything from the map.
//     map.size – returns the current element count.
//     For the iteration of map we will use map.keys and map.values and map for the iteration over the map.
//     we can create the map with array by passing that array of key and value pairs in the constructor of map  eg:-Map map=new Map(array);
//     we can create the map by passing the object in the constructor beacause object also store key and values pairs.
//     above both will done with the help of map.fromEntries() method.
