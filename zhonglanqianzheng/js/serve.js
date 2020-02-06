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
	
	var serveData=[{
		id:"1",
		src:"image/liucheng.png",
		title:"美国签证加急预约",
		title1:"受理范围: 全国受理",
		title2:"入境次数: 多次往返",
		title3:"有效期限: 十年有效",
		title4:"停留期限: 海关决定",
		title5:"是否邮寄: 无需邮寄",
		title6:"办理难度: ★★★★★",
		title7:"能否加急: 可加急办理",
	},{
		id:"2",
		src:"image/liucheng.png",
		title:"代填美国签证DS160主申请表",
		title1:"受理范围: 全国受理",
		title2:"入境次数: 根据类型",
		title3:"有效期限: 根据类型",
		title4:"停留期限: 海关决定",
		title5:"是否邮寄: 无需邮寄",
		title6:"办理难度: ",
		title7:"能否加急: 可以加急",
		title8:"查看详情",
	},{
		id:"3",
		src:"image/liucheng.png",
		title:"代缴美国签证费",
		title1:"受理范围: 全国受理",
		title2:"入境次数: 不适用",
		title3:"有效期限: 不适用",
		title4:"停留期限: 不适用",
		title5:"是否邮寄: 无需邮寄",
		title6:"办理难度: ",
		title7:"能否加急: 可以加急",
		title8:"查看详情",
		
	},{
		id:"4",
		src:"image/zhoubian.png",
		title:"美国签证EVUS登记",
		title1:"受理范围: 全国受理",
		title2:" 入境次数: 多次往返",
		title3:"有效期限: 两年有效",
		title4:" 停留期限: 海关决定",
		title5:"是否邮寄: 无需邮寄",
		title6:"办理难度: ",
		title7:"能否加急: 可以加急",
		title8:"查看详情",
	},{
		id:"5",
		src:"image/zhoubian.png",
		title:"代缴美国签证SEVIS费",
		title1:"受理范围: 全国受理",
		title2:" 入境次数: 多次往返",
		title3:"有效期限: 使馆批复",
		title4:" 停留期限: 海关决定",
		title5:"是否邮寄: 无需邮寄",
		title6:"办理难度: ",
		title7:"能否加急: 可以加急",
		title8:"查看详情",
	},{
		id:"6",
		src:"image/quancheng.png",
		title:"美国十年旅游签证",
		title1:"受理范围: 全国受理",
		title2:" 入境次数: 多次往返",
		title3:"有效期限: 十年有效",
		title4:" 停留期限: 海关决定",
		title5:"是否邮寄: 无需邮寄",
		title6:"办理难度: ",
		title7:"能否加急: 可以加急",
		title8:"查看详情",
	},{
		id:"7",
		src:"image/quancheng.png",
		title:"美国十年探亲签证",
		title1:"受理范围: 全国受理",
		title2:" 入境次数: 多次往返",
		title3:"有效期限: 十年有效",
		title4:" 停留期限: 海关决定",
		title5:"是否邮寄: 无需邮寄",
		title6:"办理难度: ",
		title7:"能否加急: 可以加急",
		title8:"查看详情",
	},{
		id:"8",
		src:"image/quancheng.png",
		title:"美国F1留学签证",
		title1:"受理范围: 全国受理",
		title2:" 入境次数: 多次往返",
		title3:"有效期限: 使馆决定",
		title4:" 停留期限: 海关决定",
		title5:"是否邮寄: 无需邮寄",
		title6:"办理难度: ",
		title7:"能否加急: 可以加急",
		title8:"查看详情",
	},{
		id:"9",
		src:"image/quancheng.png",
		title:"美国J1交流访问签证",
		title1:"受理范围: 全国受理",
		title2:" 入境次数: 多次往返",
		title3:"有效期限: 使馆决定",
		title4:" 停留期限: 海关决定",
		title5:"是否邮寄: 无需邮寄",
		title6:"办理难度: ",
		title7:"能否加急: 可以加急",
		title8:"查看详情",
	},{
		id:"10",
		src:"image/quancheng.png",
		title:"美国C1过境签证",
		title1:"受理范围: 全国受理",
		title2:" 入境次数: 多次往返",
		title3:"有效期限: 五年有效",
		title4:" 停留期限: 海关决定",
		title5:"是否邮寄: 无需邮寄",
		title6:"办理难度: ",
		title7:"能否加急: 可以加急",
		title8:"查看详情",
	},{
		id:"11",
		src:"image/quancheng.png",
		title:"美国L1工作签证",
		title1:"受理范围: 全国受理",
		title2:" 入境次数: 多次往返",
		title3:"有效期限: 签证官批 ",
		title4:" 停留期限: 海关决定",
		title5:"是否邮寄: 无需邮寄",
		title6:"办理难度: ",
		title7:"能否加急: 可以加急",
		title8:"查看详情",
	},{
		id:"12",
		src:"image/quancheng.png",
		title:"美国免面签代传递",
		title1:"受理范围: 全国受理",
		title2:" 入境次数: 多次往返",
		title3:"有效期限: 十年有效",
		title4:" 停留期限: 海关决定",
		title5:"是否邮寄: 无需邮寄",
		title6:"办理难度: ",
		title7:"能否加急: 可以加急",
		title8:"查看详情",
	},{
		id:"13",
		src:"image/quancheng.png",
		title:"美国十年旅游签证",
		title1:"受理范围: 全国受理",
		title2:" 入境次数: 多次往返",
		title3:"有效期限: 十年有效",
		title4:" 停留期限: 海关决定",
		title5:"是否邮寄: 无需邮寄",
		title6:"办理难度: ",
		title7:"能否加急: 可以加急",
		title8:"查看详情",
	}]
	var haha="";
	var oserverItem=document.getElementById("server-item");
	for(i=0;i<serveData.length;i++){
		haha+='<dd class="liucheng"><h3 class="h3">'+serveData[i].title+'</h3></dd>';
		oserverItem.innerHTML=haha
		$("<span>"+serveData[i].title1+"</span>").appendTo(".liucheng");
		$("<span>"+serveData[i].title2+"</span>").appendTo(".liucheng");
		$("<span>"+serveData[i].title3+"</span>").appendTo(".liucheng");
		$("<span>"+serveData[i].title4+"</span>").appendTo(".liucheng");
		$("<span>"+serveData[i].title5+"</span>").appendTo(".liucheng");
		$('<p class="p3">'+serveData[i].title6+"</p>").appendTo(".liucheng");
		$("<i class='xing1'>★★★★</i>").appendTo(".p3");
		$("<i class='xing2'>★</i>").appendTo(".p3");
		$('<p class="p2">'+serveData[i].title7+"</p>").appendTo(".liucheng");
		$('<button class="btn btn-default pull-right">'+serveData[i].title8+"</button>").appendTo(".p2");
	}
	for(j=0;j<serveData.length-10;j++){
		
		$(".liucheng").eq(j).css({
			background:'url("image/liucheng.png") no-repeat',
		})
	}
//	console.log($(".liucheng").eq(5));
	for(j=3;j<serveData.length-8;j++){
		$(".liucheng").eq(j).css({
			background:'url("image/zhoubian.png") no-repeat',
		})
	}
	for(j=5;j<serveData.length;j++){
		$(".liucheng").eq(j).css({
			background:'url("image/quancheng.png") no-repeat',
		})
	}
	
	
	$(window).scroll(function(){
		var winscroll=$(window).scrollTop();
		var servercententlefthe=$("#server-centent-left").height();
		var re=servercententlefthe-winscroll;
		console.log(servercententlefthe);
		console.log(winscroll);
		console.log(re);
		if(winscroll>85){
			$("#server-centent-right").css({
                    position:"fixed",
                    height:re,
                    top:"90px",
                    width:" 235px",
			})
			
		}else{
				$("#server-centent-right").css({
	                    position:"relative",
	                    top:0,
	                    height:re,
	                    zIndex:-1,
				})
			}   
	})
	
	
	
}
