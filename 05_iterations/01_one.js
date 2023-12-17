//for loop

// for (let index = 0; index < 10; index++) {
//     const element = index;

//     if (element == 5) {
//         console.log("5 is the best number");
//     }
//     console.log(element);    
// }


// for (let index = 0; index <= 10; index++) {
//     // console.log(`Outer loop value: ${index}`);
//      for (let i = 0; i <= 10; i++) {
//         // console.log(`inner loop value: ${i} and inner loop: ${i}`);
// //        console.log(index+'*'+i+ '=' + index*i);
//     }
    
// }
 
// let myArray = ["Flash","Batman", "Superman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }


for (let i = 1; i <= 20; i++) {
    if (i== 5) {
        console.log("5 detected");
        continue
    }
    console.log(`value of i is ${i}`);
    
}