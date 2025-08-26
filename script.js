
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const loseText = document.getElementById("lose");
const winText = document.getElementById("win");
const drawText = document.getElementById("draw");
const player = document.getElementById("player1");
const computer = document.getElementById("player2");

document.addEventListener("click", (event) => {
    player.classList.remove("rock", "paper", "scissors");
    computer.classList.remove("rock", "paper", "scissors");

    if (event.target.matches(".rock")) {
        playRound("rock");
    } else if (event.target.matches(".paper")) {
        playRound("paper");
    } else if (event.target.matches(".scissors")) {
        playRound("scissors");
    }
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        setTimeout(() => {
            drawText.classList.remove("hidden");
        }, 2000);
        setTimeout(() => {
            drawText.classList.add("hidden");
        }, 4000);
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        setTimeout(() => {
            winText.classList.remove("hidden");
        }, 2000);
        setTimeout(() => {
            winText.classList.add("hidden");
        }, 4000);
    } else {
        setTimeout(() => {
            loseText.classList.remove("hidden");
        }, 2000);
        setTimeout(() => {
            loseText.classList.add("hidden");
        }, 4000);
    }
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    player.classList.add("shake", playerChoice);
    computer.classList.add("shake", computerChoice);
    setTimeout(() => {
        player.classList.remove("shake");
        computer.classList.remove("shake");
    }, 2000);
}
