$(window).on('scroll', _.throttle(lfparallax, 50));
$(window).on('scroll', _.throttle(lfscan, 200));
$(function(){
	$(".lf-fade-left-title").each(function(){
		if($(this).css('opacity')==0){
			$(this).animate({
				opacity:1,
				left:"-=1rem"
			},400);
		}
	})
});
function lfparallax(){
		var scrollTop = $(window).scrollTop()
		if(scrollTop > $("#title").height()){
			$("#title").css("background-color",'rgb(255,255,255)')
			$("#title").css("color",'black')
		} else {
			$("#title").css("background-color",'transparent')
			$("#title").css("color",'white')
		}
		$("#win1").css("background-position", "0px "+scrollTop*0.20+"px")
		$("#win1txt").css("top", scrollTop*0.20+'px')
		$("#win2").css("background-position", "0px "+(scrollTop-($("#win2").height()))*0.20+"px")
		$("#win2txt").css("top", scrollTop*0.20+'px')
		$("#diaryPen").css("top", (0-scrollTop+($("#win2").height()))*0.40+'px')
}
function lfscan(){
	var windowBottom = $(this).scrollTop()+$(this).innerHeight();
	$(".lf-fade-left").each(function(){
		var objBottom = $(this).offset().top + $(this).outerHeight();
		if(objBottom<windowBottom){
			if($(this).css('opacity')==0){
				$(this).animate({
					opacity:1,
					paddingLeft:"-=1rem"
				},400);
			}
		 }
	});
	$(".lf-fade-top").each(function(){
		var objBottom = $(this).offset().top + $(this).outerHeight();
		if(objBottom<windowBottom){
			if($(this).css('opacity')==0){
				$(this).animate({
					opacity:1,
					paddingTop:"-=1rem"
				},400);
			}
		 }
	})
}

// else {
//  	if($(this).css('opacity')==1){$(this).fadeTo(400,0);}
// }