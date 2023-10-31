let mydate  = new Date()
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toISOString());
// console.log(typeof mydate);

// let mynewdate = new Date(2023, 0, 20, 5,3)

// console.log(mynewdate.toDateString());
// console.log(mynewdate.toLocaleString());
let mynewdate = new Date("01-14-2020")
// console.log(mynewdate.toLocaleString());


let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(mynewdate.getTime());
// console.log(Math.floor(Date.now()/1000));
let createdate = new Date()
console.log(createdate.getUTCMonth());
//string interpolation can be used 

console.log(createdate.toLocaleString('default'
,{
    weekday:"long", 
}));


