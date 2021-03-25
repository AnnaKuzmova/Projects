let xClass = 'x';
let oClass = 'circle';
let playerTurn = 'x';
let winnngCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let board = document.querySelector('#game-board');
let cells = Array.from(document.querySelectorAll('.cell'));
let currentClass
let messageModal = document.querySelector('.winning-message-modal');
let gameMessage = document.querySelector('#game-message');
let restartButton = document.querySelector('#restart-button');

function changePlayerAndBoard(boardEl) {
    playerTurn = playerTurn === 'x'?'o':'x'
    if(playerTurn === 'x') {
        boardEl.classList.remove('circle');
        boardEl.classList.add(xClass);
    } else {
        boardEl.classList.remove('x');
        boardEl.classList.add(oClass);
    }
}

function placeMark(element) {
    if(playerTurn === 'x') {
        element.classList.add(xClass);
    } else {
        element.classList.add(oClass);
    }
}

function checkWin() {
  currentClass = playerTurn === 'x'?'x':'circle'
   let check; 
   let isLast = cells.every(cell => cell.classList.contains(oClass) || cell.classList.contains(xClass))
   winnngCombinations.forEach(combination => {
       if(combination.every(number => cells[number].classList.contains(currentClass))) {
        check = true;
        gameMessage.innerHTML = `${playerTurn} Wins!`
        messageModal.classList.remove('close')
       } 
       else {
           check = false;
       }

       if(!check && isLast) {
        gameMessage.innerHTML = `Draw!`
        messageModal.classList.remove('close')
     }
   })
   
   
   
 
}

function handleClick(e) {
    //place mark
    let clickedCell = e.target;
    placeMark(clickedCell)
   //check for win
    checkWin();
   //chnage board class and players turn
   changePlayerAndBoard(board)
}


function startGame() {
    playerTurn = 'x';
    board.classList.add(xClass);
    cells.forEach(cell => cell.addEventListener('click', handleClick, {once: true}));
}

function restartGame(e) {
    e.preventDefault();
    messageModal.classList.add('close');
    gameMessage.innerHTML = "";
    cells.forEach(cell => {
        cell.removeEventListener('click', handleClick);
        cell.classList.remove(oClass);
        cell.classList.remove(xClass);
        cell.addEventListener('click', handleClick, {once: true})
    } );
    board.classList.remove(oClass);
    board.classList.remove(xClass);
   startGame(); 
}

restartButton.addEventListener('click', restartGame)

startGame();
