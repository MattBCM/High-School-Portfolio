// JavaScript Document

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
}
 $(".navButton").click(function(){
	$(".Menu").animate({
	top: "0vh"
	}, 1000)
	$("nav").animate({
	opacity: 1,	
	}, 1000)
	$(".Menu").addClass("menu-overlay");
 $(".Menu").remove("Menu");	 
 });

 $("#closeButton").click(function(){
	$(".Menu").animate({
	top: "-100vh",
	}, 1000)
	$("nav").animate({
	opacity: 0,	
	}, 1000)
 });

 $(".links").click(function(){
	$(".Menu").animate({
	top: "-100vh",
	}, 1000)
	$("nav").animate({
	opacity: 0,	
	}, 1000)
 });
var total_images = 38;
var random_img = new Array();
var random_number = Math.floor((Math.random()*total_images));

// Web Client Programming
random_img[0] = '<a href="WCP_MM/Labs/Lab_1/" target="_blank"><img src="images/portfolio/lab1.PNG" class="section4Image"></a>';
random_img[1] = '<a href="WCP_MM/Labs/Lab_2/" target="_blank"><img src="images/portfolio/lab2.PNG" class="section4Image"></a>';
random_img[2] = '<a href="WCP_MM/Labs/Lab_3/" target="_blank"><img src="images/portfolio/lab3.PNG" class="section4Image"></a>';
random_img[3] = '<a href="WCP_MM/Labs/Lab_4/" target="_blank"><img src="images/portfolio/lab4.PNG" class="section4Image"></a>';
random_img[4] = '<a href="WCP_MM/Labs/Lab_5/" target="_blank"><img src="images/portfolio/lab5.PNG" class="section4Image"></a>';
random_img[5] = '<a href="WCP_MM/Labs/Lab_6/" target="_blank"><img src="images/portfolio/lab6.PNG" class="section4Image"></a>';
random_img[6] = '<a href="WCP_MM/Labs/Lab_7/" target="_blank"><img src="images/portfolio/lab7.PNG" class="section4Image"></a>';
random_img[7] = '<a href="WCP_MM/Labs/Lab_8/" target="_blank"><img src="images/portfolio/lab8.PNG" class="section4Image"></a>';
random_img[8] = '<a href="WCP_MM/Labs/Lab_9/" target="_blank"><img src="images/portfolio/lab9.PNG" class="section4Image"></a>';
random_img[9] = '<a href="WCP_MM/Labs/Lab_10/" target="_blank"><img src="images/portfolio/lab10.PNG" class="section4Image"></a>';
random_img[10] = '<a href="WCP_MM/Labs/Lab_11/" target="_blank"><img src="images/portfolio/lab11.PNG" class="section4Image"></a>';
random_img[11] = '<a href="WCP_MM/Labs/Lab_12/" target="_blank"><img src="images/portfolio/lab12.PNG" class="section4Image"></a>';
random_img[12] = '<a href="WCP_MM/Labs/Lab_13/" target="_blank"><img src="images/portfolio/lab13.PNG" class="section4Image"></a>';
random_img[13] = '<a href="WCP_MM/Labs/Lab_14/" target="_blank"><img src="images/portfolio/lab14.PNG" class="section4Image"></a>';
random_img[14] = '<a href="WCP_MM/Labs/Lab_15/" target="_blank"><img src="images/portfolio/lab15.PNG" class="section4Image"></a>';
random_img[15] = '<a href="WCP_MM/Labs/Lab_16/" target="_blank"><img src="images/portfolio/lab16.PNG" class="section4Image"></a>';
random_img[16] = '<a href="WCP_MM/Labs/Lab_17/" target="_blank"><img src="images/portfolio/lab17.PNG" class="section4Image"></a>';
random_img[17] = '<a href="WCP_MM/Labs/Lab_18/" target="_blank"><img src="images/portfolio/lab18.PNG" class="section4Image"></a>';
random_img[18] = '<a href="WCP_MM/Labs/Lab_19/" target="_blank"><img src="images/portfolio/lab19.PNG" class="section4Image"></a>';
random_img[19] = '<a href="WCP_MM/Labs/Lab_20/" target="_blank"><img src="images/portfolio/lab20.PNG" class="section4Image"></a>';
random_img[20] = '<a href="WCP_MM/Labs/Lab_21/" target="_blank"><img src="images/portfolio/lab21.PNG" class="section4Image"></a>';
random_img[21] = '<a href="WCP_MM/Labs/Lab_22/" target="_blank"><img src="images/portfolio/lab22.PNG" class="section4Image"></a>';
random_img[22] = '<a href="WCP_MM/Labs/Lab_23/" target="_blank"><img src="images/portfolio/lab23.PNG" class="section4Image"></a>';
random_img[23] = '<a href="WCP_MM/Labs/Lab_24/" target="_blank"><img src="images/portfolio/lab24.PNG" class="section4Image"></a>';
random_img[24] = '<a href="WCP_MM/Labs/Lab_25/" target="_blank"><img src="images/portfolio/lab25.PNG" class="section4Image"></a>';
random_img[25] = '<a href="WCP_MM/Labs/Lab_26/" target="_blank"><img src="images/portfolio/lab26.PNG" class="section4Image"></a>';
random_img[26] = '<a href="WCP_MM/Labs/Lab_27/" target="_blank"><img src="images/portfolio/lab27.PNG" class="section4Image"></a>';
random_img[27] = '<a href="WCP_MM/Labs/Lab_28/" target="_blank"><img src="images/portfolio/lab28.PNG" class="section4Image"></a>';
random_img[28] = '<a href="WCP_MM/Labs/Lab_29/" target="_blank"><img src="images/portfolio/lab29.PNG" class="section4Image"></a>';
random_img[29] = '<a href="WCP_MM/Labs/Lab_30/" target="_blank"><img src="images/portfolio/lab30.PNG" class="section4Image"></a>';
random_img[30] = '<a href="WCP_MM/Labs/Lab_31/" target="_blank"><img src="images/portfolio/lab31.PNG" class="section4Image"></a>';
random_img[31] = '<a href="WCP_MM/Labs/Lab_32/" target="_blank"><img src="images/portfolio/lab32.PNG" class="section4Image"></a>';
random_img[32] = '<a href="WCP_MM/Labs/Lab_33/" target="_blank"><img src="images/portfolio/lab33.PNG" class="section4Image"></a>';
random_img[33] = '<a href="WCP_MM/Labs/Lab_34/" target="_blank"><img src="images/portfolio/lab34.PNG" class="section4Image"></a>';
random_img[34] = '<a href="WCP_MM/Labs/Lab_35/" target="_blank"><img src="images/portfolio/lab35.PNG" class="section4Image"></a>';
random_img[35] = '<a href="WCP_MM/Labs/Lab_36/" target="_blank"><img src="images/portfolio/lab36.PNG" class="section4Image"></a>';
random_img[36] = '<a href="WCP_MM/Labs/Lab_37/" target="_blank"><img src="images/portfolio/lab37.PNG" class="section4Image"></a>';
random_img[37] = '<a href="WCP_MM/Labs/Lab_38/" target="_blank"><img src="images/portfolio/lab38.PNG" class="section4Image"></a>';


$(random_img[random_number]).appendTo("#Sec4ImageHolder");

