// const $ = (selector) => document.querySelectorAll(selector);

const playGame = () => {
  let rock = document.querySelector(".rock");
  let paper = document.querySelector(".paper");
  let scissor = document.querySelector(".scissor");

  let playOption = [rock, paper, scissor];
  let computerOption = ["rock", "paper", "scissor"];

  let moves = 0;

  playOption.forEach((options, index) => {
    options.addEventListener("click", function () {
      // RAJ
      const ALLOWED_MOVES = 10;
      let movesLeft = document.querySelector(".moves-left");
      moves++;
      movesLeft.textContent = `Moves left: ${ALLOWED_MOVES - moves}`;

      let choiceNumberComputer = Math.floor(Math.random() * 3);
      let computerChoice = computerOption[choiceNumberComputer];

      // RAJ
      // Always use === to check data type as well
      if (moves === ALLOWED_MOVES) {
        alert("game over");
        gameOver();
      }
      winner(this.className, computerChoice);
    });
  });
};

const gameOver = () => {
  window.location.reload();
};

let computerScore = 0;
let playerScore = 0;

const possibleMoves = {
    stone_paper: "paper",
    paper_stone: "paper",
    
    scissor_paper: "scissor",
    paper_scissor: "scissor",
    
    stone_scissor: "stone",
    scissor_stone: "stone",
}

const checkWinner = (playerMove, computerMove) => {
    const moveThatWillWin = possibleMoves[`${playerMove}_${computerMove}`];
    let result = document.querySelector(".result");

    if (moveThatWillWin === playerMove) {
        result.textContent = "Player Won";
        playerScore++;
        document.querySelector(".player-score").textContent = playerScore;

    } else {
        result.textContent = "Computer Won";
        computerScore++;
        document.querySelector(".computer-score").textContent = computerScore;
    }
}

const winner = (player, computer) => {
  changeColorOfSelectedValue(computer, "#");
  changeColorOfSelectedValue(player, ".");

  let result = document.querySelector(".result");
  //   NEVER USE TOO MANY IFELSE
  // USE SWITCH CASE INSTEAD

  if (player === computer) {
    result.textContent = "tie";
  } else {
    checkWinner(player, computer);
  } 
};

const changeColorOfSelectedValue = (selectedValue, matchWith) => {
  const values = [`rock`, `paper`, `scissor`];
  values.forEach((item) => {
    let setStyleTo = "1px solid black";
    if (item === `${selectedValue}`) {
      setStyleTo = "10px solid rebeccapurple";
    }
    document.querySelector(`${matchWith}${item}`).style.border = setStyleTo;
  });
};

window.onload = () => {
  playGame();
};
