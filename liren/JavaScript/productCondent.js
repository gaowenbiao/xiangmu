window.onload=function(){
	
	
	var oul1=document.getElementById("banner-img-left-ul1");
	var o1list=oul1.getElementsByTagName("li");
	var oul2=document.getElementById("banner-img-left-ul2");
	var o2list=oul2.getElementsByTagName("li");
	
	   
	   
	for (var j=0;j<o2list.length; j++) {
		o2list[j].index=j;
		o2list[j].onclick=function(){
			
			for (var i=0;i<o1list.length;i++) {
		       o1list[i].className=""
		       
	        }
	           o1list[this.index].className="imgul1";
	   
	   
		}
		
		
	}
	
	
	
	
	
	
}
