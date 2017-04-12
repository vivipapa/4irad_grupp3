// Run the function switchPage
// when the #-part of the URL changes
window.onhashchange = switchPage;

// Also run it as soon as the page loads
// (the DOM is ready)
$(switchPage);
$(noScrollDown);

function switchPage(){

  // Hide all "pages"
  $('.page').hide();

  // Read the #-part of the url
  let l = location.hash;

  // Don't try to start the game if no players
  // registrered
  if(l=='#spelar' && !window.players){
    location.hash = "#spela";
    return;
  }

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

function noScrollDown(){
  // since the default browser behaviour
  // when clicking a hash link is to scroll
  // down to an element with the corresponding id
  // we need to defeat to on nav a-tags
  $('header nav a').click(function(){
    setTimeout(function(){
      window.scrollTo(0,0);
    },0);
  });
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
  
  $('header nav a[href="' + l + '"]').first().parent().addClass('active');

}