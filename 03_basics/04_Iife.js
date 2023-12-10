//Immediately Invoked function Expressions (IIFE)

(function chai(){
    //NAMED iffe
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //UNAMED iffe
    console.log(`DB two CONNECTED ${name}`);
})('hitesh')