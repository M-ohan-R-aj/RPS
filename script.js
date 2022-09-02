let computerChoice;
function getComputerChoice(computerInput){
    if (computerInput===1){
        computerChoice="ROCK";
    }
    else if (computerInput===2){
        computerChoice="PAPER";
    }
    else computerChoice="SCISSORS"
}
let computerInput=Math.floor(Math.random()*3)+1;
getComputerChoice(computerInput);
console.log(computerChoice);

let getInputChoice = prompt("Choose one. Rock, paper or scissors");
let userChoice=getInputChoice.toUpperCase();
console.log(userChoice);

function playRound(playerSelection, computerSelection){
if (computerChoice===userChoice){
    return "It's a tie!"
}
if (computerChoice==="ROCK"&& userChoice==="PAPER"){
    return "You won!"
}
if (computerChoice==="ROCK"&& userChoice==="SCISSORS"){
    return "Computer won!"
}
if (computerChoice==="PAPER"&& userChoice==="SCISSORS"){
    return "You won!"
}
if (userChoice==="ROCK"&& computerChoice==="PAPER"){
    return "Computer won!"
}
if (userChoice==="ROCK"&& computerChoice==="SCISSORS"){
    return "You won!"
}
if (userChoice==="ROCK"&& computerChoice==="PAPER"){
    return "Computer won!"
}
}
const playerSelection=userChoice;
const computerSelection=computerChoice;
console.log(playRound());
let result=playRound();
console.log(result);