function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

var navbar = "O";
var sticky = 10;

function declareVars() {
    // Get the navbar
    navbar = document.getElementById("topnav");

    // Get the offset position of the navbar
    sticky = getOffset(navbar).top;
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {

  if (window.pageYOffset >= sticky) {
    document.getElementById('topnav').style.position = "fixed";
    document.getElementById('topnav').style.top = "0px";
  } else {
    document.getElementById('topnav').style.position = "relative";
  }
}