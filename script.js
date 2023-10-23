//https://html5css.ru/howto/howto_js_slideshow.php

//https://www.internet-technologies.ru/articles/polnoe-rukovodstvo-po-centrirovaniyu-div-elementa.html

var slideIndex = [1,1,1,1,1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2","mySlides3","mySlides4","mySlides5"]
setInterval(plusSlides,3000,1,0);
setInterval(plusSlides,3100,1,1);
setInterval(plusSlides,3200,1,2);
setInterval(plusSlides,3300,1,3);
setInterval(plusSlides,3400,1,4);
//showSlides(1, 0);
//showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  
  
  x[slideIndex[no]-1].style.display = "block";
  
 
 // showSlides(n+1,no);
}
