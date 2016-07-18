Color Changer project
Jeff Duke

Intro
----
This is a simple page/app that will randomly change the background color when the random button is clicked.  Clicking on the reset button resets the background color to white:

How it works
----

I opted to use jQuery for this project mostly just to practice more jquery.  It could have easily been done in regular JavaScript.  I created a function that gets a random color value between 0 and 255 using 

`function getRandomColor() {
  return Math.floor((Math.random()* 255));
}`

I then created a function called changeBackgroundColor that gets 3 variables, colorR, colorG and colorB using the getRandomColor function on each.  Then I use the jquery .css method to change the background color to rgb(colorR, colorG, colorB)  Because I'm using Math.floor on Math.random my background color will never be fully white, that is (255, 255, 255)
