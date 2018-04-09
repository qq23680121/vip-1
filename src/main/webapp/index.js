function changediv1(hihi){
	alert(hihi);
	var ele = document.getElementById("div1");
	ele.innerHTML="niniinner";
	ele.innerHTML="you hua use";
	ele.style.backgroundColor="orange";
}
window.onload = function(){
	var btn = document.getElementById("btn2");
	btn.onclick= function(e){
		alert(e);
		alert(btn.attachEvent);
		
		var ele = document.getElementById("div2");
		ele.innerHTML="you hua use";
		ele.style.backgroundColor="orange";
	}
	var btn3 = document.getElementById("btn3");
	var ele3 = document.getElementById("div3");
	btn3.addEventListener("click", function(){
		
		ele3.innerHTML="you hua use3333";
		ele3.style.backgroundColor="orange";
	})
}