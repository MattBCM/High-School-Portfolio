// JavaScript Document
$(function(){
"use strict";
var pressQuotes = [];
pressQuotes[0]="NAPS is by far the most significant cultural force of the decade. — New York Times";
pressQuotes[1]="These days sleeping at your desk is not just acceptable, it's encouraged. — The Atlantic";
pressQuotes[2]="NAPS has changed the way people think about sleep, on a grand scale. — Washington Post";
pressQuotes[3]="Happiness increased 200% since NAPS began promoting siestas. — National Science Review";
pressQuotes[4]="NAPS has ushered in a new era of sleep. — USA Today";
pressQuotes[5]="Not surprisingly, more siestas means more productivity. — Wall Street Journal";
pressQuotes[6]="NAPS is doing the hard work of helping people get the rest they need. — U.S. News";

var rando = Math.floor(Math.random()*pressQuotes.length);

$("#press-quote").html(pressQuotes[rando]);
});