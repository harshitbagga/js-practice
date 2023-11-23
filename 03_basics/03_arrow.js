const user = {
username: "bagga",
price: 100,

welcomemessage: function() {
 console.log(`${this.username} Welcome to website`);
 console.log(this);
}
}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this);

// function chai(){
//     let username = "harshit"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "harshit"
    console.log(this);
}

// chai()

// const add2 = (num1, num2)=>  num1+num2

const add2 = (num1, num2)=>  (num1+num2)
console.log(add2(5,7));

// const myarray= [1,2,3,4,5,6,7,8,9]

//myarray.forEach(()=>())