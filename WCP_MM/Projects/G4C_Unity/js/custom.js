// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
});
$(function(){
	
	
	$.keyframe.define([{
	name:'SlideLeft',
	'0%': {
      'transform': 'translateX(-10%)',
      'opacity': '0',
  },
  '100%': {
      'transform': 'translateY(0)',
      'opacity': '1',
}
}]);
	
	$.keyframe.define([{
	name:'SlideTop',
	'0%': {
      'transform': 'translateY(-10%)',
      'opacity': '0',
  },
  '100%': {
      'transform': 'translateX(0)',
      'opacity': '1',
}
}]);	
	
	$.keyframe.define([{
	name:'SlideBottom',
	'0%': {
      'transform': 'translateY(10%)',
      'opacity': '0',
  },
  '100%': {
      'transform': 'translateX(0)',
      'opacity': '1',
}
}]);	
	
var waypoint = new Waypoint({
  element: document.getElementsByClassName("wh"),
  handler: function() {
    $("#firstSection").animate({
	opacity: 1,
	}, 2000);
	this.destroy();
  },
	offset: 350
});
var waypoint2 = new Waypoint({
  element: document.getElementById("secondSection"),
  handler: function() {
	$('#secondSection').playKeyframe({
		name:'SlideLeft',
		duration:"2s",
		timingFunction:'ease',
	});
	  this.destroy();
  },
	offset: 350
});
var waypoint4 = new Waypoint({
  element: document.getElementById("teamPicDiv"),
  handler: function() {
    $('.fourthSection').playKeyframe({
		name:'SlideTop',
		duration:"2s",
		timingFunction:'ease',
	});
	  this.destroy();
  },
	offset: 350
});
	var waypoint3 = new Waypoint({
  element: document.getElementById("thirdSectio"),
  handler: function() {
      $("#thirdSectio").animate({
	opacity: 1,
	}, 2000);
	  this.destroy();
  },
	offset: 350
});
		var waypoint5 = new Waypoint({
  element: document.getElementById("fifthSection"),
  handler: function() {
  $('#fifthSection').playKeyframe({
		name:'SlideBottom',
		duration:"2s",
		timingFunction:'ease',
	});
	  this.destroy();
  },
	offset: 750
});
});
$("#homeNavBar").on("click", function(){
  document.querySelector('#zeroSection').scrollIntoView({ 
  behavior: 'smooth'});
});
$("#productNavBar").on("click", function(){
  document.querySelector('#firstSection').scrollIntoView({ 
  behavior: 'smooth'});
});
$("#contactNavBar").on("click", function(){
  document.querySelector('#fourthSection').scrollIntoView({
    behavior: 'smooth'
  });
});

