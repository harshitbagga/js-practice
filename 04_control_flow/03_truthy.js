const userEmail = []

// if(userEmail){
// console.log("user email received")
// }
// else{
// console.log("user email  not received")
// }

// falsy values

//flase ,0, -0, bingInt 0n, "", null, undefind, NaN 

//Truthy values

//"0", 'false', " ", [], {}, function(){} 

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("obj is empty");
}

//Nullish coalescing operator (??): null underfined

let val1;
//val1  = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// console.log(val1);

// Ternary Operator

// condition ? true : false 

const iceprice = 100
iceprice>=80 ? console.log("less than 80"): console.log("more than 80");