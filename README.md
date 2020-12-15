## Tic Tac Toe WireFrame
**Wireframe**
1) Sign-in/Sign-up Page. "Welcome to Tic-Tac-Toe" as the title. Cannot move past this screen until a signup or signin has occured.
![Imgur](https://imgur.com/Jd3F98w.jpg)
2) Once signed in, the user has a nav menu at the top that states their username (top right), checks match history (all games played on this account), ability to change password & sign-out button that gets you to the screen prior. And a nice big blue play button to start a game.
![Imgur](https://imgur.com/Jl0kIDI.jpg)
3) After pressing play the user starts with an X and plays until a win, loss or tie occurs.
![Imgur](https://imgur.com/rxlLUAu.jpg)
Once a win, loss or tie occurs, a pop up screen with the result is shown, as well as two options.
1. main menu
2. play again

**Gameplan & Strategy**
For Tic-Tac-Toe, the main functions that must work are placing a piece on a board, determining when a winner or tie has taken place and reseting the board/creating a new game.
I plan on using the API to keep track of the board pieces, then using a forEach function to loop through winning combinations to determine a winner. In order to reset the board, I plan on calling the API to start a new game ID and emptying the cells on the board.

For my strategy, a video we watched on problem solving will come in handy.
1. Understand the problem - Break does what is being asked into plain english. Write it down, draw a diagram or talk it out.
2. Divide into sub-problems - Placing a piece on the board can be broken down into multiple steps. First create a board with nine seperate cells. Next create a unique id for each. Then write a function that will manipulate each cell when an action (click event) takes place. Next save that action to an array that keeps track of what is going on the board. Then tell the API to also save that action. Finally write a function that is looped through after each action to determine a winner.
3. Debug - "Figure out what you really told your program to do rather than what you thought you told it to do." - Andrew Singer

**User Stories**

1. As someone looking at this from an outside perspective, I'd like it to be intuituve how the game works with little to no explanation.
2. As someone looking at this from a programming perspective, I want the logic to be minimal and clean, while also accomplishing everything neccessary.
3. As someone looking to grade me on this, I'd like them to see that I put in effort and devloped skill on the way.
4. I would like to focus on not rushing the project. I have a habit of getting way too ahead of myself and trying to code the perfect solution without going through the process of figuring out what exactly I am trying to accomplish.
5.
5. As a user I would like to be able to Sign up, then sign in with ease. Also being updated on the way that what I filled out was taken account of.
6. As a user that is signed in, I would like to be abe to change my password , check my match history and play a new game.
7. As I play the game, I'd like to be informed on who's turn it is and if I win, lose or draw (I am always player X).
8. After the game, I'd like to either play another game or go back to my sign in menu.

**Technologies Used**
html
css
javascript
bootstrap.css
Jquery



**Post-Completion**
I'm proud of the work I was able to accomplish. I wish that I could of artciulated my issues better in order to get through problems faster. I will definetly be taking advatanage of the issues requests in the future. I think my favorite piece of code was my updateGame function. Making that work was probably the biggest accomplishment and made the whole project feel do-able.

**Unsolved Problems**
1. I would like to be able to play againist a random computer generated response for circle. I think i would use Math.floor(Math.random) to determine a specfic cell that the computer would place a circle on. This would make the game fun & interactive, maybe the computer can be the next tic-tac-toe champion.
2. Add more CSS to make the game user-friendly.
3. Add mobile friendly CSS so that the game can be played on mobile. 
