$(document).ready(function(){
	var slideIndex = 1;
	showDivs(slideIndex);
$(".carousel-indicators-wrapper .left").click(function(event){
        event.preventDefault();
        plusDivs(-1)
    });
$(".carousel-indicators-wrapper .right").click(function(event){
        event.preventDefault();
        plusDivs(1)
    });


function plusDivs(n) {
  showDivs(slideIndex += n);
}
	function showDivs(n) {
	  var i;
	  var x = document.getElementsByClassName("epics-testimonial-content");
	  if (n > x.length) {slideIndex = 1}    
	  if (n < 1) {slideIndex = x.length}
	  for (i = 0; i < x.length; i++) {
	     $(x[i]).removeClass('active');

	  }
	  $(x[slideIndex-1]).addClass('active');
	  console.log((x[i]),x[slideIndex-1])
	  // x[slideIndex-1].style.display = "block";  
	}
})