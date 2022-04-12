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
	var roadmap = $('.js-roadmap-step').toArray();

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

		// roadmap.forEach(function(item) {
		// 	var itemOffset = $(item).offset().top;
		// 	var itemHeight = $(item).outerHeight();
		// 	var visibilityPoint = itemOffset + 150 - windowHeight;

		// 	if (documentScroll > visibilityPoint) {
		// 		$(item).removeClass('is-disabled');
		// 	}

		// });


	});


	gsap.registerPlugin(ScrollTrigger);

	TweenLite.defaultEase = Power0.easeNone;

	//var lines = gsap.utils.toArray('.program-progress__line');

	$('.js-roadmap-step').each(function(e) {
		var tl = gsap.timeline({
			scrollTrigger: {
				trigger: $(this),
				start: 'top 300px',
				end: 'bottom top',
				scrub: true,
				addClass: 'is-disabled',
				markers: true
		
			}
		});

	});


	// var roadmap = $('.js-roadmap-step').toArray();

	// if (roadmap.length > 0) {
	// 	var  observer = new IntersectionObserver(function (entries, observer) {
	// 		entries.forEach(function(entry) {
	// 			if (entry.isIntersecting) {
	// 				console.log(entry);
	// 				entry.target.classList.remove('is-disabled')
	// 			} 
	// 		});
	// 	});

	// 	roadmap.forEach(function(item) {
	// 		observer.observe(item);
	// 	})


	// }


	// var tl_1 = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: '.roadmap-wrapper',
	// 		start: 'top 100px',
	// 		end: 'bottom top',
	// 		scrub: true,
	// 		markers: true
			
	// 	}
	// });

	// tl_1.to($('.roadmap-indicator__line') , 1, {
	// 	height: '150%'
	// });


	// var tl_1 = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: '.js-program-step-1',
	// 		start: 'top top',
	// 		end: 'bottom top',
	// 		scrub: true,
	// 		toggleClass: 'is-active',
	// 		markers: false
			
	// 	}
	// });

	// var tl_2 = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: '.js-program-step-2',
	// 		start: 'top 20px top',
	// 		end: 'bottom top',
	// 		scrub: true,
	// 		toggleClass: 'is-active',
	// 		markers: false
			
	// 	}
	// });

	// var tl_3 = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: '.js-program-step-3',
	// 		start: 'top 20px top',
	// 		end: 'bottom top',
	// 		scrub: true,
	// 		toggleClass: 'is-active',
	// 		markers: false
			
	// 	}
	// });


	setTimeout(function(){
		$('body').addClass('is-loaded');
	}, 1000);


});

window.addEventListener('load', AOS.refresh);
