$("#footer__subs-form").submit(function(){
	$.ajax({
		type: 'POST',
		url: '../email.php',
		data: $(this).serialize()
	}).done(function(data){
		if(data == "successful"){
			console.log("successful");
		}else if(data == "unsuccessfully"){
			console.log("unsuccessfully");
		}else{

		}
	});
	return false;
})

$('#feedback__form-send').submit(function(){
	$.ajax({
		type: 'POST',
		url: '../handler.php',
		data: $(this).serialize()
	}).done(function(data){
		if(data=="name")
		{
			$("#feedback__name").addClass("red-border")
			$("#feedback__email").removeClass("red-border")
			$("#feedback__phone").removeClass("red-border")
			$("#feedback__message").removeClass("red-border")
		}
		if(data=="email")
		{
			$("#feedback__email").addClass("red-border")
			$("#feedback__name").removeClass("red-border")
			$("#feedback__phone").removeClass("red-border")
			$("#feedback__message").removeClass("red-border")
		}
		if(data=="phone")
		{
			$("#feedback__phone").addClass("red-border")
			$("#feedback__email").removeClass("red-border")
			$("#feedback__name").removeClass("red-border")
			$("#feedback__message").removeClass("red-border")
		}
		if(data=="message")
		{
			$("#feedback__message").addClass("red-border")
			$("#feedback__phone").removeClass("red-border")
			$("#feedback__email").removeClass("red-border")
			$("#feedback__name").removeClass("red-border")
		}
		if(data=="all-empty")
		{
			$("#feedback__name").addClass("red-border")
			$("#feedback__email").addClass("red-border")
			$("#feedback__phone").addClass("red-border")
			$("#feedback__message").addClass("red-border")
			$("#feedback__name").removeClass("short")
			$("#feedback__email").removeClass("short")
			$("#feedback__phone").removeClass("short")
			$("#feedback__message").removeClass("short")
		}
		if(data=="none-empty+none-error")
		{
			$("#feedback__message").removeClass("red-border")
			$("#feedback__phone").removeClass("red-border")
			$("#feedback__email").removeClass("red-border")
			$("#feedback__name").removeClass("red-border")
			$("#feedback__name").removeClass("short")
			$("#feedback__email").removeClass("short")
			$("#feedback__phone").removeClass("short")
			$("#feedback__message").removeClass("short")
			$("#feedback__name").val("")
			$("#feedback__email").val("")
			$("#feedback__phone").val("")
			$("#feedback__message").val("")
			console.log("Sent");
		}
		if(data=="none-empty+name-error")
		{
			$("#feedback__name").attr("placeholder", "This name is too short")
			$("#feedback__name").val("")
			$("#feedback__name").addClass("red-border")
			$("#feedback__name").addClass("short")
			$("#feedback__email").removeClass("short")
			$("#feedback__phone").removeClass("short")
			$("#feedback__message").removeClass("short")
			$("#feedback__email").removeClass("red-border")
			$("#feedback__phone").removeClass("red-border")
			$("#feedback__message").removeClass("red-border")
		}
		if(data=="none-empty+email-error")
		{
			$("#feedback__email").attr("placeholder", "Oh! The e-mail is incorrect")
			$("#feedback__email").val("")
			$("#feedback__email").addClass("red-border")
			$("#feedback__email").addClass("short")
			$("#feedback__name").removeClass("short")
			$("#feedback__phone").removeClass("short")
			$("#feedback__message").removeClass("short")
			$("#feedback__name").removeClass("red-border")
			$("#feedback__phone").removeClass("red-border")
			$("#feedback__message").removeClass("red-border")
		}
		if(data=="none-empty+phone-error")
		{
			$("#feedback__phone").attr("placeholder", "Oh! The mobile phone is incorrect")
			$("#feedback__phone").val("")
			$("#feedback__phone").addClass("red-border")
			$("#feedback__phone").addClass("short")
			$("#feedback__email").removeClass("short")
			$("#feedback__name").removeClass("short")
			$("#feedback__message").removeClass("short")
			$("#feedback__email").removeClass("red-border")
			$("#feedback__name").removeClass("red-border")
			$("#feedback__message").removeClass("red-border")
		}
		if(data=="none-empty+message-error")
		{
			$("#feedback__message").attr("placeholder", "Message is too short")
			$("#feedback__message").val("")
			$("#feedback__message").addClass("red-border")
			$("#feedback__message").addClass("short")
			$("#feedback__phone").removeClass("short")
			$("#feedback__email").removeClass("short")
			$("#feedback__name").removeClass("short")
			$("#feedback__phone").removeClass("red-border")
			$("#feedback__email").removeClass("red-border")
			$("#feedback__name").removeClass("red-border")
		}
		});
			return false;
})

$('.nav_trigger').on('click', function(){
	$('.nav__menu').toggleClass('nav__menu-active')
	$('.fixed-hamb-menu').toggleClass('hamb-active')
	$('body').toggleClass('ovh_body')

})
$('.fixed-toggle').on('click', function(){
	$('.nav__menu').toggleClass('nav__menu-active')
	$('.fixed-hamb-menu').toggleClass('hamb-active')
	$('body').toggleClass('ovh_body')
})


  $("body.ishome .section-testimonials .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 800,
    smartSpeed: 1000,
    navText: '',
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
        autoplay: true,
        autoplayTimeout: 5000
      },
      1000: {
        items: 3,
        touchDrag: true,
      }
    }
})
$("body.feedback-page .section-testimonials .owl-carousel").owlCarousel({
	loop: true,
	nav: false,
	dots: true,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplaySpeed: 800,
	smartSpeed: 1000,
	navText: '',
	responsive: {
		0: {
			items: 1,
		},
		700: {
			items: 2,
			autoplay: true,
			autoplayTimeout: 5000
		},
		1000: {
			items: 3,
			touchDrag: true,
		}
	}
})
$(".last-articles-slider .owl-carousel").owlCarousel({
    nav: true,
    dots: true,
    smartSpeed: 600,
    navText: '',
		items: 1,
    responsive: {
      0:{
        items: 1
      },
      560: {
  			items: 2
      },
      870: {
        items: 3
      },
      1200: {
        items: 4,
        touchDrag: true,
      },
      1700: {
  			items: 5,
      }
    }
})
$('.fixed-hamb-menu a[href^="#"]').click(function () {
	elementClick = $(this).attr("href");
	destination = $(elementClick).offset().top;
	$('body').animate( { scrollTop: destination }, 1300 );
	$('html').animate( { scrollTop: destination }, 1300 );
	$('.nav__menu').toggleClass('nav__menu-active')
	$('.fixed-hamb-menu').toggleClass('hamb-active')
	$('body').toggleClass('ovh_body')
	return false;
});
