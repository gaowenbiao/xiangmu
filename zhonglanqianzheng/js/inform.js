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
		src:"image/20170509103625563.jpg",
		title:"92名中国民工被欠薪受困塞班岛 华裔中介扣钱逃匿",
		time:"时间：2017-05-09",
		content:"他们大部分来自东北，在去年10月份时，其所在城市的劳务中介公司找到他们，介绍了塞班岛的工作，中介给他们开出每天工作8小时日薪300元、如果加班每小时50元的待遇。民工称他们当时也没",
		title4:"作者：中岚签证",
		title5:"clantrip.com",
		title6:"[详情]",
	},{
		id:"2",
		src:"image/20170508061916221.png",
		title:"2017年赴美签证新规定",
		time:"时间：2017-05-08",
		content:"美国国务院领事事务局2016年10月6日公告，自2016年11月1日开始，申请美国护照或签证，要使用没有戴眼镜的照片。",
		title4:"作者：中岚签证",
		title5:"clantrip.com",
		title6:"[详情]",
	},{
		id:"3",
		src:"image/20170508052848613.jpg",
		title:"美国有多少人缴纳个人所得税及其它",
		time:"时间：2017-05-08",
		content:"前几天我们有一篇博文介绍了美国个人所得税税率，不少网友提出许多有关美国个税税收的问题，这里就集中回答。由于个税牵涉到联邦所得税以及",
		title4:"作者：中岚签证",
		title5:"clantrip.com",
		title6:"[详情]",
	},{
		id:"4",
		src:"image/20170414111153354.jpg",
		title:"多国签证利好频出，带火春节出境游",
		time:"时间：2017-04-15",
		content:"近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间",
		title4:"作者：中岚签证",
		title5:"clantrip.com",
		title6:"[详情]",
	},{
		id:"5",
		src:"image/20170509103625563.jpg",
		title:"92名中国民工被欠薪受困塞班岛 华裔中介扣钱逃匿",
		time:"时间：2017-05-09",
		content:"他们大部分来自东北，在去年10月份时，其所在城市的劳务中介公司找到他们，介绍了塞班岛的工作，中介给他们开出每天工作8小时日薪300元、如果加班每小时50元的待遇。民工称他们当时也没",
		title4:"作者：中岚签证",
		title5:"clantrip.com",
		title6:"[详情]",
	},{
		id:"6",
		src:"image/20170508061916221.png",
		title:"2017年赴美签证新规定",
		time:"时间：2017-05-08",
		content:"美国国务院领事事务局2016年10月6日公告，自2016年11月1日开始，申请美国护照或签证，要使用没有戴眼镜的照片。",
		title4:"作者：中岚签证",
		title5:"clantrip.com",
		title6:"[详情]",
	},{
		id:"7",
		src:"image/20170508052848613.jpg",
		title:"美国有多少人缴纳个人所得税及其它",
		time:"时间：2017-05-08",
		content:"前几天我们有一篇博文介绍了美国个人所得税税率，不少网友提出许多有关美国个税税收的问题，这里就集中回答。由于个税牵涉到联邦所得税以及",
		title4:"作者：中岚签证",
		title5:"clantrip.com",
		title6:"[详情]",
	},{
		id:"8",
		src:"image/20170414111153354.jpg",
		title:"多国签证利好频出，带火春节出境游",
		time:"时间：2017-04-15",
		content:"近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间",
		title4:"作者：中岚签证",
		title5:"clantrip.com",
		title6:"[详情]",
	},{
		id:"9",
		src:"image/20170509103625563.jpg",
		title:"92名中国民工被欠薪受困塞班岛 华裔中介扣钱逃匿",
		time:"时间：2017-05-09",
		content:"他们大部分来自东北，在去年10月份时，其所在城市的劳务中介公司找到他们，介绍了塞班岛的工作，中介给他们开出每天工作8小时日薪300元、如果加班每小时50元的待遇。民工称他们当时也没",
		title4:"作者：中岚签证",
		title5:"clantrip.com",
		title6:"[详情]",
	},{
		id:"10",
		src:"image/20170508061916221.png",
		title:"2017年赴美签证新规定",
		time:"时间：2017-05-08",
		content:"美国国务院领事事务局2016年10月6日公告，自2016年11月1日开始，申请美国护照或签证，要使用没有戴眼镜的照片。",
		title4:"作者：中岚签证",
		title5:"clantrip.com",
		title6:"[详情]",
	},{
		id:"11",
		src:"image/20170508052848613.jpg",
		title:"美国有多少人缴纳个人所得税及其它",
		time:"时间：2017-05-08",
		content:"前几天我们有一篇博文介绍了美国个人所得税税率，不少网友提出许多有关美国个税税收的问题，这里就集中回答。由于个税牵涉到联邦所得税以及",
		title4:"作者：中岚签证",
		title5:"clantrip.com",
		title6:"[详情]",
	},{
		id:"12",
		src:"image/20170414111153354.jpg",
		title:"多国签证利好频出，带火春节出境游",
		time:"时间：2017-04-15",
		content:"近一两个月来，澳大利亚、马来西亚、以色列、阿联酋、塞尔维亚、泰国等国纷纷对中国公民捧出签证利好，加上春节临近，大为提振了南京市民的旅游热情。记者从旅游市场上获悉，春节期间",
		title4:"作者：中岚签证",
		title5:"clantrip.com",
		title6:"[详情]",
	}]

	var infocententleft=document.getElementById("server-centent-left");
	console.log(infocententleft);
	for(i=0;i<informationData.length;i++){
		var infodata=$('<div class="media"></div>');
		var infodata1=$('<div class="media-left"><a class="thumbnail"><img src='+informationData[i].src+'></img></a></div>')
		var infodata2=$('<div class="media-body"><h4>'+informationData[i].title+'</h4></div>')
		var infodata3=$('<span class="span-time">'+informationData[i].time+'</span>');
		var infodata4=$('<p class="medio-p">'+informationData[i].content+'</p>')
		var infodata5=$('<div class="media-body-author"><span>'+informationData[i].title4+'</span></div>');
		var infodata6=$('<span class="hide-xs">'+informationData[i].title5+'</span>');
		var infodata7=$('<a href="" class="pull-right">'+informationData[i].title6+'</a>');
		infodata1.appendTo(infodata);
		infodata2.appendTo(infodata);
		infodata3.appendTo(infodata2);
		infodata4.appendTo(infodata2);
		infodata5.appendTo(infodata2);
		infodata6.appendTo(infodata5);
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
