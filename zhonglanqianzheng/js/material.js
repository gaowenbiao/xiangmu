$((function(){
	
	
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

	var informationData=[{
		id:"1",
		src:"image/doc.png",
		title:"美国签证信息采集表",
		time:"上传时间: 2017-05-01",
		content:"用于采集申请人基本信息, 用于填写DS160主申请表 请务必详细准确填写",
		title4:"文件大小: 234 KB",
		title5:"上传作者: 中岚签证",
		title6:"免费下载",
	},{
		id:"2",
		src:"image/doc.png",
		title:"EVUS登记信息采集表",
		time:"上传时间: 2017-05-01",
		content:"EVUS登记信息采集表",
		title4:"文件大小: 190 KB",
		title5:"上传作者: 中岚签证",
		title6:"免费下载",
	},{
		id:"3",
		src:"image/pdf.png",
		title:"美国签证护照领取委托书",
		time:"上传时间: 2017-05-01",
		content:"美国签证护照领取委托书",
		title4:"文件大小: 120 KB",
		title5:"上传作者: 中岚签证",
		title6:"免费下载",
	},{
		id:"4",
		src:"image/pdf.png",
		title:"EVUS登记信息采集表",
		time:"上传时间: 2017-05-01",
		content:"EVUS登记信息采集表",
		title4:"文件大小: 190 KB",
		title5:"上传作者: 中岚签证",
		title6:"免费下载",
	},{
		id:"5",
		src:"image/pdf.png",
		title:"美国签证个人简历标准样本",
		time:" 上传时间: 2017-05-01",
		content:"美国签证个人简历标准样本",
		title4:"文件大小: 229 KB",
		title5:"上传作者: 中岚签证",
		title6:"免费下载",
	},{
		id:"6",
		src:"image/doc.png",
		title:"EVUS登记信息采集表",
		time:"上传时间: 2017-05-01",
		content:"EVUS登记信息采集表",
		title4:"文件大小: 190 KB",
		title5:"上传作者: 中岚签证",
		title6:"免费下载",
	},{
		id:"7",
		src:"image/doc.png",
		title:"EVUS登记信息采集表",
		time:"上传时间: 2017-05-01",
		content:"EVUS登记信息采集表",
		title4:"文件大小: 190 KB",
		title5:"上传作者: 中岚签证",
		title6:"免费下载",
	},{
		id:"8",
		src:"image/doc.png",
		title:"EVUS登记信息采集表",
		time:"上传时间: 2017-05-01",
		content:"EVUS登记信息采集表",
		title4:"文件大小: 190 KB",
		title5:"上传作者: 中岚签证",
		title6:"免费下载",
	},{
		id:"9",
		src:"image/doc.png",
		title:"EVUS登记信息采集表",
		time:"上传时间: 2017-05-01",
		content:"EVUS登记信息采集表",
		title4:"文件大小: 190 KB",
		title5:"上传作者: 中岚签证",
		title6:"免费下载",
	},{
		id:"10",
		src:"image/pdf.png",
		title:"EVUS登记信息采集表",
		time:"上传时间: 2017-05-01",
		content:"EVUS登记信息采集表",
		title4:"文件大小: 190 KB",
		title5:"上传作者: 中岚签证",
		title6:"免费下载",
	}]

	var infocententleft=document.getElementById("server-centent-left");
	console.log(infocententleft);
	for(i=0;i<informationData.length;i++){
		var infodata=$('<div class="media"></div>');
		var infodata1=$('<div class="media-left"><img src='+informationData[i].src+'></img></div>')
		var infodata2=$('<div class="media-body"><h4>'+informationData[i].title+'</h4></div>')
		var infodata3=$('<span class="span-time">'+informationData[i].time+'</span>');
		var infodata4=$('<p class="medio-p">'+informationData[i].content+'</p>')
		var infodata5=$('<div class="media-body-author"><span>'+informationData[i].title4+'</span></div>');
		var infodata6=$('<span class="hide-xs">'+informationData[i].title5+'</span>');
		var infodata7=$('<button class="pull-right">'+informationData[i].title6+'</button>');
		infodata1.appendTo(infodata);
		infodata2.appendTo(infodata);
		infodata4.appendTo(infodata2);
		infodata5.appendTo(infodata2);
		infodata6.appendTo(infodata5);
		infodata3.appendTo(infodata5);
		infodata7.appendTo(infodata5);
//		.appendTo($(infodata));
//		.appendTo($(".media-body"));
//		.appendTo($(".media-body"));
//		.appendTo($(".media-body"));
//		.appendTo($(".media-body-author"));
//		.appendTo($(".media-body-author"));
		$(infodata).appendTo($(infocententleft));
	}
	
	
	
	
	
}))
