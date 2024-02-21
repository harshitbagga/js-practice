// class User{

//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password

//     }

//     encryptPassword(){
//         return `${this.password} abc`
//     }

// changeUsername(){
//     return `${this.username.toUpperCase()}`
// }

// }

// const chai = new User("harshit", "harshitbagga@gmail.com", "123456")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername("harshit"));

//behind the scene

function User(username, email, password) {
    this.username = username
        this.email = email
        this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password} abc`
}

User.prototype.changeUsername = function () {
    return `${this.username}`
}
const tea = new User("hart", "hartbagga@gmail.com", "1236")

console.log(tea.encryptPassword());
console.log(tea.changeUsername("harshit"));
