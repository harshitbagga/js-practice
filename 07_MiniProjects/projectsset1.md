# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```Javascript
const btn = document.querySelectorAll('.button');
const body = document.querySelector("body")

btn.forEach(function (button){
    console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)

    if (e.target.id === 'grey') {
        body.style.background = e.target.id;

    }
    if (e.target.id === 'white') {
        body.style.background = e.target.id;
        
    }
    if (e.target.id === 'blue') {
        body.style.background = e.target.id;
        
    }
    if (e.target.id === 'yellow') {
        body.style.background = e.target.id;
        
    }
    if (e.target.id === 'purple') {
        body.style.background = e.target.id;
        
    }
  })
})
```
## Project 2 
```Javascript
const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
   const height =  parseInt(document.querySelector('#height').value)
   const weight =  parseInt(document.querySelector('#weight').value)
   const result = document.querySelector('#result')

   if (height === '' || height<0 || isNaN(height)) {//isNAN means not a number 
    result.innerHTML = `Please give a valid input${height}`;
  }
 else if (weight === '' || weight<0 || isNaN(weight)) {//isNAN means not a number 
    result.innerHTML = `Please give a valid input${weight}`;
  }
  else{
   const bmi =  (weight/((height*height)/10000)).toFixed(2)
   //show  result
   result.innerHTML=`<span>${bmi}</span>`
}
});
```
## Project 3
``` Javascript
const clock = document.getElementById('clock')
//const clock = docuemnt.querySelector('#clock')

let date = new Date();
//console.log(date.toLocaleDateString());
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)
```
## Project 4
```Javascript
let rand = parseInt(Math.random()*100+1);
const submit = document.querySelector('#button');
const userinput = document.querySelector('#text');
const prevguess  = document.querySelector('.guesses');
const lastresult = document.querySelector('.lastresult');
const loworhi = document.querySelector('.loworhi');
const result = document.querySelector('.result');
const p = document.createElement('p')

let previousguess = []
let numguess  = 1
let playgame = true

if (playgame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
         const guess =  parseInt(userinput.value)
         console.log(guess);
       validateGuess(guess)
    })
    
}

function validateGuess(guess){
    
   if(isNaN(guess)){
    alert('Please enter a valid number')

   }
   else if(guess<1){
     alert('Please Enter a nummber more than 1')
   }
   else if(guess>100){
    alert('Please Enter a nummber less than 100')
  }
  else{
    previousguess.push(guess)
  }
if (numguess === 11){
    guessdisplay(guess)
    displaymessage(`game Over. The Random number was ${rand}`)
    endgame()

}
else {
    guessdisplay(guess)
    checkguess(guess)

}
}
function checkguess(guess){
  if(guess === rand){
    displaymessage(`you guessed it right`);
    endgame();
  }
  else if(guess < rand){
    displaymessage(`you number is too low`)

  }
  else if(guess > rand){
    displaymessage(`tour number is too high`)

  }
}

function displaymessage(message){
  loworhi.innerHTML = `<h2>${message}</h2>`;
}
function guessdisplay(guess){
    userinput.value = ''
    prevguess.innerHTML += `${guess}, `
    numguess++
    lastresult.innerHTML = `${11 - numguess}`

}
function endgame() {
    userinput.value  = ''
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h3 id = "newgame">Start New Game</h3>`
    result.appendChild(p)
    playgame = false
    newgame()
}
function newgame() {
    const newgame = document.querySelector('#newgame')
    newgame.addEventListener('click',function(e){
        rand = console.log(parseInt(Math.random()*100+1));
        previousguess = [];
        numguess = 1
        prevguess.innerHTML = ''
        lastresult.innerHTML = `${11 - numguess}`
        userinput.removeAttribute('disabled')
        result.removeChild(p)
        playgame = true

      })

}
```



##Project 5

```Javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e)=> {
    insert.innerHTML = 
    `
    <div class="color">
    <table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${e.key === ''? 'Space':e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    
  </tbody>
</table>
    </div>
    `
})
```


## Project 6
```Javascript
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
```
