const user = {
    username: "hitesh",
    loginCount : 8,
    signedIn: true,

    getUserdetails: function() {
       // console.log("User details received");
      console.log(`username:${this.username}`);
    }
}

console.log(user.username);
console.log(user.getUserdetails());



