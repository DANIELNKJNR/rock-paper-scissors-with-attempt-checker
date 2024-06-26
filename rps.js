let compt = document.querySelector('.compt');
let inVal = document.querySelector('.inVal');
let userPlay = document.querySelector('.userPlay');
let scoreCon=document.querySelector('.scoreCon')
let attemptt=document.querySelector('.attempt')
let main=document.querySelector('.main')
let attempt=1
let score={
  win:0,
  lose:0,
  tie:0
}
function computer(){
let comptMoves = ['rock', 'paper', 'scissors'];
let randy = Math.floor(Math.random() * comptMoves.length);

let comptRan = comptMoves[randy];
compt.innerHTML=comptRan;
}

function user(){
inVal.addEventListener('input', () => {
  
  let val = inVal.value.toLowerCase();
  userPlay.innerHTML = val;
  let userChoice=userPlay.innerHTML
  if(userChoice==='rock'||'paper'||'scissors'){
    determineAll()
  }
});
}

function loadGame(){
  user()
  computer()
}
function determineAll(){
if(userPlay.innerHTML==='rock'){
  if(compt.innerHTML==='rock'){
    score.tie++
    renderScore()
  }else if(compt.innerHTML==='paper'){
    score.lose++
    renderScore()
  }else if(compt.innerHTML==='scissors'){
    score.win++
    renderScore()
  }
  attempt++
  
}else if(userPlay.innerHTML==='scissors'){
  if (compt.innerHTML === 'rock') {
    score.lose++
    renderScore()
  } else if (compt.innerHTML === 'paper') {
  score.win++
  renderScore()
  } else if (compt.innerHTML === 'scissors') {
  score.tie++
  renderScore()
  }
  attempt++
 
}

else if (userPlay.innerHTML === 'paper') {
  if (compt.innerHTML === 'rock') {
    score.win++
    renderScore()
  } else if (compt.innerHTML === 'paper') {
    score.tie++
    renderScore()
  } else if (compt.innerHTML === 'scissors') {
    score.lose++
    renderScore()
  }
  attempt++
  
}
attemptChecker()
}


function renderScore(){
  scoreCon.innerHTML=`Wins: ${score.win}  Lose=${score.lose}  Ties: ${score.tie}`
  attemptt.innerHTML=attempt;
}
function attemptChecker(){
if(attempt>6){
  
  main.innerHTML=`<h1> Game Over </h1> <button class='btn'>Try again</button>`
  let btn=document.querySelector('.btn')
  btn.addEventListener('click',()=>{
    location.reload()
  })
  
}
}
loadGame()
