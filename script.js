const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
var winsEl = document.getElementById("win");
var tiesEl = document.getElementById("tie");
var lossesEl = document.getElementById("lose");
var wins = 0;
var losses = 0;
var ties= 0;

// selects all buttons, no plan to add additional buttons 
const possibleChoices= document.querySelectorAll('button');
// declares userChoice globally 
let userChoice;
let computerChoice = ["rock", "paper", "scissors"];




possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
userChoice = e.target.id;
userChoiceDisplay.innerHTML = userChoice;

generateComputerChoice()
}))

function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * possibleChoices.length);

    computerChoiceDisplay.innerHTML = computerChoice[randomNumber];

 console.log(computerChoice[randomNumber])
 
    if (userChoice == 'rock' && computerChoice[randomNumber] == 'scissors' || userChoice == 'scissors' && computerChoice[randomNumber] == 'paper' || userChoice == 'paper' && computerChoice == 'rock') {
        alert('You Win!'); 
        wins++;
    } else if (userChoice === computerChoice[randomNumber]) {
        alert('You Tied.'); 
        ties++;
    } else {
        alert('You Lose :('); 
        losses++;
    }

    winsEl.textContent = wins;
    lossesEl.textContent = losses;
    tiesEl.textContent = ties;
console.log(wins)
console.log(ties)
console.log(losses)
}

