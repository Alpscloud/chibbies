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
		var charactersSlider = new Swiper('.js-characters-slider', {
			slidesPerView: 'auto',
			loop: true,
			speed: 700,
			centeredSlides: true,
			slidesPerGroup: 3,
			navigation: {
				nextEl: '.js-characters-slider-btn-next',
				prevEl: '.js-characters-slider-btn-prev',
			},
			pagination: {
				el: '.js-characters-slider-pagination',
				type: 'bullets',
				clickable: true
			},
		});
	}


});
