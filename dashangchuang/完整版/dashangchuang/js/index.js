window.onload=function(){
//	var srt=[{
//		"src":"images/centent-nav-banner01.jpg",
//		"text":"Apple/苹果 13 英寸：MacBook Pro Multi-Touch Bar 和 Touch ID 2.9GHz 处理器 512GB 存储容量",
//	},{
//		"src":"images/centent-nav-banner02.jpg",
//		"text":"Razer/雷蛇 北海巨妖专业版V2 Kraken Pro 电竞游戏耳麦 耳机",
//	},{
//		"src":"images/centent-nav-banner03.jpg",
//		"text":"Razer雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘",
//	},{
//		"src":"images/centent-nav-banner04.jpg",
//		"text":"丹麦innovation北欧小户型客厅双人多功能沙发床三人布艺沙发IDUN 原创设计 独立簧坐垫 欧美同款 欧标品质",
//	},{
//		"src":"images/centent-nav-banner05.jpg",
//		"text":"丹麦innovation北欧小户型客厅双人多功能沙发床三人布艺沙发IDUN 原创设计 独立簧坐垫 欧美同款 欧标品质",
//	},{
//		"src":"images/centent-nav-banner06.jpg",
//		"text":"实木衣柜",
//	}]

num=1;
var owidth=$(".centent-nav-bannerli").eq(0).outerWidth(true);
console.log(owidth)
//右按钮点击事件
$("#right").click(function(){
	$(".centent-nav-banner ul").animate({
		left:-num*owidth
	},function(){
		$(".centent-nav-bannerli").slice(0,num).appendTo($(".centent-nav-banner ul"));
		$(".centent-nav-banner ul").css("left","0")
	})
})
//左按钮点击事件
$("#left").click(function(){
	$(".centent-nav-bannerli").slice($(".centent-nav-bannerli").length-num).prependTo($(".centent-nav-banner ul"));
	$(".centent-nav-banner ul").css("left",-num*owidth)
	$(".centent-nav-banner ul").animate({
		left:0
	})
})
//	定时器 实现自动滚动
var time=setInterval(function(){
	$("#left").click()
},2000)

$(".centent-nav-banner").mouseenter(function(){
	clearInterval(time)
})

$(".centent-nav-banner").mouseleave(function(){
	time=setInterval(function(){
	$("#left").click()
},2000)
})	

//venue 图片数据
var str=[{
	src:"images/centent-venue02.jpg"
},{
	src:"images/centent-venue03.jpg"
},{
	src:"images/centent-venue04.jpg"
},{
	src:"images/centent-venue05.jpg"
},{
	src:"images/centent-venue06.jpg"
},{
	src:"images/centent-venue07.jpg"
},{
	src:"images/centent-venue08.jpg"
},{
	src:"images/centent-venue09.jpg"
},{
	src:"images/centent-venue10.jpg"
},{
	src:"images/centent-venue11.jpg"
},]

    for (var i=0; i<str.length; i++) {
    	var to=$('<img>');
    	to.attr('src',str[i].src)
    	to.appendTo($(".centent-venue-firstli"));
    	
    }
 //venue 图片数据
 var str1=[{
	src:"images/centent-venue12.jpg"
},{
	src:"images/centent-venue13.jpg"
},{
	src:"images/centent-venue14.jpg"
},{
	src:"images/centent-venue15.jpg"
}]

for (j=0;j<str1.length;j++) {
	var bo=$("<img>");
	bo.attr("src",str1[j].src)
	bo.appendTo($(".centent-venue-lastli"));
}
//	好货数据图片
var str2=[{
	src:"images/centent-haohuo02.jpg",
	name:"360行车记录",
	title:"夜视监控电子狗蓝牙",
},{
	src:"images/centent-haohuo03.jpg",
	name:"攀升兄弟",
	title:"I7独显主机",
},{
	src:"images/centent-haohuo04.jpg",
	name:"OPPO R11",
	title:"新品热力红 30天免息",
},{
	src:"images/centent-haohuo05.jpg",
	name:"三星55吋",
	title:"4K处理器流畅不卡顿",
},{
	src:"images/centent-haohuo06.jpg",
	name:"华为智能腕表",
	title:"防水蓝宝石玻璃镜面",
},{
	src:"images/centent-haohuo07.jpg",
	name:"海尔对开门",
	title:"风冷无霜 低温净味",
}]

for (i=0;i<str2.length;i++) {
	var bli=$("<li></li>");
	bli.css({
		"width":"200px",
		"heighr":"100px",
		"paddingTop":"20px"
	})
	var bimg=$("<img>")
	bimg.css({
		"width":"80px",
		"height":"80px",
		"float":"left",
		"cursor":"pointer",
	})
	bimg.appendTo(bli);
	bimg.attr("src",str2[i].src)
	
	var bdiv=$("<div class='bdiv1'>"+str2[i].name+"<div>")
	bdiv.css({
		"width":"90px",
		"height":"20px",
		"float":"right",
		"fontSize":"12px",
	})
	bdiv.appendTo(bli)
	
	var bdiv2=$("<div class='bdiv2'>"+str2[i].title+"<div>")
	bdiv2.css({
		"width":"90px",
		"height":"36px",
		"float":"right",
		"fontSize":"12px",
		"color":"#449DAE"
	})
	bdiv2.appendTo(bli)
	bli.appendTo($(".haohuo-left-ul"));
}
	
	var str3=[{
	src:"images/centent-haohuo08.jpg",
	name:"好心情喝出来",
	title:"遇见懂你的饮品",
},{
	src:"images/centent-haohuo09.jpg",
	name:"纸 因有爱",
	title:"用心呵护您和家人的健康",
},{
	src:"images/centent-haohuo10.jpg",
	name:"爱车一族",
	title:"自驾游说走就走",
},{
	src:"images/centent-haohuo11.jpg",
	name:"厨房管理员",
	title:"健康从点滴开始",
}]

for (i=0;i<str3.length;i++) {
	var bli=$("<li></li>");
	bli.css({
		"width":"264px",
		"heighr":"138px",
		"paddingLeft":"30px"
//		"paddingTop":"20px"
	})
	var bp=$("<p class='bp'>"+str3[i].title+"</p>")
	bp.css({
		"width":"250px",
		"height":"18px",
		"fontSize":"12px",
		"marginTop":"30px",
		"marginBottom":"20px",
		"cursor":"pointer",
	})
	bp.appendTo(bli)
	
	var bspan=$("<span>"+str3[i].name+"</span>")
	bspan.css({
		"display":"inliner-block",
//		"width":"110px",
//		"height":"18px",
        "padding":"0 10px",
		"linnerHeight":"18px",
		"fontSize":"12px",
		"borderRadius": "9px",
	    "backgroundColor": "#A25684",
	    "color": "white",
	    "marginRight":"10px"
	})
	bspan.prependTo(bp)
	
	var bomg=$("<img>")
	bomg.css({
		"width":"220px",
		"height":"110px",
		"cursor":"pointer",
	})
	bomg.attr("src",str3[i].src)
	bomg.appendTo(bli);
	
	bli.appendTo($(".haohuo-right-ul"));
	
}
	$(".bp").mouseover(function(){
		$(this).css("color","#A25684");
	})
	$(".bp").mouseout(function(){
		$(this).css("color","black");
	})
	
//	购物车按钮点击事件
$("#quick-links-ul-btn").toggle(function(){
	$(".quick-links").animate({
		"right":"0px",
	})
},function(){
	$(".quick-links").animate({
		"right":"-280px",
	})
})

	
	
}
