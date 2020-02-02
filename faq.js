$(".question").on('click',function(){
	$(this).children('.answer').slideToggle();
	$('.fa-angle-up',this).toggleClass('hideFont');
	$('.fa-angle-down',this).toggleClass('hideFont');
})