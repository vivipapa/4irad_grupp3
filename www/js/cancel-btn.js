// Wait for the HTML to load - DOM ready
// before adding a click event to our button
$(addCancelButtonEvent);

// Ask jQuery to call the function
// gotoStartPage when the user clicks
// on Avbryt-button 

function addCancelButtonEvent(){
  $('.cancel-btn').click(gotoStartPage);
}

function gotoStartPage(){
	location.hash = "#start";
}