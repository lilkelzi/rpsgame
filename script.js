

console.log("Hello World")
function getcomputerchoice() {
    let computerchoice = Math.random();

    if (computerchoice <= 0.3) {
        computerchoice = "rock";
    } else if (computerchoice <= 0.6) {
        computerchoice = "paper";
    } else {
        computerchoice = "scissors";
    }

    return computerchoice;
}

function getuserchoice() {
    let userchoice = prompt("To play game, enter either rock, paper, or scissors:");
    return userchoice.toLowerCase();
}

let computerscore = 0;
let humanscore = 0;

function playGame() {
    let ComputerOutput = getcomputerchoice();
    let HumanOutput = getuserchoice();

    console.log("Computer chose:", ComputerOutput);
    console.log("You chose:", HumanOutput);

    if (ComputerOutput === HumanOutput) {
        console.log("It's a tie!");
    } else if (
        (HumanOutput === "rock" && ComputerOutput === "scissors") ||
        (HumanOutput === "scissors" && ComputerOutput === "paper")
    ) {
        console.log("You win this round!");
        humanscore += 1;
    } else {
        console.log("Computer wins this round!");
        computerscore += 1;
    }

    console.log("Computer score:", computerscore);
    console.log("Your score:", humanscore);
}

function playRound() {
    for (let i = 0; i < 5; i++) {
        playGame();
    }

    console.log("Final score - Computer:", computerscore, "You:", humanscore);
    if (computerscore > humanscore) {
        console.log("Computer wins the game!");
    } else if (humanscore > computerscore) {
        console.log("You win the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playRound();