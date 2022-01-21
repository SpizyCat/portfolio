//Get the button:
topBotton = document.querySelector("#topscroll");
bottomBotton = document.querySelector("#downscroll");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBotton.style.opacity = 1;
    bottomBotton.style.opacity = 0;

  } else {
    topBotton.style.opacity = 0;
    bottomBotton.style.opacity = 1;
  }
}