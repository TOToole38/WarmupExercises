document.getElementsByClassName('error-low')[0].style['color']= "red"; 
document.getElementsByClassName('error-low')[0].style['font-weight']= "700"; 
document.getElementsByClassName('error-high')[0].style['color']= "red"; 
document.getElementsByClassName('error-high')[0].style['font-weight']= "700"; 
document.getElementsByClassName('success')[0].style['color']= "green";
document.getElementsByClassName('success')[0].style['font-style']= "italic";  
document.getElementsByClassName('success')[0].style['display']= "none"; 
document.getElementsByClassName('error-high')[0].style['display']= "none"; 
document.getElementsByClassName('error-low')[0].style['display']= "none";

var rando = function(min, max){
	return Math.random() * (max-min) + min; 
}cd
var roundDown = Math.floor(rando(1, 100));
var randnum = rando(0, 100); 

