var firstP = document.getElementById ("firstP");
var secondP = document.getElementById("secondP");
var thirdP = document.getElementById("thirdP");
var fourthP = document.getElementById("fourthP");

firstP.addEventListener("click", function() {
  firstP.innerHTML = "oops!";
 
});

secondP.addEventListener("mousemove", function() {
  secondP.innerHTML = 'Thank you!';
});

thirdP.addEventListener("mousedown", function() {
  thirdP.innerHTML = 'Release Me!';

});
fourthP.addEventListener("mouseover", function() {
  fourthP.innerHTML = 'Take the Mouse Out!';

});
