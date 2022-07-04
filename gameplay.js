let choices = ["Paper", "Rock", "Scissors"];

function computerPlay(){
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}



