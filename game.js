
// For Rulse 👇
const rules = document.getElementById('rules');
const closeRulse = document.getElementById('rules-x');
const rulesHolder = document.querySelector('.rules-holder');
const rulesBox = document.querySelector('.rules');

rules.addEventListener('click', () =>{
   rulesHolder.classList.toggle('activeRulse');
   rulesBox.classList.remove('popupExit');
   rulesBox.classList.add('popupEntrance');
});
closeRulse.addEventListener('click', () =>{
   rulesBox.classList.remove('popupEntrance');
   setTimeout(()=>{
      rulesHolder.classList.toggle('activeRulse');
   }, 200);
   rulesBox.classList.add('popupExit');
});


//For Picking And Main Function 👇
const papper = document.querySelector('.cp_papper');
const scissors = document.querySelector('.cp_scissors');
const rock = document.querySelector('.cp_rock');

   //For Sounds
var audioPick = document.getElementById('audioPick');
var winner = document.getElementById('winner');

   //Holder, Show When Pick of Done
const gameHolder = document.querySelector('.game-function-holder');
const gameResult = document.querySelector('.game-function-result');

const papperPicked = document.querySelectorAll('.papperPicked');
const scissorsPicked = document.querySelectorAll('.scissorsPicked');
const rockPicked = document.querySelectorAll('.rockPicked');

   //Score Count
let scoreCounter = document.getElementById('scoreCounter');

   //Result Content
let winOrLoseText = document.getElementById('winOrLose');
const resultOfGame = document.querySelector('.resultOfGame');
const whosWin = document.querySelectorAll('.focusWinOut');
const focusWinIn1 = document.querySelectorAll('.focusWinIn1');
const focusWinIn2 = document.querySelectorAll('.focusWinIn2');

   //Play Again 
const playAgain = document.getElementById('again');

let myPick;
let housePick;
let count = 0;
scoreCounter.textContent = count;

//Swaping To Other Page
function swapPagetoPick(){
   gameHolder.classList.add('activeGameFunctionHolder');
   gameResult.classList.add('activeGameFunctionResult');
}

//creating pick for house
function housePicking(){
   let random = Math.trunc(Math.random() * 6) + 1;
   (random === 1 || random === 4)? housePick = "Rock" : 0;
   (random === 2 || random === 5)? housePick = "Papper" : 0;
   (random === 3 || random === 6)? housePick = "Scissors" : 0;

   if(housePick == "Rock"){
      rockPicked[1].classList.add('activePlayeAndHousePicked');
   }else if(housePick == "Papper"){
      papperPicked[1].classList.add('activePlayeAndHousePicked');
   }else if(housePick == "Scissors"){
      scissorsPicked[1].classList.add('activePlayeAndHousePicked');
   }
}

function win(){
   winner.play();
   winner.volume = 0.4;

   count += 1;
   scoreCounter.textContent = count;
   winOrLoseText.textContent = "You Win";
   whosWin[0].classList.add('activeWin');
   focusWinIn1[0].classList.add('activeWin');
   focusWinIn2[0].classList.add('activeWin');
   resultOfGame.classList.add('playAgain');
   playAgain.style.color = "#161D40";
}

//Crating evaluation game 💎
function evaluation(){
   if(myPick == housePick){
      winOrLoseText.textContent = "Draw";
      playAgain.style.color = "#161D40";
      resultOfGame.classList.add('playAgain');
      console.log("Draw");
   }else if(myPick == "Rock" && housePick == "Scissors"){
      win();
   }else if(myPick == "Scissors" && housePick == "Papper"){
      win();
   }else if(myPick == "Papper" && housePick == "Rock"){
      win();
   }else{
      whosWin[1].classList.add('activeWin');
      focusWinIn1[1].classList.add('activeWin');
      focusWinIn2[1].classList.add('activeWin');
      winOrLoseText.textContent = "You Lose";
      resultOfGame.classList.add('playAgain');
      playAgain.style.color = "red";
   }
}


//Event Listener to all Pick 🎁
rock.addEventListener('click', ()=>{
   swapPagetoPick();

   audioPick.play();
   audioPick.volume = 0.4;

   myPick = "Rock";
   rockPicked[0].classList.add('activePlayeAndHousePicked');
   setTimeout(()=>{
      housePicking();
      evaluation();
   }, 1000);

});
papper.addEventListener('click', ()=>{
   swapPagetoPick();
   
   audioPick.play();
   audioPick.volume = 0.4;

   myPick = "Papper";
   papperPicked[0].classList.add('activePlayeAndHousePicked');
   setTimeout(()=>{
      housePicking();
      evaluation();
   }, 1000);
});
scissors.addEventListener('click', ()=>{
   swapPagetoPick();

   audioPick.play();
   audioPick.volume = 0.4;

   myPick = "Scissors";
   scissorsPicked[0].classList.add('activePlayeAndHousePicked');
   setTimeout(()=>{
      housePicking();
      evaluation();
   }, 1000);
});

//For New Game Attempt 🔁
playAgain.addEventListener('click', ()=>{
   setTimeout(()=>{
   gameHolder.classList.remove('activeGameFunctionHolder');
   gameResult.classList.remove('activeGameFunctionResult');

   housePick = "";
   random = 0;

   for(let j = 0; j < 2; j++){
      rockPicked[j].classList.remove('activePlayeAndHousePicked');
      papperPicked[j].classList.remove('activePlayeAndHousePicked');
      scissorsPicked[j].classList.remove('activePlayeAndHousePicked');
   }
  
   for(let i = 0; i < 2; i++){
      whosWin[i].classList.remove('activeWin');
      focusWinIn1[i].classList.remove('activeWin');
      focusWinIn2[i].classList.remove('activeWin');
   }

   winOrLoseText.textContent = "";
   resultOfGame.classList.remove('playAgain');
   }, 400);

});


