$(document).ready(function() {

	$('.header_burger').click(function(event) {
		$('.header_burger, .nav').toggleClass('active');
		$('.body').toggleClass('lock');

	});

	$('.nav_link').click(function(event) {
		$('.header_burger, .nav').removeClass('active');
		$('.body').removeClass('lock');

	});

});
