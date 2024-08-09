

const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");




function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    console.log(computerChoice);

  
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;



  }


