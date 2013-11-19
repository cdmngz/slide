$(function() {
	var sliderAct = 1;
	var sliderNext = 2;
	var target;
	var chi;

	$("#slider > div#slide1").css('display','block');
	startSlider();

	function startSlider(){
		count = $("#slider > div").size();

		loop = setInterval(function(){
			if(sliderNext > count) {
				sliderNext=1;
				sliderAct=1;
			};
			$("#slider > div").fadeOut(300);
			$("#slider > div#slide" + sliderNext).fadeIn(300);

			sliderAct = sliderNext;
			sliderNext = sliderNext+1;
			chi = null;
			target = null;
			
		}, 500);
	};

	function stopSlider(){
		window.clearInterval(loop);
	}

	$("#slider").hover(function(){ stopSlider(); }, function(){ startSlider(); });
	
	$( ".circle" ).click(function(){
        chi = $(this).index();
		chi = chi-2;
        if(this != target && chi != sliderAct) {
        	target = this;
			sliderAct = chi;
			sliderNext = chi+1;
			$("#slider > div").fadeOut(300);	
			$("#slider > div#slide" + chi).fadeIn(300);
		}
	});
});