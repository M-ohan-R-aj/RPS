let playerScore=0;
let computerScore=0;
const rockButton=document.querySelector(".rock");
const paperButton=document.querySelector(".paper");
const scissorsButton=document.querySelector(".scissors");
const result=document.querySelector(".result")
const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random()*3)
    return arrOfChoices[randomNum]
}
const playRound = (playerSelection, computerSelection)=>{
    console.log("1", playerSelection , "2", computerSelection);
    if (computerSelection===playerSelection){
        const output=document.createElement("p")
        outcome.innertext=`It's a tie! You both chose ${playerSelection}`
        result.appendChild(p)
    }
    else if (computerSelection==="rock"&& playerSelection==="paper"){
        playerScore++;
        const output=document.createElement("p")
        outcome.innertext="You won! Paper beats rock!!!"
        result.appendChild(p)
    }
    else if (computerSelection==="rock"&& playerSelection==="scissors"){
        computerScore++;
        const output=document.createElement("p")
        t.createElement("p")
        outcome.innertext="Computer won! Rock beats scissors!!!"
        result.appendChild(p)
    }
    else if (computerSelection==="paper"&& playerSelection==="scissors"){
        playerScore++;
        const output=document.createElement("p")
        outcome.innertext="You won! Scissors beat paper!!!"
        result.appendChild(p)
    }
    else if (playerSelection==="rock"&& computerSelection==="paper"){
        computerScore++;
        const output=document.createElement("p")
        outcome.innertext="Computer won! Paper beats rock!!!"
        result.appendChild(p)
    }
    else if (playerSelection==="rock"&& computerSelection==="scissors"){
        playerScore++;
        const output=document.createElement("p")
        outcome.innertext="You won! Rock beat Scissors!!!"
        result.appendChild(p)
    }
    else if (playerSelection==="paper"&& computerSelection==="scissors"){
        computerScore++;
        const output=document.createElement("p")
        outcome.innertext="Computer won! Scissors beats paper!!!"
        result.appendChild(p)
    }
}

rockButton.addEventListener('click', ()=>{
    const computerSelection=computerPlay();
    const playerSelection="rock";
    playRound(playerSelection, computerSelection)
})
paperButton.addEventListener('click', ()=>{
    const computerSelection=computerPlay();
    const playerSelection="paper";
    playRound(playerSelection, computerSelection)
})
scissorsButton.addEventListener('click', ()=>{
    const computerSelection=computerPlay();
    const playerSelection="scissors";
    playRound(playerSelection, computerSelection)
})
// const game = () =>{
//     for (let i=0; i<5; i++){
//     var  playerSelection = document.getElementsByClassName("input")
//     console.log(playerSelection)
//     const computerSelection=computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
//         }
//         if (playerScore>computerScore){
//             return "You beat the computer! 5Head"
//         }
//         else if (playerScore<computerScore){
//             return "You lost to the computer"
//     }
//     else {
//         return "It's  a draw"
//     }
// }

// console.log(game());
