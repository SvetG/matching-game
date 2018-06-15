
## About
<p>This is a classic memory matching game created as a project for the Udacity Front-End Web Developer Nanodegree program.</p>

## Instructions
<p>To start the game click on any two cards.</p>

<p>The goal is to find two matching cards, in the shortest amount of time. There is an unlimited number of tries, however the game is timed. The timer starts when the first card is clicked and stops when the last match is found.<br> 
A restart button can be pressed at any time in the game. The restart button reshuffles the deck, re-starts the timer, and replenishes the star rating.</p>

<p>The star rating evaluates the players competency. The game starts with 5 stars. 1 star is deducted after 10 attempted matches (unsuccessful or not). This gives the player a 2 move window to finish the game with all 5 stars (minimum number of moves to finish is 8; if you're super lucky). A star is then deducted after every 4 moves.</p>


<p>Each time a match is unsuccessful the cards flip back over. Successful matches stay open. </p>

<p>Once all 8 matches have been made, a modal pops up congratulating the player. The modal displays the amount of moves it took to win the game, the time it took, and the remaining stars. It also gives the player the option of simply exiting the modal to view the board and their stats, or to "restart" the game. Restarting the game resets the timer, moves, and cards to their original state and replenishes any lost stars.</p>

<p>The player has the option to "try again" at any point in the game by clicking the restart icon next to the timer at the top of the page. This will reset the timer, moves, and cards to their original state and replenish any lost stars</p>

## Starter Code
JS: Shuffle function: Fisher-Yates (aka Knuth) Shuffle<br>
https://github.com/udacity/fend-project-memory-game/blob/master/js/app.js<br>
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976<br>

HTML:<br>
https://github.com/udacity/fend-project-memory-game/blob/master/index.html

CSS:<br>
https://github.com/udacity/fend-project-memory-game/blob/master/css/app.css

## Dependencies
Main sources used for code development and understanding:
JavaScript & JQuery (Interactive front-end web development) by Jon Duckett<br>
HTML & CSS (Design and build websites) by Jon Duckett<br>

Icons used (including stars): https://fontawesome.com/icons?from=io<br>
Color picker: https://www.w3schools.com/colors/colors_picker.asp<br>
  Used for background solid, gradient, and mixer colors.<br> 

Card flipping and match/no match code partly adapted from Mike Wales seminar:<br> 
https://www.youtube.com/watch?v=_rUH-sEs68Y<br>
Mostly realized from study of loops,"if" statements, and DOM Manipulation.<br>

Modal code adapted from: https://www.w3schools.com/howto/howto_css_modals.asp<br>
Timer code adapted from: https://slack-files.com/TA4BW5S10-FB0Q3CSMB-999a40f301<br>

Responsiveness:<br>
  Used Flexbox: Based on own knowledge as Flexbox was used in Portfolio Page Project.<br>
  Used CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/<br>

<p>Study of other student's posted finished and unfinished code of the Memory Game project was used. This code was studied and read to gain understanding. NEVER COPIED. </p>.

W3schools and MDN Web docs resources were used.<br> 
  setInterval() function: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval<br>
  setTimeout() function: https://www.w3schools.com/Jsref/met_win_settimeout.asp<br>
  
