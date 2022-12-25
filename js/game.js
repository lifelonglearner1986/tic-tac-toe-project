function reset() {
  articlePart.style.display = "none";
  if (gameIsOver === true) {
    activeGameSection.firstElementChild.innerHTML =
      'It\'s your turn <span id="active-player-name">PLAYER NAME</span>!';
    playerOne.children[1].innerHTML = "Player name";
    playerTwo.children[1].innerHTML = "Player name";
    currentPlayer = 0;
    drawRound = 1;
    gameIsOver = false;
  }

  let listSwitch = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      let gameBoardItem = gameBoard.children[listSwitch];
      gameBoardItem.textContent = "";
      gameBoardItem.classList.remove("disable");
      listSwitch++;
    }
  }
}

function gameActivation() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please insert both players names!");
    return;
  }

  reset();

  activePlayer.textContent = players[currentPlayer].name;
  activeGameSection.style.display = "block";
}

function playerSwitch() {
  if (currentPlayer === 0) {
    currentPlayer = 1;
  } else {
    currentPlayer = 0;
  }
  activePlayer.textContent = players[currentPlayer].name;
}

function selectBox(event) {
  if (event.target.tagName !== "LI" || gameIsOver) {
    return;
  }

  const gameField = event.target;
  const boxRow = gameField.dataset.row - 1;
  const boxCol = gameField.dataset.col - 1;

  if (gameData[boxRow][boxCol] > 0) {
    alert("Choose empty box, please!");
    return;
  }

  gameField.textContent = players[currentPlayer].symbol;
  gameField.classList.add("disable");
  gameData[boxRow][boxCol] = currentPlayer + 1;

  let winnerNumber = defineWinner();

  if (winnerNumber !== 0) {
    endGame(winnerNumber);
  }

  drawRound++;

  playerSwitch();
}

function defineWinner() {
  //Checking rows
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  //Checking columns
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  //Checking diagonal
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  //Checking diagonal
  if (
    gameData[0][0] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[2][0];
  }

  if (drawRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerNumber) {
  articlePart.style.display = "block";
  gameIsOver = true;
  // activeGameSection.firstElementChild.innerHTML =
  // 'It\'s your turn <span id="active-player-name">PLAYER NAME</span>!';
  activeGameSection.firstElementChild.style.display = "none";
  if (winnerNumber > 0) {
    articlePart.firstElementChild.firstElementChild.textContent =
      players[winnerNumber - 1].name;
  } else {
    articlePart.firstElementChild.textContent = "It's a draw";
  }
}
