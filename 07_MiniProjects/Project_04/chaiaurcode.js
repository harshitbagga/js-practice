let rand = console.log(parseInt(Math.random()*100+1));
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
    //
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
    displaymessage('game Over. The Random number was ${rand}')
    endgame()

}
else {
    guessdisplay(guess)
    checkguess(guess)

}
}
function checkguess(guess){
  if(guess == rand){
    displaymessage(`you guessed it right`);
    endgame
  }
  else if(guess < rand){
    displaymessage(`you number is too low`)

  }
  else if(guess > rand){
    displaymessage(`tour number is too high`)

  }
}

function displaymessage(message){
  loworhi.innerHTML = `<h2>${message}</h2>`
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
        prevguess = []
        numguess = 1
        guessdisplay = 
    })

}