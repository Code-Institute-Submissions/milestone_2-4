# Stephen Memory Game

This webpage will be a simple memory games that shows user a sequence in which they will need to repeat that sequence in order. 
Progressivly gets harder level to level. 

Option to up difficulty from the begining 


Existing Features: 
--------------------------

Levels of game 20. 

Starting the game
    -User interface displays sequence for user to repeat
    - User able to select inputss

Winning the game

Features Left to Implement:  
---------------------------

Design user interface for the games

reseting the game 

Technologies Used:
------------------
HTML 
CSS
Bootstrap
Javascript

Testing:
--------

Javascript everntlistener's tested and working for teh following buttons : difficultyButton , topleft, topRight, bottomLeft, bottomRight , powerButton and StartButton.

bug - when 2 is entered into the array - topRight flashs but then bottomRight stays on - no error message in console. Seems the bug is when you turn game on and hit start more than 2 times. NOT FIXED

bug - flash stays on when button is pressed - FIXED(Function was missing () )

Deployment:
------------


Credits:
---------

https://www.w3schools.com/jsref/met_win_clearinterval.asp

https://www.w3schools.com/js/js_math.asp
