
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
var numColors = 15
var color

var colorLocator = []

var id

for (var i = 0; i < numColors; i++) {

  // designate id
  id = "i"+i

  // append to DOM the row, and colum for each color w/ corresponding id
  var alpha = $(".section").append("<div class=\"row\"><div class=\"col s12 m12 l12\" id=\"i" +i+"\"></div></div>")

  // call the increment rgb color function to change the values of r, g, and b
  incrementColor(5)
  // next plug those cahnged values into the background color of the div
  $("#i"+i).css("background-color", "rgb(" + r + "," + g + "," + b + ")")

  colorLocator.push({color:{r:r,g:g,b:b}, id:"#i"+i, off:$("#i"+i).offset()})
  // $("#i"+i).css("background-color", "rgb(" +rgbvals[i].r + "," +rgbvals[i].g+","+rgbvals[i].b+ ")")

  // var beta = $("body").append("<div id=\"z"+i+"\" class=\"control\" style=\"position:fixed; height:100px; width:100px; background-color:black; left:20px; top:20px;\"></div>")
  document.getElementById(id).addEventListener("click",function(){
    window.scrollTo(0,0)
    console.log('ayy')
  })
}

  var topval = 0
  for (var i = 0; i < numColors; i++) {
    id = "z"+i
    topval=i*110

    var beta = $("body").append("<div id=\"z" +i+"\" class=\"control\" style=\"position:fixed; height:100px; width:100px; background-color:rgb("+colorLocator[i].color.r + "," + colorLocator[i].color.g + "," + colorLocator[i].color.b + "); left:20px; top:"+topval+"px; margin:20px;\"></div>")
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
  console.log('que? : ', $("#z"+i))

  // call the add listener function to assign click event listners to each control element
  addlistener($("#z"+i), i, 10)
}
