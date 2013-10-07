$(function(){
	var sliderAct=1;
	var sliderNext=2;

	$("#slider > div#slide1").fadeIn(300);
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
		}, 2000);
	};

	function stopSlider(){
		window.clearInterval(loop);
	}

	$("#slider").hover(function(){ stopSlider(); }, function(){ startSlider(); });
	
	$( ".circle" ).click(function(){
        var chi = $(this).index();
        var chi = chi -2;
		$("#slider > div").fadeOut(300);	
		$("#slider > div#slide" + chi).fadeIn(300);
	});

});