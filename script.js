
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
    r+=64
  } else if (g < 256){
    g+=64
  } else {
    b+=64
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
// var tuple
var colorLocator = []
var id
for (var i = 0; i < 15; i++) {
  // var div = $("#i"+i)
  id = "i"+i
  // console.log($(".container"))
  var alpha = $(".section").append("<div class=\"row\"><div class=\"col s12 m12 l12\" id=\"i" +i+"\"></div></div>")
  // console.log('scroll: '
  // var alpha = $(".row")
  // var alpha = div
  color = (i*50).toString(16)
  // console.log(color)
  // alpha.css("background-color", "#"+color)

  // $("#i"+i).css("background-color", "#"+color)
  incrementColor(5)

  $("#i"+i).css("background-color", "rgb(" + r + "," + g + "," + b + ")")
  colorLocator.push({color:{r:r,g:g,b:b}, id:"#i"+i})
  // $("#i"+i).css("background-color", "rgb(" +rgbvals[i].r + "," +rgbvals[i].g+","+rgbvals[i].b+ ")")
  console.log(i)

  document.getElementById(id).addEventListener("click",function(){console.log('hello')})




}

console.log(colorLocator)
// console.log(document.getElementById('i6').scrollTop)
// console.log(document.getElementById('i6'))
// var top  = document.getElementById('i6').scrollY
// console.log(document.getElementById('i6').scrollTop.scrollY)

console.log($("#i6"))
// var el = document.getElementById('i7');
//
// // get scroll position in px
// console.log(el.scrollLeft, el.scrollTop);
// console.log(document.getElementById('i6'))
// console.log($("#i6").scroll())

// var color
// for (var i = 0; i < 10; i++) {
//   // console.log(i*16.toString(16))
//   console.log((i*15).toString(16))
// }
