/*
This program will split up the amount of change that
the customer will get
*/
// An array of objects that keeps the values of the cents
var cents = [
	{'quarters': 25},
	{'dimes': 10},
	{'nickles': 5},
	{'pennies': 1}
];
// everything will populate when the .click function is used
$("button").click(function(){
	var sale = $("#firstInput").val();
	var customer = $("#secondInput").val();
	var change = customer - sale; // get the change needed
	var dollar = Math.floor(change); // seperate the dollar value
	$("#dollars").html(dollar);
	change -= dollar; 
	change *= 100; // make it easier to deal with the change
	change = Math.round(change); // get rid of rounding point 
	// function to find each piece of change needed and sends it out
	$.each(cents, function(index, value) {
		if(change === 0) { return false; } // stop loop if there is no change
		var type = Object.keys(value); // gets key name 
		var coins = Math.floor(change / value[type]); // finds number of coins
		$("#" + type).html(coins); // push coins into html
		change %= value[type];
	});
});
