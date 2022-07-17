const message = document.getElementById('message');
const buttons = document.querySelectorAll('button');
const scores = document.querySelector('.scores');
const H_T = document.querySelector('.H-T');
let coinArray = ["Head","Tail"];
// let winnerScores = [0,0];
let playerScore = 0;
let ComputerScore = 0;
let coin = ['Head','Tail'];



// console.log(coinArray);

for (let i = 0; i < buttons.length; i++) {
   
    // console.log(buttons[i]);
    buttons[i].addEventListener('click',tossCoin);
}

function tossCoin(e) {
    // alert('hello');
    var  playerGuess = e.target.innerText;
    // console.log("Player Selected",e.target.innerText);
    let computerSel = Math.floor(Math.random()*2);
    var computerGuess = coinArray[computerSel];

    let two = Math.floor(Math.random()*2);
    let ht = coin[two];
    // console.log("Computer Selected",coinArray[computerSel]);
     if (ht === computerGuess){
         ComputerScore++;
    }else if(ht === playerGuess) {
        playerScore++;
    }
    message.innerHTML = "Player Selected " +  playerGuess + " Computer Selected " +   computerGuess;
    H_T.innerHTML = ht
    scores.innerText =  '  Player  ' + playerScore  + "    Computer    " + ComputerScore;    
}