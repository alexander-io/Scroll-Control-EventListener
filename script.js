
$(document).ready(function(){
  // console.log('hello')
})
var r = 0
var g = 0
var b = 0
// $("#i0").css("background-color", "black")

var div = $("#i0")

var incrementColor = function(step){

  if (r < 256){
    r++
  } else if (g < 256){
    g++
  } else {
    b++
  }
  // console.log(r,g,b)
}

var rgbvals = []
var permuteRGB = function(){
  // var alpha = {r:0, g:0,b:0}
  for (var i = 50; i < 256; i+=10) {
    // alpha.r = i
    for (var j = 50; j < 256; j+=10) {
      // alpha.g = j
      for (var k = 50; k < 256; k+=10) {
        // alpha.b =k
        rgbvals.push({r:i,g:j,b:k})
      }
    }
  }
}

permuteRGB()
// console.log(rgbvals[165000])
// console.log(rgbvals)
// console.log(div)
var color
for (var i = 0; i < 1000; i++) {
  // var div = $("#i"+i)
  // console.log($(".container"))
  $(".section").append("<div class=\"row\"><div class=\"col s12 m12 l12\" id=\"i" +i+"\"></div></div>")
  // var alpha = $(".row")
  // var alpha = div
  color = (i*50).toString(16)
  // console.log(color)
  // alpha.css("background-color", "#"+color)

  // $("#i"+i).css("background-color", "#"+color)
  incrementColor(5)
  $("#i"+i).css("background-color", "rgb(" + r + "," + g + "," + b + ")")
  $("#i"+i).css("background-color", "rgb(" +rgbvals[i].r + "," +rgbvals[i].g+","+rgbvals[i].b+ ")")



}


// var color
// for (var i = 0; i < 10; i++) {
//   // console.log(i*16.toString(16))
//   console.log((i*15).toString(16))
// }
