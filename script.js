let playerScore=0;
let computerScore=0;

const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random()*3)
    return arrOfChoices[randomNum]
}
const playRound = (playerSelection, computerSelection)=>{
    if (computerSelection===playerSelection){
        return `It's a tie! You both chose ${playerSelection}`
    }
    else if (computerSelection==="rock"&& playerSelection==="paper"){
        playerScore++;
        return "You won! Paper beats rock!!!"
    }
    else if (computerSelection==="rock"&& playerSelection==="scissors"){
        computerScore++;
        return "Computer won! Rock beats scissors!!!"
    }
    else if (computerSelection==="paper"&& playerSelection==="scissors"){
        playerScore++;
        return "You won! Scissors beat paper!!!"
    }
    else if (playerSelection==="rock"&& computerSelection==="paper"){
        computerScore++;
        return "Computer won! Paper beats rock!!!"
    }
    else if (playerSelection==="rock"&& computerSelection==="scissors"){
        playerScore++;
        return "You won! Rock beat Scissors!!!"
    }
    else if (playerSelection==="paper"&& computerSelection==="scissors"){
        computerScore++;
        return "Computer won! Scissors beats paper!!!"
    }
}
const game = () =>{
    for (let i=0; i<5; i++){
    const  playerSelection = prompt("Choose one. Rock, paper or scissors").toLowerCase();
    const computerSelection=computerPlay();
    console.log(playRound(playerSelection, computerSelection));
        }
        if (playerScore>computerScore){
            return "You beat the computer! 5Head"
        }
        else if (playerScore<computerScore){
            return "You lost to the computer"
    }
    else {
        return "It's  a draw"
    }
}

console.log(game());