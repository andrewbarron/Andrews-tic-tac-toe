## Tic Tac Toe WireFrame

1) Sign-in/Sign-up Page. "Welcome to Tic-Tac-Toe" as the title. Cannot move past this screen until a signup or signin has occured.
![Imgur](https://imgur.com/Jd3F98w.jpg)
2) Once signed in, the user has a nav menu at the top that states their username (top right), checks match history (all games played on this account), ability to change password & sign-out button that gets you to the screen prior. And a nice big blue play button to start a game.
![Imgur](https://imgur.com/Jl0kIDI.jpg)
3) After pressing play the user starts with an X and plays until a win, loss or tie occurs.
![Imgur](https://imgur.com/rxlLUAu.jpg)
Once a win, loss or tie occurs, a pop up screen with the result is shown, as well as two options.
1. main menu
2. play again

**User Stories**

1. As someone looking at this from an outside perspective, I'd like it to be intuituve how the game works with little to no explanation.
2. As someone looking at this from a programming perspective, I want the logic to be minimal and clean, while also accomplishing everything neccessary.
3. As someone looking to grade me on this, I'd like them to see that I put in effort and devloped skill on the way.
4. I would like to focus on not rushing the project. I have a habit of getting way too ahead of myself and trying to code the perfect solution without going through the process of figuring out what exactly I am trying to accomplish.
5. Feature checklist: 

**Questions from Homework**

1. What information do I need to **keep track of** here?
2. What **functionality** should my application have?

If we are keeping track of things, that generally will map to certain
data points or values we want stored.

For Tic Tac Toe, we can break this down:

- **Keep track of** who the current player is, X or O
- **Keep track of** if the game is over and who won
- **Keep track of** moves played on the board so far

Once we know **what**, we will want to think about **how** we will keep track
of these things. We could use regular variables, the `store` module, or the API
database, depending on what the API offers us. Consider what type of data you
might use for each of the points above, and how you would change it if you
need to.

For functionality, we can think about what our application **should do**. This
means we can start thinking about how to break up our code into modular
functions or methods to use throughout the logic.

For Tic Tac Toe we might need:

- **Functionality:** respond to user clicks by placing move on board
- **Functionality:** check for a winner
- **Functionality:** switch player from X to O, O to X
- **Functionality:** start and restart game

Once you're at this point, you should also start asking yourself questions
about what your application will need in order to complete a certain function.

For instance, for "start and restart game" we might ask ourselves:

- What do we need for the game to start, or be playable?
- What is the starting value of our stored data?
- What should my user do to trigger this refresh?
- What methods (jQuery or otherwise) or libraries would be good to use here?
