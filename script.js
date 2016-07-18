var random = $('.random');
var reset = $('.reset');
var color = Math.floor((Math.random()* 255) +1);

random.on('click', function() {
  changeBackgroundColor();
})

reset.on('click', function() {
  resetBackgroundColor();
})

function changeBackgroundColor() {
  var colorR = Math.floor((Math.random()* 255) +1);
  var colorG = Math.floor((Math.random()* 255) +1);
  var colorB = Math.floor((Math.random()* 255) +1);
  if (colorR != 0 && colorG != 0 && colorB != 0) {
    $('body').css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB  + ")");
  }
  else {
    changeBackgroundColor();
  }
}

function resetBackgroundColor() {
 $('body').css("background-color", "white");
}
