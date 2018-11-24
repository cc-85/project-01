# WDI-Project1
# General Assembly Project 1 : Simple front-end game

## Goal: To create a two player single page game

## Technologies used

* HTML5 + HTML5 Audio
* CSS Animation
* JavaScript (ECMAScript6) + jQuery
* GitHub

## My Game - Sushi Squish

<img width="432" alt="screen shot 2018-09-07 at 09 51 15" src="https://user-images.githubusercontent.com/32750083/45208957-be6bdd00-b283-11e8-9120-37a295b2cc99.png">

### Game overview
Players pick from a list of sushi icons to match a randomly generated selection in a set amount of time.

### Game Instructions
1. Players begin on a start page which outlines basic instructions. Once ready they can click the 'Start' button to begin play.

<img width="1280" alt="screenshot-1" src="https://user-images.githubusercontent.com/32750083/45218970-3bf21600-b2a1-11e8-8db1-ec465c3d4161.png">

2. On the main page, players will see a randomly generated 'order' at the top of the screen. In the middle of the page is an empty plate, which player can fill by clicking and dragging from the 'menu' at the bottom of the screen. The 'send order' button should then be clicked to submit the order. If the selection the player has made matches the randomly generated order at the top, the player will score points.

<img width="1280" alt="screenshot-2" src="https://user-images.githubusercontent.com/32750083/45218989-52986d00-b2a1-11e8-9ae0-71541aa43bec.png">

3. When the time runs out, the player can move on to the next level, where the orders are bigger and they can score more points per order.

<img width="1280" alt="screenshot3" src="https://user-images.githubusercontent.com/32750083/45218998-5deb9880-b2a1-11e8-8b8e-ee26a6546485.png">

4. After the timer has run out on the third level, the end page will display, showing the player how many points they have scored and giving them the option to play again.

<img width="1280" alt="screenshot4" src="https://user-images.githubusercontent.com/32750083/45219005-67750080-b2a1-11e8-9154-80f2a3ed377b.png">

### Process

I used my initial wireframes to construct a basic layout for my main play page, I then used this to get the basic functionality working.

I started by getting selected pieces to move from the menu to the plate, then randomly generating orders. The next step would be to compare the two and produce outcomes depending on whether the two matched or not.

Once the basics of the game were working, I added second and third levels with bigger randomly generated orders and more time on the timer. I also created a start page with room for basic instructions and an end page which would show the player their score.

Next I looked into making the game function on mobile. I had to amend the functionality so that different click/touch options would be registered on the necessary device. The mobile version also needed some layout tweaks, so I next focussed on CSS for both desktop and mobile versions. Lastly, I added a few sounds throughout the game.

### Challenges

Adding the option to drag and drop the sushi pieces on desktop was quite challenging. I managed to get the basics of it in place but needed help to get it to function how I wanted it to and not alter the layout of the page in the process.

A lot of my game depends on moving classes around or storing and comparing information about classes. I initially found this difficult but believe I have a much better understanding of it now.

### Wins

I was really proud of getting the click and drop functionality working on mobile, as I'd faced a few problems whilst trying to implement it but got through them all on my own by doing research online.

The animation and overall design on the game looks exactly as I wanted them to. It gives the look and feel I wanted it to have and I think adds to the whole game experience.

## Future features

I'd like to add some more complexities to orders, such as perhaps having orders where certain pieces can't sit next to each other on the plate or orders where certain items must be included or left out. It would also be good to make a 2 player option.
