let PhatMapFinal = L.map('WebmapFinal').setView([30.4515, -91.1871], 11.5)

let PhatColorMap1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(PhatMapFinal)
let PhatLightMap1 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(PhatMapFinal)
let PhatDarkMap1 = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png').addTo(PhatMapFinal)

let MyMarkerIcon = L.icon({
  iconUrl: 'Venue.png',
  iconSize: [320, 170], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

let PhatMarker = L.marker([30.430840, -91.378721], {icon: MyMarkerIcon}).addTo(PhatMapFinal).bindPopup('This web map shows all the tourist venues in Baton Rouge and its owner.<br> Design by Phat Tran.<br> My portfolio can be access at https://ptran29.github.io/')


let myBasemaps = {
  'Light Basemap': PhatLightMap1,
  'Dark Basemap': PhatDarkMap1,
  'Color Basemap': PhatColorMap1
}

let myLayerStyle = {
  color: 'Blue',
  radius: 5
}

function createCircles (feature, latlng) {
  return L.circleMarker(latlng, myLayerStyle)
}

let myLayerOptions = {
  pointToLayer: createCircles
}


function createPopup (feature, featurelayer) {
  let SiteName = feature.properties.NAME
  let Owner = feature.properties.OWNER
  let Lat = feature.properties.Y
  let Long = feature.properties.X
  featurelayer.bindPopup('This Baton Rouge Tourist Venue is ' + SiteName + ' and it is own by ' + Owner + '.')
}


L.control.layers(myBasemaps).addTo(PhatMapFinal)
L.geoJSON(TouristVenue, myLayerOptions).addTo(PhatMapFinal)
