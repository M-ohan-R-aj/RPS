function game(){
    let playerPoint=0;
    let computerPoint=0;
    for(i=0; i<5; i++){

        let computerSelection;
        function getComputerChoice(computerInput){
            if (computerInput===1){
                 computerSelection="ROCK";
            }
            else if (computerInput===2){
                computerSelection="PAPER";
            }
            else computerSelection="SCISSORS";
        }
        let computerInput=Math.floor(Math.random()*3)+1;
        getComputerChoice(computerInput);
        
        let playerSelection = prompt("Choose one. Rock, paper or scissors").toUpperCase();
        
        console.log(computerSelection);
        console.log(playerSelection);
        function playRound(playerSelection, computerSelection){
        if (computerSelection===playerSelection){
            return "It's a tie!"
        }
        if (computerSelection==="ROCK"&& playerSelection==="PAPER"){
            return "You won!"
        }
        if (computerSelection==="ROCK"&& playerSelection==="SCISSORS"){
            return "Computer won!"
        }
        if (computerSelection==="PAPER"&& playerSelection==="SCISSORS"){
            return "You won!"
        }
        if (playerSelection==="ROCK"&& computerSelection==="PAPER"){
            return "Computer won!"
        }
        if (playerSelection==="ROCK"&& computerSelection==="SCISSORS"){
            return "You won!"
        }
        if (playerSelection==="PAPER"&& computerSelection==="SCISSORS"){
            return "Computer won!"
        }
        }
        console.log(playRound(playerSelection, computerSelection));

        function Score(){
        if(playRound(playerSelection, computerSelection)==="You won!"){
            playerPoint++;
        }
        else if(playRound(playerSelection, computerSelection)==="Computer won!"){
            computerPoint++;
        }
        else {
            playerPoint += 0;
            computerPoint =+0;
        }
        }
        Score();
    }
    if (playerPoint>computerPoint){
        console.log("Congratulations!, You've won!")
    }
    else if (playerPoint<computerPoint){
        console.log("Oh no! The computer has won the battle!")
    }
    else if(playerPoint=computerInput)
        console.log("You've tied with the computer")
    
}
game();