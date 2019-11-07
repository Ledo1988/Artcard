$(document).ready(function() {
	var mainSwiper = new Swiper('.main-swiper', {
		spaceBetween: 0,
		centeredSlides: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	});

	$('.date').mask('00.00.0000');
	$('.tel').mask('+7 (000) 000 - 00 - 00');
	$('.passport').mask('0000 000000');
	$('.code').mask('000 000');

	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});

	$('body .main-details-tabs').on('click', '.tab-link', function(){
		var tab_id = $(this).attr('data-tab');

		$('.main-details-tabs .tab-link').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	$('body .main-order-form .btn-wrapper').on('click', '.btn', function(){
		var stageCurrent = $(this).parents('.main-order-form').data('stage');

		if ($(this).hasClass('main-order-forward')) {
			if (stageCurrent < 5) {stageCurrent++;}
		} else if ($(this).hasClass('main-order-back')) {
			if (stageCurrent > 1) {stageCurrent--;}
		}

		$(this).parents('.main-order-form').data('stage', stageCurrent);

		$(this).parents('.main-order-form').find('.main-order-form-stage .current').html(stageCurrent);

		$(this).parents('.main-order-form').find('.main-order-form-item').removeClass('active');
		$(this).parents('.main-order-form').find(`[data-item='${stageCurrent}']`).addClass('active');

		if (stageCurrent == 1) {
			$('body .main-order-form').find('.main-order-back').addClass('inactive');
		} else {
			$('body .main-order-form').find('.main-order-back').removeClass('inactive');
		}
	});





});
