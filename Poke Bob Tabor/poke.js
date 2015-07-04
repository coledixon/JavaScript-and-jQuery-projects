$(function() {
	
	$('#success').hide();
	$('#startover').addClass('hoverOut');
	var score = 0;
	
	$('#bobhead').click(function() {
		
		score++;
		$('#score').text(score);
		$('#success').fadeIn(1000).fadeOut(1000);
		
		
	});
	
	$('#startover').hover(function() {
		
		score = 0;
		$('#score').text(score);
		$('#startover').addClass('hoverIn').removeCLass('hoverOut');
		
	}, function () {
		
		$('#startover').removeClass('hoverIn').addClass('hoverOut');
			
	   });		
	
});