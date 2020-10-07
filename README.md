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

reseting the game 

Features Left to Implement:  
---------------------------

Design user interface for the games - improve user interface . 

Need to revamp user interface before submitting. 

Need to style power button , start button and difficulty button.


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

tested - game level progress all the way to 20. 

tested - win function inner.html shows win and selections flash and stay on till START / or power off/on the game. 

tested - game level progress with difficulty button enabled. 

tested - clear flash so colors reset to normal. 

Used JSHint to search for error is JS file. (Some semi colons missing and other version warnings) Fixed colons.

Removed outlin when a button is selected. Using outline: none in CSS. resource in Credits;

Deployment:
------------


git hub : https://skeogh89.github.io/milestone_2/

Credits:
---------

https://www.w3schools.com/jsref/met_win_clearinterval.asp

https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

https://www.w3schools.com/js/js_math.asp

https://www.w3schools.com/js/js_htmldom_eventlistener.asp

https://www.w3schools.com/js/js_if_else.asp

https://www.w3schools.com/js/js_loop_for.asp

https://stackoverflow.com/questions/26004898/css-border-appears-on-click
