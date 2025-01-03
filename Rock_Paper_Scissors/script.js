let userScore = document.querySelector(".You");
let robotScore = document.querySelector(".Robot");

function robotChoice(){
    const option = ["Rock", "Paper", "Scissors"];
    let randomChoice = option[Math.floor(Math.random() * option.length)];

    return randomChoice;
}

function game(userChoice){
    const robot = robotChoice();
    alert(`Robot chose: ${robot}`);

    console.log(`You chose: ${userChoice}`);
    console.log(`Robot chose: ${robot}`);

    
    if (userChoice === robot) {
        alert("It's a tie!");
    } else if (
        (userChoice === "Rock" && robot === "Scissors") ||
        (userChoice === "Paper" && robot === "Rock") ||
        (userChoice === "Scissors" && robot === "Paper")
    ) {
        alert("You win!");
        resetGame();
        userScore.innerHTML = Number(userScore.innerHTML) + 1;
    } else {
        alert("You lose!");
        resetGame();
        robotScore.innerHTML = Number(robotScore.innerHTML) + 1;
    }
}

function resetGame(){
    if (Number(userScore.innerHTML) == 999 || Number(robotScore.innerHTML) == 999){
        userScore.innerHTML = 0;
        robotScore.innerHTML = 0;
    }
}