$(function () {


	$('.related__content').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		infinite: true,
		speed: 500,
		cssEase: 'linear'
	});


	$('.product-slide__thumb').slick({
		asNavFor: '.product-slide__big',
		focusOnSelect: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical: true,
		draggable: false,
	});
	$('.product-slide__big').slick({
		asNavFor: '.product-slide__thumb',
		infinite: true,
		speed: 500,
		fade: true,
		arrows: false,
		cssEase: 'linear',
		draggable: false,
	});


	$(".product__rateyo").rateYo({
		starWidth: "15px",
		readOnly: true,
		ratedFill: "gold",
		normalFill: "#d6d6d6",
	});
	$(".product__rateyo--column").rateYo({
		starWidth: "21px",
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
