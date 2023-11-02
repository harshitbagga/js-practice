const Marvel_heros = ["Ironman", "Spiderman", "Dr Strange", "Wanda"]
const dc_heros = ["Superman","Batman","mera"]

// Marvel_heros.push(dc_heros)

// console.log(Marvel_heros); 
// console.log(Marvel_heros[4][1]); 

// const all_heros = Marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...Marvel_heros,...dc_heros] //this is spread operator ...

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

const usable_another_array = another_array.flat(Infinity)//to write array of array in depth into one new single array

// console.log(usable_another_array);

console.log(Array.isArray("Harshit"));//to check if value is array or not

console.log(Array.from("Harshit"));//to convert inside string into array elements


console.log(Array.from({name:"harshit"})); //interesting



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
