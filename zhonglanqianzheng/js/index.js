window.onload=function(){
	$("#mycarousel").carousel({
				interval:2000
			})
	
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
	
	var options = {
		        useEasing: true, //开启一个过渡动画
		        useGrouping: true, //开启千位分割
		        separator: ',',  //定义千位分隔符
		        decimal: '.',    //小数点分割
//		        prefix:"￥",  //前置符号
//		        suffix:"%"
		   }; 
		    var arr=new Array(
		    	// CountUp(参数一, 参数二, 参数三, 参数四, 参数五, 参数六)
				  // 参数一: 数字所在容器
				  // 参数二: 数字开始增长前的默认值(起始值),一般从 0 开始增长
				  // 参数三: 数字增长后的最终值,该值一般通过异步请求获取
				  // 参数四: 数字小数点后保留的位数
				  // 参数五: 数字增长特效的时间,此处为3秒
				  // 参数六: 其他配置项
				  // 注: 参数六也可不加,其配置项则为默认值
		    	new CountUp('item1', 0, 18397, 0, 3, options),
		    	new CountUp('item2', 0, 98.8, 1, 3, options),
		    	new CountUp('item3', 0, 3273, 0, 3, options),
		    	new CountUp('item4', 0, 100, 0, 3, options),
		    )
		    
		    var fn=function(){
		    	$(".item").each(function(){
//		    		console.log($(this).index('.item')) //0 1 2
		    		var index=$(this).index('.item')
		    		arr[index].start()
//		    		console.log($(this).parent().index()) //0 1 2
		    	})
				console.log($(".item"))
		    }
		    fn()

	     
	
	
}
