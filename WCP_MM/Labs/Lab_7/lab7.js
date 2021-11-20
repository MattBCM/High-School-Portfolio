// JavaScript Document
	//THIS JQUERY FUNCTION ALLOWS THE LOGO IMAGE TO TAKE YOU BACK TO THE MAIN INDEX
	$(document).ready(function(){
			"use strict";
		$("#homepageimage").click(function(){
			var img = $("#topImage");
			img.animate({ width: '115px', padding: '20px 20px' }, 250);
			img.animate({ width: '135px', padding: '10px 10px' }, 250);
			location.href = "http://techteach.us/Web2019/Mmatthew/WCP_MM/";
			});
	});
$(function(){	
	"use strict";
$("#Info").accordion({
    collapsible: true,
	event: "mouseover",
	active: false
}).on('mouseleave', function () {
                $(this).accordion("option", "active", false);
            });
});
