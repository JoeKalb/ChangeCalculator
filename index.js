/*
This program will split up the amount of change that
the customer will get
*/

// everything will populate when the .click function is used
$("button").click(function(){
	var sale = $("#firstInput").val();
	var customer = $("#secondInput").val();
	var change = customer - sale;
	var dollar = Math.floor(change);
	$("#dollars").html(dollar);
	change -= dollar;
	var quarters = Math.floor(change / .25);
	$("#quarters").html(quarters);
	change %= .25; //change = change % .25
	var dimes = Math.floor(change / .1);
	$("#dimes").html(dimes);
	change %= .1;
	var nickles = Math.floor(change / .05);
	$("#nickles").html(nickles);
	change %= .05;
	var pennies = Math.floor(change / .01);
	$("#pennies").html(pennies);
});