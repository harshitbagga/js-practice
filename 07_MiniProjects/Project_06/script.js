//generating random colors (hex values)
let intervalid    

const randomColor = function () {
    const hexValues = "0123456789ABCDEF"
  let color = '#'


  for (let i = 0; i < 6; i++) {
   color += hexValues[Math.floor(Math.random()*16)]      
  }
return color;
}


const  startchangingcolor = function() {

 if (!intervalid) {
    intervalid =  setInterval(changebgcolor,1000)
 }
    
    function changebgcolor() {
        document.body.style.backgroundColor = randomColor()
    }
   
}



const stopchangingcolor  = function () {
      clearInterval(intervalid)
      intervalid = null
}

document.querySelector('#start').addEventListener('click',startchangingcolor);

document.querySelector('#stop').addEventListener('click',stopchangingcolor);