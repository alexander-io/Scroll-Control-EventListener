
$(document).ready(function(){
  console.log('hello')
})

// $("#i0").css("background-color", "black")

var div = $("#i0")

console.log(div)
for (var i = 0; i < 10; i++) {
  var div = $("#i"+i)
  // console.log($(".container"))
  var alpha = $(".section").append("<div class=\"row\"><div class=\"col s12 m12 l12\" id=\"i" +i+"\"></div></div>")
  // alpha.css("background-color", "grey")
  alpha.css("margin", "20px")
  alpha.css("border", "20px solid white")

}
