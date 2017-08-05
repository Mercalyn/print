/**
 * @author merc
 * Print() is made for easy debugging, since I absolutely can NOT
 * figure this IDE out.
 */

//pinnard Element is the <p> class specifically for print div
function print( printArgs ){
	//this is so that the console doesn't go off my debug screen
	if (typeof(clearNum) == 'undefined'){
		var clearNum = 0;
	}
	
	//append to printcontainer, iterate line number
	$( "#println" ).append( "<p id='pinnard'>" + printArgs + "</p>" );
	clearNum++;
	
	//check number of terminal lines and reset if over X
	if( clearNum == 54 ){
		document.getElementById("println").innerHTML="";
		clearNum = 0;
	}
}
















function start(){
	var apple = "...And now we know!";
	
	print(apple);
}












