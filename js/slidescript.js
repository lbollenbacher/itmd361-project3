
// Slideshow Variables

var first = 0;
var images = [];
var time = 3000;

// Image List

images[0] = "slideshow/birdwatching.jpeg";
images[1] = "slideshow/dressup.jpeg";
images[2] = "slideshow/hunting.jpeg";
images[3] = "slideshow/munching.jpeg";
images[4] = "slideshow/napping.jpeg"; 
images[5] = "slideshow/playing.jpeg";
images[6] = "slideshow/working.jpeg";

// Function

function changeImg() {
  document.getElementById("slide").src = images[first];

  if (first < images.length - 1) {i++;} 
  else {
    first = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;
