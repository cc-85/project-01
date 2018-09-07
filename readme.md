# WDI-Project1
# General Assembly Project 1 : Simple front-end game

## Goal: To create a two player single page game

## Technologies used

* HTML5 + HTML5 Audio
* CSS Animation
* Javascript (ECMAScript6) + jQuery
* GitHub

## My Game - Sushi Squish!

![Codémon Logo](/css/images/CODEMON-logo.png)

### Game overview
Codémon is a simplified version of the 1996 Gameboy game Pokémon Red/Blue.
Players select and control one of three Codémon and battle them against each
other.

### Game Instructions
1. Players start in the bedroom of the original character from the Pokémon games.
They can move around using the keyboard arrow keys. When they walk over to the
other character who is sitting on the computer after a short animation the main
game begins.
![screenshot1](/screenshots/screenshot1.png)

2. Once at the main screen players enter their names and click the 'Fight' button.
To play the one player game click on the 'Play against the computer button'.
![screenshot2](/screenshots/screenshot2.png)

3. The player is then taken to the Codémon selection screen where they can choose
the character they would like to control.
![screenshot3](/screenshots/screenshot3.png)

4. After a short animation the battle begins. Players take it in turns to click
on their Codémon's moves.
![screenshot6](/screenshots/screenshot6.png)

5. Once one of the Codémon's health reaches 0 it faints and the other player is
the winner.
![screenshot5](/screenshots/screenshot5.png)

### Process

After drawing out my wireframes I identified the four main views the user would
go through to play the game. The most complex of these was the battle itself so
I started there.

I created 2 Codémon characters, some buttons and simple moves to start working on
how the battle mechanics would work. Later on in the project I added in attack
and defence stats as well as attack range to add a degree of randomness to the
game.

Once I had the basic battle functionality working I move onto the user journey
creating the character selection screen and start screen. I added more structure
to my html file and also started to create the css. After I had completed this I
combined the two files into one and began working on refining the game and adding
in animations.

Finally I added the game intro scene with the controllable trainer character.

### Challenges

Even though in the final game there are only three Codémon to choose from there
are a lot of variables and functions to keep track of. This mean that I had to
try and be as consistent as possible with naming conventions and scope. It
was also challenging to find a formula to calculate the result of attacks which
kept the game fair and well paced.

### Wins

Adding the audio, animation, images and timing events really brought the game to
life. Creating the computer player and alternative views when playing against it
was also very rewarding (screen shot of the 1 player game below). I was really
pleased to be able to add additional start screen with the controllable character
as it's a nice callback to the original games and gave me the opportunity to add a more reactive feature.

![screenshot7](/screenshots/screenshot7.png)

## Future features

If I had more time I would work on making the game mobile responsive. It would
also be good to add more characters and a bigger variety of moves, as well as
adding moves which could disable your opponent for a set number of turns.
