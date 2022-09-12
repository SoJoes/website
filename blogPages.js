function myFunc(){
    alert("You clicked me");
}

let navbar = document.getElementById("topnav");
let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  var viewportHeight = window.innerHeight;
  var scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
    header.classList.add('navbarOffsetMargin');
  } else {
    navbar.classList.remove('sticky');
    header.classList.remove('navbarOffsetMargin');
  }
});