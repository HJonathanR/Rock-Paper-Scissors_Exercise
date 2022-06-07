const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');

const computerPlay = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

const playRound = (playerSelection, computerSelection) => {
    let computerPlay = computerSelection;
    let playerPlay = playerSelection.toLowerCase();

    if(computerPlay === "rock" && playerPlay === "paper") {
        return 'You Win! Paper beats Rock';
    } else if (computerPlay === "paper" && playerPlay === "paper") {
        return "It's a Draw!";
    } else if (computerPlay === "scissor" && playerPlay === "paper") {
        return 'You Lose! Scissor beats Paper';
    } else if (computerPlay === "rock" && playerPlay === "rock") {
        return "It's a Draw!";
    } else if (computerPlay === "paper" && playerPlay === "rock") {
        return 'You Lose! Paper beats Rock';
    } else if (computerPlay === "scissor" && playerPlay === "rock") {
        return 'You Win! Rock beats Scissor';
    } else if (computerPlay === "rock" && playerPlay === "scissor") {
        return 'You Lose! Rock beats Scissor';
    } else if (computerPlay === "paper" && playerPlay === "scissor") {
        return 'You Win! Scissor beats Paper';
    } else if (computerPlay === "scissor" && playerPlay === "scissor") {
        return "It's a Draw!";
    }
}

rockBtn.addEventListener('click', () => {
    let playerSelection = "rock";
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
});

paperBtn.addEventListener('click', () => {
    let playerSelection = "paper";
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
});

scissor.addEventListener('click', () => {
    let playerSelection = "scissor";
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
});

/*
const game = () => {
    let computerScore = 0;
    let playerScore = 0;
    let gameDraws = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What do you choose?");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        } else {
            gameDraws++;
        }
    }

    if (playerScore === computerScore) {
        return "The Final Result is: Draw!";
    } else if (playerScore > computerScore) {
        return "The Final Result is: You Win!";
    } else {
        return "The Final Result is: You Lose!";
    }
}
*/