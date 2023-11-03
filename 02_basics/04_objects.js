//const tinderUser = new Object()

const tinderUser = {}


 tinderUser.id = "123abc"
tinderUser.name = "harshit"
tinderUser.isloggedin = false 
// console.log(tinderUser);

const regularuser = {
    email:"super@gmail.com",
    fullname: {
        userfullname:{
            firstname: "harshit",
            lastname: "Bagga"

        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {
    1:"a", 2:"B"
}
const obj2 = {
    3:"c",
    4:"d"
}
const obj3 = {
    5:"e",
    6:"f"
}

// const obj4 = Object.assign(obj1,obj2,obj3)

const obj4 = {...obj1,...obj2,...obj3}

// console.log(obj4);

const users = [{
    id: 1,
    email: "harshit@gmail.com"
},
{},
{},
{},
{

}]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isloggedin'));//rare

