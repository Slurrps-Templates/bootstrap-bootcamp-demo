//This is the js for the map to load on the page

//Map variable set to an instance of L.map grabbing the ID of the map container
//Also turning off all control to make a static map
//Then setting the view to the location of the businuess
var mymap = L.map('mapid',
{
  zoomControl: false
}).setView([42.37330, -71.06225], 20);

//Create a constant marker to put on the map with the incomming latitude and longitude
//Add to the map
const marker = L.marker([42.37330, -71.06225]).addTo(mymap);

//Add the title layer to the map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
{
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/outdoors-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(mymap);
