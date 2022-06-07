const computerPlay = () => {
    let RPS;
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
    let playerSelect = playerSelection;
    let playerPlay = playerSelect.toLowerCase();

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

const game = () => {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, computerSelection);
    }
}