let playerScore=0;
let computerScore=0;
const rockButton=document.querySelector(".rock");
const paperButton=document.querySelector(".paper");
const scissorsButton=document.querySelector(".scissors");
const outcome=document.querySelector(".result")
const playerChose=document.querySelector(".playerSelection")
const computerChose=document.querySelector(".computerSelection")
document.querySelector(".playerSelection").style.fontFamily="magic"
document.querySelector(".computerSelection").style.fontFamily="magic"
const restartGame=document.querySelector(".restart");
const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random()*3)
    return arrOfChoices[randomNum]
}

const playRound = (playerSelection, computerSelection)=>{
    if (computerSelection===playerSelection){
        const output=document.createElement("p");
        output.innerText=`It's a tie! You both chose ${playerSelection}`;
        outcome.appendChild(output);
    }
    else if (computerSelection==="rock"&& playerSelection==="paper"){
        playerScore++;
        const output=document.createElement("p");
        output.innerText="You won! Paper beats rock!!!";
        outcome.appendChild(output);
    }
    else if (computerSelection==="rock"&& playerSelection==="scissors"){
        playerScore++;
        const output=document.createElement("p");
        output.innerText="Computer won! Rock beat scissors!!!";
        outcome.appendChild(output);
    }
    else if (computerSelection==="paper"&& playerSelection==="scissors"){
        playerScore++;
        const output=document.createElement("p");
        output.innerText="You won! Scissors beat paper!!!";
        outcome.appendChild(output);
    }
    else if (playerSelection==="rock"&& computerSelection==="paper"){
        computerScore++;
        const output=document.createElement("p");
        output.innerText="Computer won! Paper beats rock!!!";
        outcome.appendChild(output);
    }
    else if (playerSelection==="rock"&& computerSelection==="scissors"){
        playerScore++;
        const output=document.createElement("p");
        output.innerText="You won! Rock beat Scissors!!!";
        outcome.appendChild(output);
    }
    else if (playerSelection==="paper"&& computerSelection==="scissors"){
        computerScore++;
        const output=document.createElement("p");
        output.innerText="Computer won! Scissors beats paper!!!";
        outcome.appendChild(output);
    }
}

const checkWinner = (playerScore, computerScore)=>{
    if (playerScore===5){
        const h2 = document.createElement("h2")
        h2.classList.add("playerWon")
        h2.innerText = "You beat the computer. You're 5Head"
        outcome.appendChild(h2);
    }
    if (computerScore===5){
        const h2=document.createElement("h2")
        h2.classList.add("computerWon")
        h2.innerText = "You lost to the computer. So bad"
        outcome.appendChild(h2);
    }
}

const computerChoice=(choice)=>{
    computerChose.innerHTML=`<input type="image" src="images/${choice}.jpg" draggable="false">`
}
rockButton.addEventListener("click", respond);
paperButton.addEventListener("click", respond);
scissorsButton.addEventListener("click", respond);
function respond(e){
    playerSelection = e.target.dataset.choice
    const computerSelection=computerPlay();
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerScore);
    checkEnd(playerScore. computerScore);
    playerChose.innerHTML=`<input type="image" src="images/${playerSelection}.jpg" draggable="false">`
    computerChoice(computerSelection);
}
function checkEnd(){
    if (playerScore===5||computerScore===5){
        rockButton.removeEventListener("click", respond);
        paperButton.removeEventListener("click", respond);
        scissorsButton.removeEventListener("click", respond);
        restartGame.style.display="flex"
    }
}