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

	// ========= Smooth scrolling to the acnhors ===========
	$('.js-smooth-scroll-link').on('click', function (e) {
		e.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top - $('.header').outerHeight();

		if ($('.js-nav').hasClass('is-opened')) {
			$('.js-nav').removeClass('is-opened');
			$('html').removeClass('is-fixed');
			$('.js-open-mobile-menu-btn').removeClass('is-active');
		}

		$('html, body').animate({scrollTop: top}, 300);
	});	

	$('.js-open-mobile-menu-btn').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('is-active');
		$('.js-nav').toggleClass('is-opened');
		$('html').toggleClass('is-fixed');
	});

	$(window).on('scroll', function(e) {
		if($(this).scrollTop() > 0) {
			$('.header').addClass('is-fixed');
		} else {
			$('.header').removeClass('is-fixed');
		}
	});

	AOS.init({
		once: true,
		duration: 800
	});

	// Parallax

	function parallax(item){
		var scrolled = $(window).scrollTop();
		var speed = $(item).attr('data-parallax-speed');
		var direction = $(item).attr('data-parallax-direction');



		if(direction === 'horisontal-right') {
			$(item).css({
				'transform': 'translate3d(' + (scrolled*speed) + 'px' + ', 0, 0)',
				'-webkit-transform': 'translate3d(' + (scrolled*speed) + 'px' + ', 0, 0)',
				'-o-transform': 'translate3d(' + (scrolled*speed) + 'px' + ', 0, 0)',
				'-moz-transform': 'translate3d(' + (scrolled*speed) + 'px' + ', 0, 0)'
				
			});
		} else if(direction === 'horisontal-left') {
			$(item).css({
				'transform': 'translate3d(' + -(scrolled*speed) + 'px' + ', 0, 0)',
				'-webkit-transform': 'translate3d(' + -(scrolled*speed) + 'px' + ', 0, 0)',
				'-o-transform': 'translate3d(' + -(scrolled*speed) + 'px' + ', 0, 0)',
				'-moz-transform': 'translate3d(' + -(scrolled*speed) + 'px' + ', 0, 0)'
				
			});
		} else if(direction === 'vertical-top') {
			$(item).css({
				'transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)',
				'-moz-transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)',
				'-ms-transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)',
				'-o-transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)',
				'-webkit-transform': 'translate3d(0, ' + -(scrolled*speed)+'px' + ', 0)'
			});
		} else if(direction === 'vertical-bottom') {
			$(item).css({
				'transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)',
				'-moz-transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)',
				'-ms-transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)',
				'-o-transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)',
				'-webkit-transform': 'translate3d(0, ' + (scrolled*speed)+'px' + ', 0)'
			});
		}
		

	}


	$(window).on('scroll', function(e) {
		var scroll = $(this).scrollTop();

		$('.js-item-parallax').each(function() {
			
			parallax($(this));
			
		});

		
	});


	if ($('.js-characters-slider').length > 0) {

		$('.js-characters-slider').slick({
			slidesToShow: 3,
			variableWidth: true,
			slidesToScroll: 3,
			speed: 1000,
			// autoplay: true,
			// autoplaySpeed: 2000,
			dots: true,
			appendDots: $('.js-characters-slider-pagination'),
			prevArrow: $('.js-characters-slider-btn-prev'),
			nextArrow: $('.js-characters-slider-btn-next'),
			responsive: [
				{
					breakpoint: 620,
					settings: {
						centerMode: true,
					}
				}
			]
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

window.addEventListener('load', AOS.refresh);
