$(function(){
	'use strict'
	
	var slider = document.getElementById("slider");
	var slideShow = document.getElementsByClassName("slide-show");
	var slideCount = document.querySelectorAll(".slide-show > .single-slide").length;
	var slideWidth = 100/slideCount + "%";
	var slideIndex = 0;

	$(".slide-show").css("width", slideCount*100 +"%");
					   
	$(".slide-show").find(".single-slide").each(function(this.index){
		$(this).css({"margin-left":"parseInt(slideWidth)*index", "width": "slideWidth"})
	});
	
	
	$(".prev-slide").click(function(e){
		e.preventDefault();
		slide(-1);
	});
	
	$(".next-slide").click(function(e){
		e.preventDefault();
		slide(+1);
	});
	
	var currentSlideIndex = 0;
//	function slide ()
	
	
	var slideCaption =
	slideCaption.hide;
		
	var marginLeft = currentSlideIndex*-100+"%";
        $('.slide-show').animate({"margin-left": marginLeft}, 2000, callBack)
								 
		function callBack(){
          $('.slide-show')slideCaption.fadeIn(1000);
		}
			
} );