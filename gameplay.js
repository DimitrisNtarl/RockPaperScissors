let choices = ["paper", "rock", "scissors"];

/* random choice selection for the computer */
function computerPlay(choices){
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
}
let computerSelection = computerPlay(choices);
console.log(computerSelection);

/* player selection and make it case-insensitive */
let playerSelection = prompt("Choose Paper, Rock or Scissors");
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);

/* caclulating the result */
function round(computerSelection, playerSelection){
    let result;
    switch(true){
        case (computerSelection === playerSelection):
            console.log("tie");
            result = "tie!";
            return(result);
            break;
        case ((computerSelection === "rock") && (playerSelection === "scissors")):
        case ((computerSelection === "paper") && (playerSelection === "rock")):
        case ((computerSelection === "scissors") && (playerSelection === "paper")):
            console.log("you lost");
            result = "you lost!";
            return(result);
            break;
        case ((playerSelection === "rock") && (computerSelection === "scissors")):
        case ((playerSelection === "paper") && (computerSelection === "rock")):
        case ((playerSelection === "scissors") && (computerSelection === "paper")):
            console.log("you win");
            result = "you win!";
            return(result);
            break;
        default:
            console.log("wrong input");
            result = "wrong input!";
            return(result);
            break;
    }
}
let result = round(computerSelection, playerSelection);