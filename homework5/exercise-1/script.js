$(document).ready(function(){
	$("#headline").click(function(){
		window.location.replace("index.html");
	});
	$("#headlineFromSubPage").click(function(){
    	window.location.replace("../index.html");
  	});
});