var count = 0;
var res = [];
$(document).ready(function(){
$("#throwDice").click(function(){
	if(++count == 5) {
		alert("Last chance");
		$("#Number").hide();
		$("#resultView").show();
	}
        throwAnimatedDice();
  });
$("#result").click(function(){
	var cnt =0;
	console.log(res);
	$.each(res, function( index, value ) {
		if(value == 6) {
			++cnt;
		}
	});
	if(cnt >= 3) {
		alert("* * *");
	} else if(cnt == 2) {
		alert("* *");
	} else if (cnt == 1) {
		alert("*");
	} else {
		alert("Bad Luck! Please Try Again");
	}
	$("#Number").hide();
	$("#resultView").hide();
	$("#New").show();
});
$('#New').click(function(){
	window.location.reload();
});
});
function throwAnimatedDice(elem)
{
    var value = Math.round(Math.random() * 5) + 1;
    displayDice(15, value, $('#dice') );

    return value;
}

function displayDice(times, final, element)
{
  
 
    element.removeClass();
    if (times > 1)
    {
        element.addClass('dice_' + (Math.round(Math.random() * 5) + 1));
        setTimeout(function(){displayDice(times-1,final, element);},100);
        
    }
    else
        element.addClass('dice_' + final);


}