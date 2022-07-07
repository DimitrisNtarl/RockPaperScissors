let choices = ["paper", "rock", "scissors"];

/* this function makes a random choice selection for the computer */
function computerPlay(choices){
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    console.log(computerSelection);
    return computerSelection;
}

/* this function takes player's selection and also makes it case-insensitive */
function playerPlay(){
    let playerSelection = prompt("Choose Paper, Rock or Scissors");
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    return(playerSelection);
}

/* this function caclulates the result of each round*/
function playRound(computerSelection, playerSelection){
    let result;
    switch(true){
        case (computerSelection === playerSelection):
            console.log("tie");
            result = "tie!";
            return(result);
        case ((computerSelection === "rock") && (playerSelection === "scissors")):
        case ((computerSelection === "paper") && (playerSelection === "rock")):
        case ((computerSelection === "scissors") && (playerSelection === "paper")):
            console.log("you lost");
            result = "you lost!";
            return(result);
        case ((playerSelection === "rock") && (computerSelection === "scissors")):
        case ((playerSelection === "paper") && (computerSelection === "rock")):
        case ((playerSelection === "scissors") && (computerSelection === "paper")):
            console.log("you win");
            result = "you won!";
            return(result);
        default:
            console.log("wrong input");
            result = "wrong input!";
            return(result);
    }
}

/* this function create a game of 5 rounds and announce the winner at the end, if the user 
input is not valid it resets the round */ 
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let computerSelection = computerPlay(choices);
        let playerSelection = playerPlay();
        let result = playRound(computerSelection, playerSelection);
        if (result === "you lost!"){
            computerScore += 1;
            console.log(computerScore);
            console.log(playerScore);
        } else if (result === "you won!"){
            playerScore += 1;
            console.log(computerScore);
            console.log(playerScore);
        } else if (result === "wrong input!"){
            console.log(computerScore);
            console.log(playerScore);
            i = i - 1;
        } else {
            console.log(computerScore);
            console.log(playerScore);
        }
    }
    if (computerScore >= playerScore){
        console.log("game over, you lost");
    } else if (computerScore <= playerScore){
        console.log("game over, you won");
    } else {
        console.log("game over, it's a tie");
    }
}
game();