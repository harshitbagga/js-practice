var c  = 300
let a = 455
if (true){
    let a  = 10
    const b  = 20
    var c  = 30
    console.log("Inner a value:",a);
}
// for(let i = 0;i<Array.length; i++){
//     const element = array[i]
// }

// console.log(a);
// // console.log(b);
// console.log(c);


function one(){
    const username = "harshit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
two()
}
// one()
if(true){
const username = "bagga"
if(username === "bagga"){
const website  = "youtube"
console.log(username+website);
}
}

//+++++++++++++++++++++++interesting++++++++++++++++++++
addone(5)                  
function addone(num){ //you can use this type of function at any position even before declaration
    return num +1
}



const addtwo = function(num){ //we cannot call this function withoput declaration
    return num + 2 
}
addtwo(5)