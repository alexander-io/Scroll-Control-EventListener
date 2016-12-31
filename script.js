
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

// permute all rgb vals, push them to the rgbvals[] array
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

// permuteRGB()

var color

var colorLocator = []

var id

for (var i = 0; i < 15; i++) {

  // designate id
  id = "i"+i

  // append to DOM the row, and colum for each color w/ corresponding id
  var alpha = $(".section").append("<div class=\"row\"><div class=\"col s12 m12 l12\" id=\"i" +i+"\"></div></div>")

  // call the increment rgb color function to change the values of r, g, and b
  incrementColor(5)
  // next plug those cahnged values into the background color of the div
  $("#i"+i).css("background-color", "rgb(" + r + "," + g + "," + b + ")")

  colorLocator.push({color:{r:r,g:g,b:b}, id:"#i"+i, offset:$("#i"+i).offset()})
  // $("#i"+i).css("background-color", "rgb(" +rgbvals[i].r + "," +rgbvals[i].g+","+rgbvals[i].b+ ")")
  // console.log('offset: ',$("#i"+i).offset())

  document.getElementById(id).addEventListener("click",function(){
    window.scrollTo(0,0)
  })
}
console.log('color locator array : ', colorLocator)
