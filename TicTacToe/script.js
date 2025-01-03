let turn = "X";
let scoreX = 0;
let scoreO = 0;

// insert X or O
function insertXO(boxIndex){
    var box = document.getElementById(boxIndex).textContent;

    if (box === "") {
        if (turn === "X") {
            document.getElementById(boxIndex).innerHTML = "X";
            turn = "O";
        } 
        else {
            document.getElementById(boxIndex).innerHTML = "O";
            turn = "X";
        }

        setTimeout(Win, 100);
    }
}

// Check win
function Win(){
    // ROW
    const row1 = checkLine("1", "2", "3");
    const row2 = checkLine("4", "5", "6");
    const row3 = checkLine("7", "8", "9");

    // COL
    const col1 = checkLine("1", "4", "7");
    const col2 = checkLine("2", "5", "8");
    const col3 = checkLine("3", "6", "9");

    // DIAGONAL
    const diag1 = checkLine("1", "5", "9");
    const diag2 = checkLine("3", "5", "7");


    // Draw
    draw = document.getElementById("1").textContent !== "" && document.getElementById("2").textContent !== "" && document.getElementById("3").textContent !== "" && document.getElementById("4").textContent !== "" && document.getElementById("5").textContent !== "" && document.getElementById("6").textContent !== "" && document.getElementById("7").textContent !== "" && document.getElementById("8").textContent !== "" && document.getElementById("9").textContent !== "";


    if ((row1 || row2 || row3) || (col1 || col2 || col3) || (diag1 || diag2)) {
        updateScore();
    } else if (draw){
        alert("Draw");
        resetGame();
    }
}

// help check line
function checkLine(a, b, c) {
    const boxA = document.getElementById(a).textContent;
    const boxB = document.getElementById(b).textContent;
    const boxC = document.getElementById(c).textContent;
    return boxA === boxB && boxB === boxC && boxA !== "";
}


// update the score of player
function updateScore(){
    // if turn is O that mean X was the last one to play
    if (turn === "O"){
        scoreX++;
        document.querySelector(".PlayerX").innerHTML = scoreX;
        alert("Player X won the game");
    } else {
        scoreO++;
        document.querySelector(".PlayerO").innerHTML = scoreO;
        alert("Player O won the game");
    }

    resetGame();
}

// reset the game
function resetGame(){
    let cells = document.querySelectorAll("td");
    for (element of cells){
        element.innerHTML = "";
    }

    turn = "X";
}