//singleton
// Object.create

const mysym = Symbol("key1")
//object literals
const JsUser = {
    name: "Harshit",
    [mysym]:"key1",
    "full name": "Harshit bagga",
    age:25,
    location: "Surat",
    email: "harshit@google.com",
    isloggedin:false,
    lastloggedindays:["Mon", "Sun"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

JsUser.email = "harshit@gpt.com"
// Object.freeze(JsUser)
JsUser.email = "harhit@bagga.com"
// console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS user");

}
JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);

}
console.log(JsUser.greeting);
