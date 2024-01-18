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
```
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
```const clock = document.getElementById('clock')
//const clock = docuemnt.querySelector('#clock')

let date = new Date();
//console.log(date.toLocaleDateString());
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)
```
