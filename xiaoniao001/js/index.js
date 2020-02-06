window.onload=function(){
	
	
var obannerul=document.getElementById("banner-img");
var list=obannerul.getElementsByTagName("li");
var oleft=document.getElementById("banner-btn-span1");
var oright=document.getElementById("banner-btn-span2");
var yuanul=document.getElementById("yuandian");
var yuanli=yuanul.getElementsByTagName("li");
var li1img2=document.getElementById("li1-img2");
var li1img3=document.getElementById("li1-img3");
var num=0;
var time=null;
 oright.onclick=function(){
 	num++;
 	if(num>list.length-1){
 		num=0;
 	}
 	qiehuan();
 }
 oleft.onclick=function(){
 	num--;
 	if(num<0){
 		num=list.length-1;
 	}
 	qiehuan();
 }
 function qiehuan(){
 	for(var i=0;i<list.length;i++){
 		list[i].className="";
 		yuanli[i].classList="";
 	}
 	list[num].className="active";
 	yuanli[num].className="blue";
 }
// 点击指示点
for(j=0;j<yuanli.length;j++){
	yuanli[j].index=j;
	yuanli[j].onclick=function(){
		for(var i=0;i<list.length;i++){
 		list[i].className="";
 		yuanli[i].classList="";
	 	}
	 	list[this.index].className="active";
	 	this.className="blue";
	 	num=this.index;
	}
}
 
 
 
 
//展开点击事件
var bian=1;
$(".zhankai").click(function(){
		if(bian==1){
			$(".zhankai").css({
			"background": "url(images/business_zhankaishouqi.png) 0 0px",
			"transition": "all 0.5s ease 0s",
		})
		    $(".text-dital").animate({
			"height":"0px",
		    "transition": "all 0.3s",
		    "paddingBottom": "0px",
		})
		    $(".yewucontent").css("overflow","hidden")
//        $(".text-dital").slideUp(1000);
	bian=2
	}else if(bian==2){
		$(".zhankai").css({
			"background": "url(images/business_zhankaishouqi.png) 0 67px",
			"transition": "all 0.5s ease 0s",
		})
		$(".text-dital").animate({
			"height":"220px",
			"transition": "all 0.3s",
			"paddingBottom": "30px",
		})
//$(".text-dital").slideDown(1000);
		 bian=1   
	}
	
})




}

