// let myName = "harshit    "

// console.log(myName.truelength);

let myhero = ["thor", "spiderman", "ironman"]




let heropower   = {
  thor:  "hammer",
  spiderman: "web",
  ironman: "suit",
  
  getSpiderPower: function(){
  console.log(`spidy power is: ${this.spiderman}`);    
}

}
Object.prototype.harshit = function () {
    console.log(`harshit is present in all objects`);
}

Array.prototype.hiharshit = function () {
    console.log(`hi harshit prototype accessed`);
}

myhero.harshit()
heropower.harshit()
// heropower.hiharshit()


//Inheritance
const user={
    username:`chai`
}
const teacher  = {
    makevideo : true
}
const teachingsupport = {
    isavailable:true

}
const TAsupport = {
    makeassignment:`JS assignment`,
    time:`fulltime`,
  __proto__:teachingsupport
}

teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(teachingsupport,teacher)


let anotherusername = `chai aur code`

String.prototype.truelength = function () {
    console.log(`${this}`);
    
    console.log(`True Length is ${this.trim().length}`);
}

anotherusername.truelength()
"harshit    ".truelength()
"iceTea  ".truelength()
