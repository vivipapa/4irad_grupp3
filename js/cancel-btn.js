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

  // Hide all "pages"
  $('.page').hide();

  let l = '#start';
  
  //Show Start page
  $(l).show();

  location = '#start';

  }