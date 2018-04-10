let PhatMap5 = L.map('Webmap5').setView([30.4515, -91.1871], 11.5)

let PhatColorMap1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(PhatMap5)
let PhatLightMap1 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png').addTo(PhatMap5)
let PhatDarkMap1 = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png').addTo(PhatMap5)

let myBasemaps = {
  'Color Basemap': PhatColorMap1,
  'Light Basemap': PhatLightMap1,
  'Dark Basemap': PhatDarkMap1
}


PhatGeojsonStyle = function (feature) {
  let SpeedLimit = feature.properties.SPEED_MPH
  let StateColor = 'blue'
  if (SpeedLimit < 30) {StateColor = 'red'}
  let myStyle = {
  color: StateColor,
  weight: 1.5,
  }
  return myStyle
}


PhatGeojsonOptions = {
  style: PhatGeojsonStyle,
}

L.control.layers(myBasemaps).addTo(PhatMap5)
L.geoJSON(EBRSpeedLimit, PhatGeojsonOptions).addTo(PhatMap5)
