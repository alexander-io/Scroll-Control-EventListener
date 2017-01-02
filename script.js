
$(document).ready(function(){})
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
var numColors = 35
var color

// color locator array to hold data corresponding to
// the relationship between the horizontal divs, control
// elements, and their scrollTop/offset position
var colorLocator = []

var id
var frequency = .3;
var amplitude = 127;
var center = 128;
var step
for (var i = 0; i < numColors; i++) {

  // designate id
  id = "i"+i
  step=i*15
  // append to DOM the row, and colum for each color w/ corresponding id
  var alpha = $(".section").append("<div class=\"row\"><div class=\"col s12 m12 l12\" id=\"i" +i+"\"></div></div>")

  v = Math.sin(frequency*i) * amplitude + center;
  //
  console.log('rgb to color result : ', RGB2Color(v,v+step,v+step+50))

  // call the increment rgb color function to change the values of r, g, and b
  incrementColor(5)
  // next plug those cahnged values into the background color of the div
  // $("#i"+i).css("background-color", "rgb(" + r + "," + g + "," + b + ")")
  $("#i"+i).css("background-color", RGB2Color(v,v+step,v+step+50))
  $("#i"+i).css("padding", "0px")


  colorLocator.push({color:{r:r,g:g,b:b}, id:"#i"+i, off:$("#i"+i).offset()})
  // $("#i"+i).css("background-color", "rgb(" +rgbvals[i].r + "," +rgbvals[i].g+","+rgbvals[i].b+ ")")

  // var beta = $("body").append("<div id=\"z"+i+"\" class=\"control\" style=\"position:fixed; height:100px; width:100px; background-color:black; left:20px; top:20px;\"></div>")
  document.getElementById(id).addEventListener("click",function(){
    window.scrollTo(0,0)
    console.log('ayy')
  })
}

console.log('window height : ', $(window).height())
// the topval variable is used to track the position of the horizontal div's y axis
var topval = 0
// this loop is used to append the fixed position controls to the left of the screen
for (var i = 0; i < numColors; i++) {
  // create a unique id based on the i value to assign each elem
  id = "z"+i
  // multiply the iterator by 110, currently 10px greater than the horizontal-div's height
  // topval=i*110

  // $(window).height()/numColors
  var boxheight = $(window).height()/numColors
  topval = (i*boxheight)
  // console.log('top val : ', topval)

  // append to the body the fixed position control divs
  var beta = $("body").append("<div id=\"z" +i+"\" class=\"control\" style=\"position:fixed; height:"+boxheight+"px; width:100px; background-color:rgb("+colorLocator[i].color.r + "," + colorLocator[i].color.g + "," + colorLocator[i].color.b + "); left:20px; top:"+topval+"px; margin:15px;\"></div>")
}

// add event listener to each controll elemnt to scrollTo the appropriate area on page
var addlistener = function(elem,i,top){

  // assign click event listener to each elem
  elem.click(function(){
    // for each click event call the scrollTo functio to navigate to the appopriate colorLocator Y value offset from top
    window.scrollTo(1000,colorLocator[i].off.top)
  })
}

// loop through the controller and add event listeners to each element in the dom
for (var i = 0; i < numColors; i++) {
  // assign a temporary id variable to store the id value of the control elements
  id = "z"+i
  // console.log('que? : ', $("#z"+i))

  // call the add listener function to assign click event listners to each control element
  addlistener($("#z"+i), i, 10)
}

// console.log('first elem height : ', $("#i0").height())

// console.log('first elem width : ', $("#i0").width())

// console.log('div 10 : ', $("#i0").width()/16)


$("body").append('<span id=\"token\"style=\"margin:0px;visibility:hidden;\">' + '<font>&#9608;</font>' + '</span>')
var uniWidth = $("#token").width()
// thanks to http://krazydad.com/tutorials/makecolors.php
//   // SINE WAVE OSCILATION FORMULA :
//   // value = Math.sin(frequency*increment)*amplitude + center;
var generatePattern = function(step){
  var frequency = .3;
  var amplitude = 127;
  var center = 128;

  // for each unicode character in the row, calculate a sine value, translate it to rgb, assign it to unicode character, and append it to the 0th element
  for (var i = 0; i < $("#i0").width()/uniWidth; ++i)
  {
    // determine sinValue
    v = Math.sin(frequency*i) * amplitude + center;

    // Note that &#9608; is a unicode character that makes a solid block
    // Note we're incrementing the green and blue values by a constant (r, g+const, b+(const*2))
    // to the 0th elem, append the color pattern
    $("#i0").append('<span style=\"margin:0px;\">' + '<font color="' + RGB2Color(v,v+step,v+step+50) + '">&#9608;</font>' + '</span>')
  }
  // apply a br at the end of each row
  $("#i0").append('<br>')
}

// determine the number of rows and call the generate pattern for each row
var numRows = 18;
for (var i = 0; i < numRows; i++) {
  generatePattern(i*15)
}

// thanks to http://krazydad.com/tutorials/makecolors.php
function byte2Hex(n)
{
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}
function RGB2Color(r,g,b)
{
  return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}
