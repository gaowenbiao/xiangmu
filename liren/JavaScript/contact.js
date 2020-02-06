window.onload=function(){
	
	
	
	$("h2:nth-of-type(1)").click(function(){
		
		$('<div id="abc"></div>').prependTo("body")
		
		$("#abc").css({
			"width":"100%",
			"height":$("body").height()+"px",
			"background":"rgba(0,0,0,0.5)",
			"position":"absolute",
			"z-index":"2"
		})
		$("<ul id='oul'></ul>").prependTo("#abc")
		$("#oul").css({
			"width":"390px",
			"height":"530px",
			"position":"fixed",
			"top":"50%",
			"left":"50%",
			"marginTop":"-265px",
			"marginLeft":"-195px",
			"padding":"25px 20px",
			"background":"#fff",
		})
		$("<li id='oli'></li>").prependTo("#oul")
		
		$("#oli").css({
			"width":"350px",
			"height":"130px",
			"textAlign":"center",
//			"borderBottom":"1px solid #ccc",
			
		})
		$("#oli").append("<img src='images/contact001.jpg' class='oimga'></img>")
		
		
		$("<li id='oli'></li>").prependTo("#oul")
		$("#oli").css({
			"width":"350px",
			"height":"130px",
			"textAlign":"center",
			"borderBottom":"1px solid #ccc",
		})
		$("#oli").append("<img src='images/contact002.jpg' class='oimga'></img>")
		
		
		$("<li id='oli'></li>").prependTo("#oul")
		$("#oli").css({
			"width":"350px",
			"height":"130px",
			"textAlign":"center",
			"borderBottom":"1px solid #ccc",
		})
		$("#oli").append("<img src='images/contact003.jpg' class='oimga'></img>")
		
		
		$("<li id='oli'></li>").prependTo("#oul")
		$("#oli").css({
			"width":"350px",
			"height":"130px",
			"textAlign":"center",
			"borderBottom":"1px solid #ccc",
		})
		$("#oli").append("<img src='images/contact004.jpg' class='oimga'></img>")
		
		$("#abc").click(function(e){
		  e.stopPropagation();
		  $("#abc").remove();
		
		})
	
	
	})
		
		
	
	
	
	
	
	
}


