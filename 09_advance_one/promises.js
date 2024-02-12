// const promiseOne = new Promise(function(resolve, reject) {
//     //Do an async task
//     //DB calls, cryptography, network
//     setTimeout(() => {
//         console.log('Async task is complete');
//         resolve()
//     }, 4000);

// })


// promiseOne.then(function() {
//     console.log('Promise consumed');
// })

// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("async task 2");
//         resolve()
//     }, 1000);

// }).then(function() {
//     console.log("Async 2 resolved");
// })

// const promise3 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve({
//             username: "Chai",
//             email: "Chai@gmail.com"
//         })
//     }, 6000);
// }).then(function(data) {
//     console.log(data);
// })


// const promise4 = new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             let error = true
//             if (!error) {
//                 resolve({
//                     username: "hitesh",
//                     password: "123456"
//                 })
//             } else {
//                 reject('error something went wrong')
//             }
//         }, 1000)

//     })
//     .then((user) => {
//         console.log(user);
//         return user.username
//     })
//     .then((username) => {
//         console.log(username);
//     })
//     .catch(function(error) {
//         console.log(error);
//     }).finally(function () {
//         console.log("finally the promise is either resolved or rejected");
//     })


// const promise5 = new Promise( (resolve,reject)=> {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({
//                 username: "Javascript",
//                 password: "123456"
                
//             })
//             console.log(resolve);
//         } else {
//             reject('error something went wrong')

//         }
//     }, 1000)
// })

// async function consumepromisefive(){
//   try {
//     const response  = await promise5  
// console.log(response);
//   } catch (error) {
//     console.log("error");
//   }
    
// }

// consumepromisefive()


// async function getallusers() {
// try {
//     const response  = await fetch('https://jsonplaceholder.typicode.com/users')
// const data = await response.json()
// console.log(data);
// } catch (error) {
//  console.log(error);
// }
// }

// getallusers()

fetch('https://jsonplaceholder.typicode.com/users').then( (response)=> {
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("error");
})