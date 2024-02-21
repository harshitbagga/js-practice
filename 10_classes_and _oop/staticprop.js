class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username ${this.username}`);
    }

   static  createId(){ //static not allowing method to use 
        return `123`
    }
}
const hitesh = new User("harshit")
// console.log(hitesh.createId());


class Teacher extends User{
 constructor (username, email){
    super(username)

    this.email = email


}
}

const iphone = new Teacher("Iphone", "Iphone@code.com")

console.log(iphone.createId());