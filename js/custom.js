$(function(){
	'use strict'
	
	function animacjaTrzecia(){
		$("div").html("Gratulacje, animacja zakończona");
	}
	
	function animacjaDruga(){
		$("div").animate({"background-color":"blue"}, 5000, animacjaTrzecia);
	};
	
	
	$("button").click(function(){
		$("div").animate({"width":"100px", "height":"100px", "margin-left": "108px"},3000, animacjaDruga);
		
		
	});
	
	
} );