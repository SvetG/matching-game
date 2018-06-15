
// Card variables
let allCards = document.querySelectorAll(".card");
let cardArray = [...allCards]
const deck = document.querySelector(".deck");

// Variables to check for a match
let openCards = [];
let matchingCards = [];

// Score keeping variables: moves
const moves = document.querySelector(".moves");
let counter = 0;

// Score keeping variables: stars
let clicksCounted = [];
let star = document.querySelectorAll(".fa-star");
let starArray = [...star];

// Score keeping variables: timer
let startTime = document.getElementsByClassName("timer");
let second = 0;
let minute = 0;
let timer;

// Modal variables
const win = document.getElementById("win");
let modalClose = document.querySelector(".exit-button");
let reset = document.getElementsByClassName("restart")[0];

// Re-start variable on home page
let tryAgain = document.getElementsByClassName("try-again")[0];


// Shuffle function from http://stackoverflow.com/a/2450976
// This function was provided in the starter code
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
cardArray = shuffle(cardArray);

// Function that starts a new game
function newGame(){
    for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    deck.appendChild(card);
    }
    shuffle(cardArray);
}
newGame();

/********
    Create a forEach loop to add an event listener to each card, when clicked:
        -  add clicked cards to the openCards array
        -  if openCards array holds equal to or less than 2 cards add .open and .show to each card

    Clicking also calls the star rating function and pushes each "click" into an array to be used for the rating

    If openCards array reaches 2 cards:
        -  call the countMoves function
        -  check if the icons match (innerHTML)
              - call match function
              - no match; call noMatch function
********/
cardArray.forEach(function (card) {
  card.addEventListener("click", function () {
      openCards.push(this);
      clicksCounted.push(this);
      starRating();
      if (openCards.length <= 2){
        this.classList.add("open", "show", "disabled");
      }
      if (openCards.length === 2){
        countMoves();
        if (openCards[0].innerHTML === openCards[1].innerHTML) {
          match();
        } else {
          noMatch();
        }
      }
      if (openCards.length === 1 && second === 0) {
        startTimer();
      }
  });
});

/********
Match function:
    -  adds class .match, .animated, .rubberBand to card index 0 in array
    -  adds class .match, .animated, .rubberBand to card index 1 in array
    -  disables the pointer cursor
    -  adds matched cards to matchingCards array (to be used for Star counter)
    -  clears the openCards array
*******/
function match(){
  openCards[0].classList.add("match", "animated", "fadeIn");
  openCards[1].classList.add("match", "animated", "fadeIn");
  matchingCards.push(this);
  openCards = [];
  if (matchingCards.length === 8) {
    openModal();
  }
}

/********
noMatch function:
    -  adds class .no-match, .animated, .flash to card index 0 in array
    -  adds class .no-match, .animated, .flash to card index 1 in array
    -  disables the pointer cursor
    -  removes all classes to allow cards to return to previous state
*******/
function noMatch(){
      openCards[0].classList.add("no-match", "animated", "flash", "disabled");
      openCards[1].classList.add("no-match", "animated", "flash", "disabled");
      setTimeout(function(){
        openCards[0].classList.remove("open", "show", "no-match", "animated", "flash", "disabled");
        openCards[1].classList.remove("open", "show", "no-match", "animated", "flash", "disabled");
        openCards = [];
      },800);
}

// Counting moves function
function countMoves(){
  counter++;
  moves.innerText = counter;
}

// Star variables
const starOne = document.getElementById("star-one").childNodes[0];
const starTwo = document.getElementById("star-two").childNodes[0];
const starThree = document.getElementById("star-three").childNodes[0];
const starFour = document.getElementById("star-four").childNodes[0];


/********
Star Rating function
*******/
function starRating (){
    if (clicksCounted.length > 21 && clicksCounted.length < 29){
      starOne.className = "far fa-star";
    }
    if (clicksCounted.length > 29 && clicksCounted.length < 37){
      starTwo.className = "far fa-star";
    }
    if (clicksCounted.length > 37 && clicksCounted.length < 45){
      starThree.className = "far fa-star";
    }
    if (clicksCounted.length > 45){
      starFour.className = "far fa-star";
    }
}

//RESTART
/********"Try Again" click command*******/
tryAgain.addEventListener("click", function(){
  restartGame();
});

// Reset the game from Modal click command
reset.addEventListener("click", function(){
  win.style.display = "none";
  restartGame();
});

/********
Function to restart the game
********/
function restartGame () {
  newGame();
  for(let i = 0; i < cardArray.length; i++){
    allCards[i].setAttribute("class", "card");
    matchingCards = [];
  }
  counter = 0;
  moves.innerText = counter;
  second = 0;
  minute = 0;
  document.querySelector(".timer").innerHTML = "00:00";
  clearInterval(timer);
  clicksCounted = [];
  resetStars();
}

/********
Reseting the stars back to full
******/
function resetStars() {
  starOne.className = "fa fa-star";
  starTwo.className = "fa fa-star";
  starThree.className = "fa fa-star";
  starFour.className = "fa fa-star";
}

// TIMER
function startTimer() {
	timer = setInterval(timePlayed, 1000);
}

function stopTimer() {
	clearInterval(timer);
	second = 0;
	minute = 0;
}

function timePlayed() {
	second++;
	if (second < 10) {
		second = `0${second}`;
	}
	if (second == 60) {
		minute++;
		second = 0;
	}
  document.querySelector(".timer").innerHTML = "0" + minute + ":" + second;
}

// MODAL
function openModal() {
  const finalStars = document.getElementById("stars").innerHTML;
  const finalTime = document.querySelector(".timer").innerHTML;
  stopTimer();
  win.style.display = "block";
  document.getElementById("win-info").innerHTML = "Moves " + ": " + counter;
  document.getElementById("final-stars").innerHTML = finalStars;
  document.getElementById("final-time").innerHTML = "It only took " + ": " + finalTime;
}

modalClose.onclick = function() {
  win.style.display = "none";
}
