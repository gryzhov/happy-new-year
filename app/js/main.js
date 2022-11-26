$(function () {

	$(".product__rateyo").rateYo({
		starWidth: "10px",
		readOnly: true,
		ratedFill: "gold",
		normalFill: "#d6d6d6",
	});
	$(".product__rateyo--column").rateYo({
		starWidth: "16px",
		readOnly: true,
		ratedFill: "gold",
		normalFill: "#d6d6d6",
	});


	$(".product__price-input").ionRangeSlider({
		prefix: "$",
		type: "double",

		onStart: function (data) {
			$('.product__price-from').text(data.from);
			$('.product__price-to').text(data.to);
		},
		onChange: function (data) {
			$('.product__price-from').text(data.from);
			$('.product__price-to').text(data.to);
		}
	});

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
