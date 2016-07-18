var $random = $('.random');
var $reset = $('.reset');

function getRandomColor() {
  return Math.floor((Math.random()* 255));
}

function changeBackgroundColor() {
  var colorR = getRandomColor();
  var colorG = getRandomColor();
  var colorB = getRandomColor();
  if (colorR != 255 && colorG != 255 && colorB != 255) {
    $('body').css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB  + ")");
  }
  else {
    changeBackgroundColor();
  }
}

function resetBackgroundColor() {
 $('body').css("background-color", "white");
}

$random.on('click', function() {
  changeBackgroundColor();
})

$reset.on('click', function() {
  resetBackgroundColor();
})
