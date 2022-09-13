function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

var navbar = "O";
var sticky = 10;
var progressing = true;

function declareVars() {
    // Get the navbar
    navbar = document.getElementById("topsticky");

    // Get the offset position of the navbar
    sticky = getOffset(navbar).top;

    const scrollline = document.querySelector('.scroll-line');

    window.addEventListener('scroll', fillscrollline);
}

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {

  if (window.pageYOffset >= sticky) {
    document.getElementById('topsticky').style.position = "fixed";
    document.getElementById('topsticky').style.top = "0px";

    document.getElementById('ontop').style.position = "fixed";
    document.getElementById('ontop').style.top = "48px";

  } else {
    document.getElementById('topsticky').style.position = "relative";
    document.getElementById('ontop').style.position = "relative";
    document.getElementById('ontop').style.top = "0px";
  }

  if (progressing == true){
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      // full scroll height - height of html - height of footer

      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight - convertRemToPixels(18);
      var scrolled = (winScroll / height) * 100;

      document.getElementById("myBar").style.width = scrolled + "%";

      if (scrolled >=100){
        progressing = false;

        document.getElementById("myBar").style.width = "100%";
        document.getElementById("myBar").style.background = "linear-gradient(to right, #81ed86 , #81ed86)";
  }}
}