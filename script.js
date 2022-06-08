const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');
const resultContainer = document.querySelector("#result");
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

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
    let message;
    const resultMessage = document.createElement('p');
    
    if(computerPlay === "rock" && playerPlay === "paper") {
        message = 'You Win! Paper beats Rock';
        resultMessage.textContent = message;
        resultContainer.appendChild(resultMessage);
    } else if (computerPlay === "paper" && playerPlay === "paper") {
        message = "It's a Draw!";
        resultMessage.textContent = message;
        resultContainer.appendChild(resultMessage);
    } else if (computerPlay === "scissor" && playerPlay === "paper") {
        message = 'You Lose! Scissor beats Paper';
        resultMessage.textContent = message;
        resultContainer.appendChild(resultMessage);
    } else if (computerPlay === "rock" && playerPlay === "rock") {
        message = "It's a Draw!";
        resultMessage.textContent = message;
        resultContainer.appendChild(resultMessage);
    } else if (computerPlay === "paper" && playerPlay === "rock") {
        message = 'You Lose! Paper beats Rock';
        resultMessage.textContent = message;
        resultContainer.appendChild(resultMessage);
    } else if (computerPlay === "scissor" && playerPlay === "rock") {
        message = 'You Win! Rock beats Scissor';
        resultMessage.textContent = message;
        resultContainer.appendChild(resultMessage);
    } else if (computerPlay === "rock" && playerPlay === "scissor") {
        message = 'You Lose! Rock beats Scissor';
        resultMessage.textContent = message;
        resultContainer.appendChild(resultMessage);
        return message;
    } else if (computerPlay === "paper" && playerPlay === "scissor") {
        message = 'You Win! Scissor beats Paper';
        resultMessage.textContent = message;
        resultContainer.appendChild(resultMessage);
    } else if (computerPlay === "scissor" && playerPlay === "scissor") {
        message = "It's a Draw!";
        resultMessage.textContent = message;
        resultContainer.appendChild(resultMessage);
    }

    return message;
}


rockBtn.addEventListener('click', () => {
    const playerSelection = "rock";
    let resultRound = playRound(playerSelection, computerPlay());
    pointCounter(resultRound);
});

paperBtn.addEventListener('click', () => {
    const playerSelection = "paper";
    let resultRound = playRound(playerSelection, computerPlay());
    pointCounter(resultRound);
});

scissor.addEventListener('click', () => {
    const playerSelection = "scissor";
    let resultRound = playRound(playerSelection, computerPlay());
    pointCounter(resultRound);
});

function pointCounter(resultRound) {
    const result = resultRound;
    const winnerText = document.createElement("h2");
    
    if(playerScore <= 5 || computerScore <= 5) {
        if(result.includes('Draw')) {
            drawScore++;
        } else if (result.includes('Win')) {
            playerScore++;
        } else {
            computerScore++;
        }
    }

    if(playerScore === 5) {
        winnerText.textContent = "You Win the Game!";
        resultContainer.appendChild(winnerText);
    } else if (computerScore === 5) {
        winnerText.textContent = "The Computer wins the Game";
        resultContainer.appendChild(winnerText);
    }
}
