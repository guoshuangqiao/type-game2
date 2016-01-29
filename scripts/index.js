window.onload=function(){

	var sence=document.getElementById('sence'),
		jian=document.getElementsByClassName('jian'),
		time=0,hasjishuqi=false,timeId,
		timel=document.getElementById('jishiqi'),
		top=sence.firstElementChild;

	for(var i=0;i<jian.length;i++){
		var cc=65+Math.floor(Math.random()*(122-65));
		while( cc>=91 && cc<=96) {
			cc=65+Math.floor(Math.random()*(122-65));
		}
			jian[i].innerHTML=String.fromCharCode(cc);
	}
	
	var stop=document.getElementById('stop');
	var stop2=document.getElementById('stop-img');
	var star=document.getElementById('star');
	star.onclick=function(){
		stop.onclick=function(){
			clearInterval(timeId)
			stop2.style.display='block';
		}
		stop2.style.display='none';
		document.onkeydown=function(e){
			if(e.shiftKey){
				if(e.keyCode!==top.innerHTML.charCodeAt(0))  return;
			}else{
				if(e.keyCode+32!==top.innerHTML.charCodeAt(0)) return;
			}
			top.style.boxShadow='0 0 10px 2px rgb(91, 236, 46) inset';
			top=top.nextElementSibling;
			if(top==null){
				clearInterval(timeId);
				// alert(time);
				stop2.style.display='block';
				location.reload();
			}
		};
		clearInterval(timeId)
		timeId=setInterval(function(){
			time++;
			timel.innerHTML=time;
		},1000);
		hasjishuqi=true;
	}
	document.onmousedown=function(e){
		e.preventDefault();
	}
	




















}