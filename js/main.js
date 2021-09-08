//This is the js for the map to load on the page
var mymap = L.map('mapid').setView([42.361145, -71.057083], 18);

//Create a constant marker to put on the map with the incomming latitude and longitude
const marker = L.marker([42.361145, -71.057083]).addTo(mymap);
//set marker latitude and longitude
marker.setLatLng([42.361145, -71.057083]);

//Adds a tile layer to the map using the mapbox api and adds attributions
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

