let editedPlayerNumber = 0;
let currentPlayer = 0
let drawRound = 1

let players = [
    {name: '', symbol:'X'},
    {name:'', symbol: 'O'}
];

let gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function editButtonClick(event) {
    asideSection.style.display = 'block';
    layoutSection.style.display = 'block';
    editedPlayerNumber = +event.target.dataset.playerid;
};

function cancelMode() {
    asideSection.style.display = 'none';
    layoutSection.style.display = 'none';
    errorMessage.textContent = '';
    formElement.firstElementChild.classList.remove('error');
    formElement.firstElementChild.lastElementChild.value = '';
};

function saveInput(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let saveInputValue = formData.get('user-name').trim();
    if (!saveInputValue) {
        errorMessage.textContent = 'Please insert valid name!'
        event.target.firstElementChild.classList.add('error');
        return   
    };
    let editPlayerWindow = document.getElementById('player-' + editedPlayerNumber + '-data');
    editPlayerWindow.children[1].textContent = saveInputValue;
    players[editedPlayerNumber-1].name = saveInputValue;
    cancelMode();
}