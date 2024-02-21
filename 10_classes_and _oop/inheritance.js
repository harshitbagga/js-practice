class User{
    constructor (username){
        this.username = username
    }

    logMe(){
        console.log(`Username ${this.username}`);
    }
}

class Teacher extends User{

   constructor(username,email,password)
   {
    super(username)
    this.email
    this.password
   }

   addCourse(){
    console.log(`A new course era ${this.username}`);
   }
}

const chai = new Teacher("chai", "chai@12", "123")
const masalachai = new User("harshit")
chai.logMe()
masalachai.logMe()
console.log(chai instanceof User);