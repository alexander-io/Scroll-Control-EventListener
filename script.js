
$(document).ready(function(){
  console.log('hello')
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
  console.log(r)
}
console.log(div)
var color
for (var i = 0; i < 100; i++) {
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
  // $("#i"+i).css("background-color", "rgb(255, 255, 0)")



}


// var color
// for (var i = 0; i < 10; i++) {
//   // console.log(i*16.toString(16))
//   console.log((i*15).toString(16))
// }
