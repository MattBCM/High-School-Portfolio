// JavaScript Document

	var x = 0;
$("#submit1").on("click", function(){
	"use strict";
	ques1();
	ques2();
	ques3();
	ques4();
	ques5();
	ques6();
	ques7();
	ques8();
	ques9();
	ques10();
	ques11();
	ques12();
	ques13();
	ques14();
	ques15();
	ques16();
//$("#result").html(x);
	
if (x <= 23 && x >=19){
	$("#result").html("GREAT! I bet you have a credit score of <strong>800-850</strong>, so you're VERY trustworthy!");
}
	else if (x <= 18 && x >=14){
	$("#result").html("Nice! I bet you have a credit score of <strong>740-799</strong>, so you're trustworthy.");	
	}
	else if (x <= 13 && x >=8){
	$("#result").html("Ok, I bet you have a credit score of <strong>670-739</strong>, so you're somewhat trustworthy.");	
	}
	else if (x <= 7 && x >=4){
	$("#result").html("Oh... I bet you have a credit score of <strong>580-669</strong>, so you need to improve on that.");	
	}
	else if (x <= 3 && x >=0){
	$("#result").html("JEEZ! I bet you have a pretty low credit score of <strong>300-579</strong>! You really need to improve on it.");	
	}
	
	if (x >=0){
		x = 0;
	}
});
function ques1(){
	"use strict";
	var ques = document.getElementById("dropdown").value;
	if(ques == 1) {
		x = x+1;
	}
}
function ques2(){
	"use strict";
	var ques = document.getElementById("dropdown1").value;
	if(ques == 1) {
		x = x+3;
	}
	else if (ques == 2){
		x = x+2;
	}
	else if (ques == 3){
		x = x+1;
	}
}
function ques3(){
	"use strict";
	var ques = document.getElementById("dropdown2").value;
	if(ques == 1 || ques == 2) {
		x = x+1;
	}
}
function ques4(){
	"use strict";
	var ques = document.getElementById("dropdown3").value;
	if(ques == 2) {
		x = x+1;
	}
}
function ques5(){
	"use strict";
	var ques = document.getElementById("dropdown4").value;
	if(ques == 2) {
		x = x+1;
	}
}
function ques6(){
	"use strict";
	var ques = document.getElementById("dropdown6").value;
	if(ques == 1) {
		x = x+1;
	}
}
function ques7(){
	"use strict";
	var ques = document.getElementById("dropdown7").value;
	if(ques == 1) {
		x = x+1;
	}
}
function ques8(){
	"use strict";
	var ques = document.getElementById("dropdown8").value;
	if(ques == 2) {
		x = x+1;
	}
}
function ques9(){
	"use strict";
	var ques = document.getElementById("dropdown9").value;
	if(ques == 1) {
		x = x+1;
	}
}
function ques10(){
	"use strict";
	var ques = document.getElementById("dropdown10").value;
	if(ques == 1) {
		x = x+2;
	}
	else if(ques == 2){
		x = x+1;
	}
}
function ques11(){
	"use strict";
	var ques = document.getElementById("dropdown11").value;
	if(ques == 1) {
		x = x+4;
	}
	else if(ques == 2){
		x = x+3;
	}
	else if(ques == 3){
		x = x+2;
	}
	else if(ques == 4){
		x = x+1;
	}
}
	function ques12(){
		"use strict";
	var ques = document.getElementById("dropdown12").value;
	if(ques == 2){
		x = x+2;
	}
	else if(ques == 4){
		x = x+2;
	}
}
	function ques13(){
		"use strict";
	var ques = document.getElementById("dropdown13").value;
	if(ques == 1) {
		x = x+1;
	}
}
	function ques14(){
		"use strict";
	var ques = document.getElementById("dropdown14").value;
	if(ques == 1) {
		x = x+1;
	}
}
	function ques15(){
		"use strict";
	var ques = document.getElementById("dropdown15").value;
	if(ques == 1) {
		x = x+2;
	}
}
function ques16(){
		"use strict";
	var ques = document.getElementById("dropdown16").value;
	if(ques == 1) {
		x = x+2;
	}
}
//function validateForm() {
//  var y = document.forms["credit"]["name"].value;
//  if (y == "") {
//    alert("Name must be filled out");
//    return false;
//  }
//}
	
