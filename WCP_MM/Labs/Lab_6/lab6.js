//THIS JQUERY FUNCTION ALLOWS THE LOGO IMAGE TO TAKE YOU BACK TO THE MAIN INDEX
	$(document).ready(function(){
		$("#homepageimage").click(function(){
			var img = $("#topImage");
			img.animate({ width: '115px', padding: '20px 20px' }, 250);
			img.animate({ width: '135px', padding: '10px 10px' }, 250);
			location.href = "http://techteach.us/Web2019/Mmatthew/WCP_MM/";
			});
	});
$(function(){
	$("#shapeButton").click(function(){
		var square = $("#square");
		square.animate({borderRadius: '50%'}, "slow");
		square.animate({borderRadius: '50%'}, "slow");
		square.animate({borderRadius: '50%'}, "slow");
		square.animate({borderRadius: '0%'}, "slow");
	});
});
$(function(){
	"use strict";
	$("#sizeButton").click(function(){
		var square = $("#square");
		square.animate({height: '180px', width: '300px'});
		square.animate({height: '180px', width: '300px'});
		square.animate({height: '180px', width: '300px'});
		square.animate({height: '150px', width: '150px'});
	});
});
$(function(){
	$("#positionButton").click(function(){
		var square = $("#square");
		var rando = Math.floor(Math.random() * 500) + 1;
		square.animate({left: rando, right: rando});
	});
});
$(function(){
	$('#stuffButton').click(function(){
		for (var i = 0; i < 20; i++){
		var square = $("#square");
		var rando = Math.floor(Math.random() * 500) + 1;
		square.animate({height: rando, width: rando}, 50);
		square.animate({left: rando, right: rando}, 50);
		square.animate({opacity: "."+rando}, 50);
		}
	});
});
$(function(){
	$('#opacityButton').click(function(){
		var square = $("#square");
		var rando = Math.floor(Math.random() * 500) + 1;
		square.animate({opacity: "."+rando}, 3000);
		square.animate({opacity: 1}, 3000);
	});
});
$(function(){
	$('#stop').click(function(){
		var square = $("#square");
		square.stop();
	});
});
$(function(){
	$('#stop2').click(function(){
		var square = $("#square");
		square.stop(true);
	});
});
$(function(){
	$('#stop').click(function(){
		var square = $("#square");
		square.stop(true, true);
	});
});