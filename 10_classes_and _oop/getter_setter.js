class User{
    constructor(email, password){
        this.email = email
        this.password = password

    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email = val
    }
    get password(){
        return `The password is : ${this._password}`
    }
    set password(val){
        this._password = val
    }
}
const chai = new User("harshit@gmail.com","123")

console.log(chai.email);
console.log(chai);
