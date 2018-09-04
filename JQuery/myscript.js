$(document).ready(function(){

	//$("form").empty();  //lets the form disappear visibly(still in console) or use remove();

	$("article").append("<div>div1</div>");
	$("article").append("<div>div2</div>"); //or prepend
	$("article").append("<div>div3</div>");
	$("article").append("<div>div4</div>");
	$("article").append("<div>div5</div>");

	$("input[name='msg']").val("howdy");   //val(because value), html or txt didnt work

	$("div").addClass("box");
	
	$("a").attr("href","http://www.google.com")


})
	
	

