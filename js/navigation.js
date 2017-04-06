// Run the function switchPage
// when the #-part of the URL changes
window.onhashchange = switchPage;

// Also run it as soon as the page loads
// (the DOM is ready)
$(switchPage);

function switchPage(){

  // Hide all "pages"
  $('.page').hide();

  // Read the #-part of the url
  let l = location.hash;

  // If no content in the #-part of the url
  if(!l){
    l = '#start';
  }

  // Since the hash-part is equal
  // to an id selector use it select
  // the page to show
  $(l).show();

  // Call makeMenuChoiceActive
  makeMenuChoiceActive(l);

}


function makeMenuChoiceActive(l){

  // Remove the class active from a li tags
  // in the menu
  $('header nav li').removeClass('active');

  // Find a-tag that is inside a nav-tag 
  // that in turn is inside a header-tag
  // but only if the href attribute has the
  // value stored in the variable l

  // If we have found the a tag, 
  // find it's parent (a li-tag) and add
  // the class active to it
  
  $('header nav a[href="' + l + '"]')
    .parent().addClass('active');

}