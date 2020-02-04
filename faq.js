$(".question").on('click',function(){
	$(this).children('.answer').slideToggle();
	$('.fa-angle-up',this).toggleClass('hideFont');
	$('.fa-angle-down',this).toggleClass('hideFont');
	// if(!$('.question').children('.answer').hasClass('hide')){
		
	// }
})

// function isOpen(question){
// 	if($(question).hasClass('hide'))
// 	{
// 		return true;
// 	}
// 	else
// 	{
// 		return false;
// 	}
// }