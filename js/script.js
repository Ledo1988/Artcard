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


	})
});
