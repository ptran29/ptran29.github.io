let PhatMapFinal = L.map('WebmapFinal').setView([30.4515, -91.1871], 11.5)

let PhatColorMap1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(PhatMapFinal)
let PhatLightMap1 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(PhatMapFinal)
let PhatDarkMap1 = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png').addTo(PhatMapFinal)

let myBasemaps = {
  'Light Basemap': PhatLightMap1,
  'Dark Basemap': PhatDarkMap1,
  'Color Basemap': PhatColorMap1
}

PhatGeojsonStyle = function (feature) {
  let TouristSite = feature.properties.NAME
  let StateColor = 'blue'
  let myStyle = {
  color: StateColor,
  weight: 1.5,
  }
  return myStyle
}

function createPopup (feature, featurelayer) {
  let SiteName = feature.properties.NAME
  let Owner = feature.properties.OWNER
  featurelayer.bindPopup('This Baton Rouge Tourist Venue is ' + SiteName + ' and it is own by ' + Owner )
}

PhatGeojsonOptions = {
  style: PhatGeojsonStyle,
  onEachFeature: createPopup
}

L.control.layers(myBasemaps).addTo(PhatMapFinal)
L.geoJSON(TouristVenue, PhatGeojsonOptions).addTo(PhatMapFinal)
