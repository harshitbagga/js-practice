const name  = "harshit"
const repoCount = 50

// console.log(name + repoCount+ " value"); never use this type of syntax

console.log(`hello my name is ${name} and my repo Count is ${repoCount}`); //these are called backticks ``

const gameName = new String('hero') //another way to declare a string does the same this as const name= "string" 
//the only difference is it gives you option to access string functions or methods instead of using proto you can simply name . method
//and it does not change the orignal value 

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-8,4)

console.log(anotherString);


const newStringOne = "    harshit    "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://www.youtube.com/harshit%20bagga"

console.log(url.replace('%20', '-'));

console.log(url.includes('harsh'));


console.log(gameName.split('h'));
