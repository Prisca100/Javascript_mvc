function getComputerChoice() {
    const rpsChoices = ['Rock', 'Paper', 'Scissors'];
    const randomNum = Math.floor(Math.random() * rpsChoices.length);
    return rpsChoices[randomNum];
};

function getResult(playerChoice, computerChoice) {
    let score;
    if (playerChoice == computerChoice) {
        score = 0;
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score = 1
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        score = 1
    }
    else {
        score = -1
    }
    return score;
}

function playGames() {
    const rpsButtons = document.querySelectorAll('.rpsButttons')
}