const User ={
    _email:'harshit@gmail.com',
    _password: 3153
,

    get email(){
  return this._email.toUpperCase()
    },

    set password(val){
       this._password = val
    }

}
const tea =  Object.create(User)
console.log(tea.email);
console.log(User);
