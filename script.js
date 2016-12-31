
$(document).ready(function(){
})
var r = 0
var g = 0
var b = 0


var div = $("#i0")

// loop through colors, emphasizing the red spectrum
var incrementColor = function(step){
  if (r < 256){
    r+=64
  } else if (g < 256){
    g+=64
  } else {
    b+=64
  }
}

var rgbvals = []
var permuteRGB = function(){
  for (var i = 50; i < 256; i+=10) {
    for (var j = 50; j < 256; j+=10) {
      for (var k = 50; k < 256; k+=10) {
        rgbvals.push({r:i,g:j,b:k})
      }
    }
  }
}

permuteRGB()

var color

var colorLocator = []
var id
for (var i = 0; i < 15; i++) {

  id = "i"+i

  var alpha = $(".section").append("<div class=\"row\"><div class=\"col s12 m12 l12\" id=\"i" +i+"\"></div></div>")

  color = (i*50).toString(16)

  incrementColor(5)

  $("#i"+i).css("background-color", "rgb(" + r + "," + g + "," + b + ")")
  colorLocator.push({color:{r:r,g:g,b:b}, id:"#i"+i})
  // $("#i"+i).css("background-color", "rgb(" +rgbvals[i].r + "," +rgbvals[i].g+","+rgbvals[i].b+ ")")
  console.log('offset: ',$("#i"+i).offset())

  document.getElementById(id).addEventListener("click",function(){
    window.scrollTo(0,0)
  })
}
