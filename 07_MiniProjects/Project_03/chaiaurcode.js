const clock = document.getElementById('clock')
//const clock = docuemnt.querySelector('#clock')

let date = new Date();
//console.log(date.toLocaleDateString());
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)