//OBJECT LITERAL

const user = {
    username: "hitesh",
    logincount : 8,
    isloggedin: true,

    // getUserdetails: function() {
    //    // console.log("User details received");
    //   console.log(`username:${this.username}`);
    // }
}

// console.log(user.username);
// //console.log(user.getUserdetails());
// console.log(this);


//CONSTRUCTION FUNCTION

// const promiseone = new Promise()
// const date   = new Date()

function User(username, logincount, isloggedin) {
  this.username = username 
  this.logincount = logincount
  this.isloggedin = isloggedin
  return this
}

this.greeting - function () {
  console.log(`Welcome ${this.username}`);
}

const userone = new User("harshit", 24, true) 
//new keyword is very important otherwise it will show old value even if you create new const 
//new keyword creates new object and calls the function like here its calling User function

const usertwo = new User("chai", 23, false)
console.log(userone.constructor);
console.log(usertwo);
