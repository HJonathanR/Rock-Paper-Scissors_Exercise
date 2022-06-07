const computerPlay = () => {
    let RPS;
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        RPS = "Rock";
    } else if (randomNumber === 1) {
        RPS = "Paper";
    } else {
        RPS = "Scissor";
    }
}