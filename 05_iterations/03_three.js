// for of
//for strings ["","",""]
//for array of objects [{},{},{}]

//const arr = [1,2,3,4,5,6]
//for(const num  of arr){
 //console.log(num)

// }

// const greetings = "hello world"

//for (const str of greetings){
//console.log(str)
//}

const map = new Map()

map.set('IN', "India")
map.set('USA',"United States Of America")
map.set('Fr',"France")

//console.log(map)

for(const [ key,value] of map){
  console.log(key,':-', value)
}

const myObject = {
 'game1': 'NFS',
 'game2': 'GTA V'
}

//for (const [key,value] of myObject){
//console.log(key, ":-", value)

//} object is not iteratable
