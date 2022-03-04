$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});

	$(window).on('scroll', function(e) {
		if($(this).scrollTop() > 0) {
			$('.header').addClass('is-fixed');
		} else {
			$('.header').removeClass('is-fixed');
		}
	});


	if ($('.js-characters-slider').length > 0) {

		$('.js-characters-slider').slick({
			// centerMode: true,
			// infinite: true,
			slidesToShow: 3,
			variableWidth: true,
			slidesToScroll: 3,
			dots: true,
			appendDots: $('.js-characters-slider-pagination'),
			prevArrow: $('.js-characters-slider-btn-prev'),
			nextArrow: $('.js-characters-slider-btn-next'),
		});

	

		
	}

	var animationBlocks = $('.opportunity').toArray();

	$(window).on('scroll', function() {

		var documentScroll = $(document).scrollTop();
		var scroll = $(this).scrollTop();
		var windowHeight = $(window).height();

		animationBlocks.forEach(function(item) {
			var itemOffset = $(item).offset().top;
			var itemHeight = $(item).outerHeight();
			var visibilityPoint = itemOffset - windowHeight;

			if (documentScroll > visibilityPoint) {
				$(item).addClass('is-animated');
			}

		});


	});


	setTimeout(function(){
		$('body').addClass('is-loaded');
	}, 1000);


});
