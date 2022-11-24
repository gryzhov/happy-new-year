$(function () {

	$('.top-slider__inner').slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
	var mixer = mixitup('.product-filter__content', {
		load: {
			filter: '.all'
		},
	});
});
