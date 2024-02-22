const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor);
// Math.PI = 3.25
// console.log(Math.PI); //you cannot change this PI property value 


const chai = {
    name:" ginger Chai",
    price : 250,
    isAvailable:true

,
    orderChai:function(){
     console.log("nai bani");     
    }
}

// console.log(chai);
 Object.defineProperty(chai,'name',{//writable:false
     enumerable:true})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key,value] of Object.entries(chai)) {
    
    if (typeof value !== 'function') {
        console.log(`key:${key},value:${value}`);        
    }

}