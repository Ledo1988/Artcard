$( document ).ready(function() {
	var mainSwiper = new Swiper('.main-swiper', {
		spaceBetween: 0,
		centeredSlides: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	});

	$('body .main-details-tabs').on('click', '.tab-link', function(){
		var tab_id = $(this).attr('data-tab');

		$('.main-details-tabs .tab-link').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	$('body .main-order-form').on('click', '.main-order-forward', function(){
		var stageCurrent = $(this).parents('.main-order-form').data('stage');
		if (stageCurrent < 5) {stageCurrent++;}

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

	$('body .main-order-form').on('click', '.main-order-back', function(){
		var stageCurrent = $(this).parents('.main-order-form').data('stage');
		if (stageCurrent > 1) {stageCurrent--;}
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
