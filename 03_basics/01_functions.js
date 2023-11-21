function calculatecartprice(val1,val2,...num1){
return num1
}

console.log(calculatecartprice(200,500,600,4000)); //when we have multiple values we can use spread operator (...) to collect the rest of the values to an array
const user = {
    username: "harshit",
    price:199
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user)
handleobject({
    username: "Sam",
    price:599
})

const mynewArray = [200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(mynewArray);
console.log(returnSecondValue([200,400,500,600,1000]));