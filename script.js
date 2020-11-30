// Map

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.88480472032102, lng: -87.62735095043277},
    zoom: 15,
  });
}

google.maps.event.addEventListener(window, 'load', init);
