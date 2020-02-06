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
	
	
	
	
//	数据
	var visaData=[{
		id:"1",
		title:"签证类型",
		listo:[{
			id:"01",
			title:"签证类型概述",
			list:[{
				id:"001",
				title:"概述"
			},{
				id:"002",
				title:"非移民签证"
			},{
				id:"003",
				title:"签证类型列表"
			}]
		},{
			id:"02",
			title:"商务/旅行签证",
			list:[{
				id:"001",
				title:"概述"
			},{
				id:"002",
				title:"条件"
			},{
				id:"003",
				title:"申请材料"
			},{
				id:"004",
				title:"如何申请"
			},{
				id:"005",
				title:"支持性文件"
			},{
				id:"006",
				title:"寻求医疗服务"
			}]
		},{
			id:"03",
			title:"学生签证",
			list:[{
				id:"001",
				title:"概述"
			},{
				id:"002",
				title:"签证说明和申请条件"
			},{
				id:"003",
				title:"美国公立学校"
			},{
				id:"004",
				title:"申请材料"
			},{
				id:"005",
				title:"如何申请"
			},{
				id:"006",
				title:"支持性文件"
			},{
				id:"007",
				title:"家属"
			},{
				id:"008",
				title:"其他信息"
			}]
		},{
			id:"04",
			title:"交流访问学者签证",
			list:[{
				id:"001",
				title:"概述"
			},{
				id:"002",
				title:"家属"
			},{
				id:"003",
				title:"申请材料"
			},{
				id:"004",
				title:"如何申请"
			},{
				id:"005",
				title:"支持性文件"
			},{
				id:"006",
				title:"针对家属的支持性文件"
			}]
		},{
			id:"05",
			title:"过境/船员/机组签证",
			list:[{
				id:"001",
				title:"概述"
			},{
				id:"002",
				title:"家属"
			},{
				id:"003",
				title:"申请材料"
			},{
				id:"004",
				title:"如何申请"
			},{
				id:"005",
				title:"支持性文件"
			}]
		},{
			id:"06",
			title:"工作签证",
			list:[{
				id:"001",
				title:"概述"
			},{
				id:"002",
				title:"申请时间"
			},{
				id:"003",
				title:"支持性文件"
			},{
				id:"004",
				title:"申请材料"
			},{
				id:"005",
				title:"如何申请"
			},{
				id:"006",
				title:"支持性文件"
			},{
				id:"007",
				title:"家属"
			}]
		},{
			id:"07",
			title:"宗教工作者签证",
		},{
			id:"08",
			title:"家庭雇员签证",
		},{
			id:"09",
			title:"记者和媒体签证",
		}]
	},{
		id:"2",
		title:"签证费",
		listo:[{
			id:"01",
			title:"概述",
		},{
			id:"02",
			title:"付款信息",
			
		},{
			id:"03",
			title:"限制条件",
			
		},{
			id:"04",
			title:"签证类型及申请费",
			
		},{
			id:"05",
			title:"无需申请费的签证类型及适用条件",
			
		},{
			id:"06",
			title:"其它费用",
			
		},{
			id:"07",
			title:"SEVIS费",
		},{
			id:"08",
			title:"非移民签证签发（“互惠”）费",
		}]
	},{
		id:"3",
		title:"节假日及闭馆说明",
		listo:[{
			id:"01",
			title:"概述",
		},{
			id:"02",
			title:"大使馆/总领事馆的闭馆日",
			
		},{
			id:"03",
			title:"特别注意",
			
		}]
	},{
		id:"4",
		title:"护照追踪与检索",
		listo:[{
			id:"01",
			title:"概述",
		},{
			id:"02",
			title:"更改送达选项",
			
		},{
			id:"03",
			title:"查询签证状态",
			
		},{
			id:"04",
			title:"护照追踪",
			
		},{
			id:"05",
			title:"领取护照/签证",
			
		},{
			id:"06",
			title:"护照检索所需的文件",
			
		}]
	},{
		id:"5",
		title:"照片和指纹",
		listo:[{
			id:"01",
			title:"概述",
		},{
			id:"02",
			title:"数码照片要求",
			
		},{
			id:"03",
			title:"七步拍出成功照片",
			
		},{
			id:"04",
			title:"指纹采集",
			
		}]
	},{
		id:"6",
		title:"申请免面谈",
		listo:[{
			id:"01",
			title:"概述",
		},{
			id:"02",
			title:"条件",
			
		},{
			id:"03",
			title:"支持性文件",
			
		},{
			id:"04",
			title:"如何申请",
			
		},{
			id:"05",
			title:"中信银行加急代传递服务",
			
		}]
	},{
		id:"7",
		title:"须进一步审理的申请",
		listo:[{
			id:"01",
			title:"概述",
		},{
			id:"02",
			title:"其他信息",
			
		}]
	},{
		id:"8",
		title:"提交221(G)文件",
		listo:[{
			id:"01",
			title:"概述",
		},{
			id:"02",
			title:"如何提交221(g)文件",
			
		}]
	},{
		id:"9",
		title:"儿童签证",
		listo:[{
			id:"01",
			title:"儿童是否需要签证？",
		},{
			id:"02",
			title:"儿童是否需缴纳与成年人相同的申请费？",
			
		},{
			id:"03",
			title:"儿童是否需要预约面谈？",
			
		},{
			id:"04",
			title:"是否所有儿童都需亲自参加面谈？",
			
		},{
			id:"05",
			title:"特别注意",
			
		}]
	},{
		id:"10",
		title:"豁免签证计划",
		listo:[{
			id:"01",
			title:"概述",
		},{
			id:"02",
			title:"条件",
			
		},{
			id:"03",
			title:"旅游授权电子系统(ESTA)",
			
		},{
			id:"04",
			title:"不符条件",
			
		},{
			id:"05",
			title:"ESTA拒签",
			
		}]
	},{
		id:"11",
		title:"常见问题(FAQ)",
		listo:[{
			id:"01",
			title:"基本证件信息",
			list:[{
				id:"001",
				title:"Q.1 我的护照有效期必须为多长时间才可以申请美国签证？"
			},{
				id:"002",
				title:"Q.2 我是否符合豁免签证计划？"
			},{
				id:"003",
				title:"Q.3 什么是旅游授权电子系统(ESTA)费？由谁支付？"
			},{
				id:"004",
				title:"Q.4 在没有获得旅游授权电子系统(ESTA)批准的情况下，如果去美国旅行会怎么样？"
			},{
				id:"005",
				title:"Q.5 如果我是居住在中国的第三国公民，我能否在中国申请非移民签证？"
			},{
				id:"006",
				title:"Q.6 是否所有非移民签证申请人都必须到大使馆或总领事馆进行面谈？"
			},{
				id:"007",
				title:"Q.7 我有一个快要到期的非移民签证想要续签。我是否需要重新进行整个签证申请流程？"
			},{
				id:"008",
				title:"Q.8 我的护照已经到期，但是其中的美国签证仍然有效。我是否需要申请新的签证？"
			},{
				id:"009",
				title:"Q.9 我拥有双重公民身份。去美国旅行应该使用哪个护照？"
			},{
				id:"010",
				title:"Q.10 签证如何办理延期？"
			},{
				id:"011",
				title:"Q.11 我是否必须通过电子方式提交签证申请表？"
			}]
		}]
	}]

	var olist=document.getElementById("list");
	var str="";
	//第一层标题
    for(var i=0;i<visaData.length;i++){
    	str+='<li><a href="" class="olistli">'+visaData[i].title+'</a><ul class="twoul"></ul></li>'
    	
    }
     
    olist.innerHTML=str
    
