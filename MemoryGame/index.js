let arrayOfPictures = [
    {
        name : 'geisha',
        src : 'images/geisha.png'
    },
    {
        name : 'geisha',
        src : 'images/geisha.png'
    },
    {
        name : 'girl',
        src : 'images/girl.png'
    },
    {
        name : 'girl',
        src : 'images/girl.png'
    },
    {
        name : 'magician-hat',
        src : 'images/magician-hat.png'
    },
    {
        name : 'magician-hat',
        src : 'images/magician-hat.png'
    },
    {
        name : 'planet-earth',
        src : 'images/planet-earth.png'
    },
    {
        name : 'planet-earth',
        src : 'images/planet-earth.png'
    },
    {
        name : 'kitty',
        src : 'images/kitty.png'
    },
    {
        name : 'kitty',
        src : 'images/kitty.png'
    },
    {
        name : 'sneakers',
        src : 'images/sneakers.png'
    },
    {
        name : 'sneakers',
        src : 'images/sneakers.png'
    },
]


let grid = document.querySelector('.grid');
let h1 = document.querySelector('.result-info');
let matchSpan = document.querySelector('#match');
let turnSpan = document.querySelector('#turn');
let winModal = document.querySelector('#win-modal');
let chosenPictures = [];
let chosenPicIndexArray = [];
let allChosenPicturesNumber = [];
let match = 0;
let turn = 0;


function fillGridTemplate(container,array) {
    array.sort((a,b) => 0.5 - Math.random());
    array.forEach((item,index) => {
        let img = document.createElement('img');
        img.setAttribute('index', index);
        img.setAttribute('src', 'images/question-mark.png');
        img.addEventListener('click', openPicture);
        container.appendChild(img);
    });
}

//Fill the grid div with cards from the array
fillGridTemplate(grid,arrayOfPictures);
let allImgElements = document.querySelectorAll('.grid img');


//Open card and invoke the check for a match function
function openPicture() {
  chosenIndex = this.getAttribute('index');
  let img = arrayOfPictures[chosenIndex];
  this.setAttribute('src', img.src);
  this.style.pointerEvents = 'none';
  chosenPicIndexArray.push(chosenIndex);
  chosenPictures.push(img);
    if(chosenPictures.length == 2) {
        allImgElements.forEach(img => img.style.pointerEvents = 'none');
        turn++;
        turnSpan.innerHTML = turn;
        setTimeout(() =>checkForMatch(), 1000); 
    }
}

//Showing the win Modal
function showWinModal() {
    winModal.style.display = 'block';

    //Getting all the needed elements to dislay and animate with gsap
    let tl = new TimelineLite();
    let article = document.querySelector('#win-modal article');
    let h2 = document.querySelector('#win-modal article h2');
    let delay = 0;
    let text = 'Congratualations';
    text =text.split('');
    text.forEach(letter => {
        let span = document.createElement('span');
        span.textContent = letter;
       h2.appendChild(span); 
    });
   
    tl.from(article, 1, {
        opacity : 0,
        y: 20,
        duration : 1,
        ease: 'back',
        delay: 1
    });
   
}

//Checking for a match and remove the matched img elements
function checkForMatch() {
   
    if(chosenPictures[0].name == chosenPictures[1].name) {
        allImgElements[chosenPicIndexArray[0]].style.opacity = '0';
        allImgElements[chosenPicIndexArray[1]].style.opacity = '0';
        allChosenPicturesNumber.push(allImgElements[chosenPicIndexArray[0]]);
        allChosenPicturesNumber.push(allImgElements[chosenPicIndexArray[1]]);
        match++;
        matchSpan.innerHTML = match;

    if(allChosenPicturesNumber.length == arrayOfPictures.length) {
            showWinModal();
        }
    } else {
        allImgElements[chosenPicIndexArray[0]].setAttribute('src', 'images/question-mark.png');
        allImgElements[chosenPicIndexArray[0]].style.pointerEvents = 'auto';
        allImgElements[chosenPicIndexArray[1]].setAttribute('src', 'images/question-mark.png');
        allImgElements[chosenPicIndexArray[1]].style.pointerEvents = 'auto';
    }

    chosenPictures.length = 0;
    chosenPicIndexArray.length = 0;
    allImgElements.forEach(img => img.style.pointerEvents = 'auto');
}

//Restart Game function 
function restartGame() {
    i.style.transform = 'rotate(-360deg)';
    i.style.transition = '.5s linear';
    chosenPictures.length = 0;
    chosenPicIndexArray.length = 0;
    allChosenPicturesNumber.length = 0;
    grid.innerHTML = '';
    turn = 0;
    match = 0;
    matchSpan.innerHTML = '0';
    turnSpan.innerHTML = '0';
    fillGridTemplate(grid,arrayOfPictures);
    allImgElements = document.querySelectorAll('.grid img');
}

//Restart the game button
let restratGameButton = document.querySelector('button');
let i = document.querySelector('button i');


restratGameButton.addEventListener('click', function(e){
        e.preventDefault();
        restartGame();

});


//Close the win modal and restart the game
let closeModalButton = document.querySelector('#win-modal article button');
closeModalButton.addEventListener('click', function(e){
    e.preventDefault();
    winModal.style.display = 'none';
    restartGame();
})


