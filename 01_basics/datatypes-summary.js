//Primitive Type

//7 Types: String, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id);
console.log(anotherID);
console.log(id === anotherID);


const bigNumber = 937745277441351454561n



//Reference type or Non Primitive Type

//Array,Objects,Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age:22,

}

const myfunction = function(){
    console.log("Hi There");
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//for reference 


/********************************Memory**************************** */ 

// Stack(Primitive datatype is used), Heap(Non-Primitive datatype is used)