//  第二层标题
    for(var i=0;i<visaData.length;i++){
    	for(var j=0;j<visaData[i].listo.length;j++){
    		$(".twoul").eq(i).html(function(index,value){
    			return value+'<li><a href="">'+visaData[i].listo[j].title+'</a><ul class="threeul"></ul></li>'
    			
    		})
    	}
    	
    }
        $("#list>li:first-of-type .twoul:first-of-type>li:first-of-type .threeul:first-of-type").css("display","block");
        $("#list>li:first-of-type .twoul:first-of-type").css("display","block");

//  第三层标题
    for(var i=0;i<visaData.length;i++){
    	for(var j=0;j<visaData[i].listo.length;j++){
    		console.log(visaData[i].listo[j].list)
    		if(visaData[i].listo[j].list){
    			for(var k=0;k<visaData[i].listo[j].list.length;k++){
    			console.log(visaData[i].listo[j].list.length);
    			$("#list > li").eq(i).find(".threeul").eq(j).html(function(index,value){
    				return value+'<li><a href="">'+visaData[i].listo[j].list[k].title+"</a></li>"
    			})
    		}
    		}
    	}
    	
    }


	var ocolcentent=$("#colcentent").height();
	$(window).scroll(function(){
		var winsctop=$(window).scrollTop();
		if(winsctop>50){
			$("#list").css({
				position:"fixed",
				top:"89px",
				height:ocolcentent-winsctop,
			})
        }else{
        	$("#list").css({
				position:"relative",
				top:0,
				height:ocolcentent-winsctop,
				zIndex:-1,
			})
        }
	})
	
//	
	
	
	
	
	
	
	
	
	
	
}
