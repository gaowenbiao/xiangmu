window.onload=function(){
	var bannermove=document.getElementById("banner-move");
	var list=bannermove.getElementsByTagName("li");
	var imgleft=document.getElementById("left");
	var imgright=document.getElementById("right");
	var bannerbtn=document.getElementById("banner-btn");
	var btnlist=bannerbtn.getElementsByTagName("li");
	
	var num=0;
	var time=null;
	
	
	imgright.onclick=function(){
				num++;
				if(num>list.length-1){
					num=0
				}
				qiehuan()
	          }
			//点击左边按钮，切换图片
			imgleft.onclick=function(){
				num--;
				if(num<0){
					num=list.length-1
				}
				qiehuan()
			}
			//切换图片的函数
			function qiehuan(){
				for(var i=0;i<list.length;i++){
					list[i].className="";
					btnlist[i].className="";
				}
				list[num].className="cor";
				btnlist[num].className="ored"
			}
	
//	      按钮点击
            for (var j=0; j<btnlist.length; j++) {
            	btnlist[j].index=j;
            	btnlist[j].onclick=function(){
            		for(var i=0;i<list.length;i++){
					list[i].className="";
					btnlist[i].className="";
				}
				list[this.index].className="cor";
			    this.className="ored";
				num=this.index;
            	}
            }
            
            time=setInterval(function(){
            	imgright.onclick();
            },2000);
            
            bannermove.onmouseover=function(){
            	clearTimeout(time);
            }
            bannermove.onmouseout=function(){
            	  time=setInterval(function(){
            	imgright.onclick();
            },2000);
            }
            
            
            
            
            
            
            
            var ocolumnul1=document.getElementById("column-ul1");
            var ocli1=ocolumnul1.getElementsByTagName("li");
            var ocolumnul2=document.getElementById("column-ul2");
            var ocli2=ocolumnul2.getElementsByTagName("li");
            
            var oindex=0;
            for(var j=0;j<ocli2.length;j++){	
                ocli2[j].index=j
                ocli2[j].onclick=function(){
               oindex=this.index;
               for(var i=0;i<ocli1.length;i++){
               	    ocli1[i].className=""
                 }
                   ocli1[this.index].className="column-ul1-li"
            }
                
	     }
//           换一批
             var octr=document.getElementById("column-title-right");
             var obspan=octr.getElementsByTagName("span")[0];
             obspan.onclick=function(){
               	    ocli1[oindex].style.left=ocli1[oindex].offsetLeft-1200+"px";
               	    if( ocli1[oindex].offsetLeft<-1200){
               	    	ocli1[oindex].style.left=0
               	    }
               	    
             }
             
            
}
