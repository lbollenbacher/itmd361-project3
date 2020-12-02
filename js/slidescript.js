
// Slideshow Variables

  var i = 0;
  var images = [];

// Image List

  images[0] = "slideshow/birdwatching.jpeg";
  images[1] = "slideshow/dressup.jpeg";
  images[2] = "slideshow/hunting.jpeg";
  images[3] = "slideshow/munching.jpeg";
  images[4] = "slideshow/napping.jpeg"; 
  images[5] = "slideshow/playing.jpeg";
  images[6] = "slideshow/working.jpeg";

// Functions

function changeImg() {
  document.getElementById("slide").src = images[i];
  if (i < images.length - 1) {i++;} 
  else {
    i = 0;
  }
}

function slideShow() {
  window.setInterval("changeImg()", 3000);
}

window.onload = changeImg;
