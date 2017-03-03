$(function(){
	'use strict'
	
	var slider = document.getElementById("slider");
	var slideShow = document.getElementsByClassName("slide-show");
	var slideCount = document.querySelectorAll(".slide-show > .single-slide").length;
	var slideWidth = 100/slideCount + "%";
	var slideIndex = 0;
	var currentSlideIndex = 0  ;

$(".slide-show").css("width", slideCount*100 +"%");
					   
$(".slide-show").find(".single-slide").each(function(index){
	$(this).css({"margin-left":parseInt(slideWidth)*index+'%', "width": "slideWidth"})
	});
	
	
$(".prev-slide").click(function(e){
	e.preventDefault();
	slide(currentSlideIndex-1);
	currentSlideIndex--;
});
	
$(".next-slide").click(function(e){
		e.preventDefault();
		slide(currentSlideIndex+1);
		currentSlideIndex++;
});
	
	
function slide(newSlideIndex){
	if(newSlideIndex < 0 || newSlideIndex > slideCount) return;
	
	var slideCaption = $('.slider-caption')[newSlideIndex].innerHTML;
		slideCaption.hide;
		
	var marginLeft = (newSlideIndex*(-100))+"%";
        
	$('.slide-show').animate({"margin-left": marginLeft}, 2000, callBack)
								 
	function callBack(){
    $('.slide-show').fadeIn(1000);
	}
}
	
			
});