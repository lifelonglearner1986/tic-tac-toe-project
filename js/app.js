const startButton = document.getElementById('start-new-game-div');
const activeGameSection = document.getElementById('active-game');
const gameBoard = document.querySelector('#game-board');
const activePlayer = document.getElementById('active-player-name');
const articlePart = document.querySelector('article');
let playerOne = document.getElementById('player-1-data');
let playerTwo = document.getElementById('player-2-data');

let gameIsOver = false;


const edit1Button = document.getElementById('edit1-button');
const edit2Button = document.getElementById('edit2-button');

const asideSection = document.getElementById('aside-section');
const layoutSection = document.getElementById('layout');
const cancelButton = document.getElementById('cancel-button');

const errorMessage = document.querySelector('#error-message');


const formElement = document.querySelector('form');

edit1Button.addEventListener('click', editButtonClick);
edit2Button.addEventListener('click', editButtonClick);
cancelButton.addEventListener('click', cancelMode);
layoutSection.addEventListener('click', cancelMode)
formElement.addEventListener('submit', saveInput);

startButton.addEventListener('click', gameActivation);


gameBoard.addEventListener('click', selectBox);