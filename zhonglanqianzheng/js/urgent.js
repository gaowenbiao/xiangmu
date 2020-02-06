window.onload=function(){
	
	$(window).scroll(function(){
	     	var winscroll=$(window).scrollTop();
//	     	console.log(winscroll);
	     	if(winscroll<200){
	     		$("#jiantou").css("display","none");
	     	}else if(winscroll>=200){
	     		$("#jiantou").css("display","block")
	     	}
	     	
	     	
	     })
	$("#jiantou").click(function(){
	     		$("body,html").animate({
	     			"scrollTop":0
	     		})
	     	})
	
	
//	定位留言
	var num=1;
	$("#message-btn").click(function(){
		if(num==1){
			$(".message").css({
				"position": "fixed",
				"left":"1px",
				"bottom":"-435px"
			})
			$("#head-line").css("display","none");
			$("#head-diamonds").css("display","block");
			num=2
		}else if(num==2){
			$(".message").css({
			"position": "fixed",
			"left":"1px",
			"bottom":"0px"
			})
			$("#head-line").css("display","block");
			$("#head-diamonds").css("display","none");
			num=1
		}
	})
	
	
	
	
}
