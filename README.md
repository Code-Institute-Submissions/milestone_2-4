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

difficulty setting works.

Displays stage

Features Left to Implement:  
---------------------------

Design user interface for the games - improve user interface . 

reseting the game 

Technologies Used:
------------------
HTML 
CSS
Bootstrap
Javascript

Testing:
--------

Javascript eventlistener's tested and working for the following buttons : difficultyButton , topleft, topRight, bottomLeft, bottomRight , powerButton and StartButton.

bug - when 2 is entered into the array - topRight flashs but then bottomRight stays on - no error message in console. Seems the bug is when you turn game on and hit start more than 2 times. NOT FIXED

bug - flash stays on when button is pressed - FIXED(Function was missing () )

bug - after button selection top left by user flash stats on - FIXED (function was mising () again)

Deployment:
------------


Credits:
---------

https://www.w3schools.com/jsref/met_win_clearinterval.asp

https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

https://www.w3schools.com/js/js_math.asp

https://www.w3schools.com/js/js_htmldom_eventlistener.asp

https://www.w3schools.com/js/js_if_else.asp

https://www.w3schools.com/js/js_loop_for.asp
