let PhatMap4 = L.map('Webmap4').setView([30.4515, -91.1871], 11.5)

let basemap = ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
L.tileLayer(basemap).addTo(PhatMap4)

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

function createPopup (feature, featurelayer) {
  let Name = feature.properties.STREET_NAME_COMPLETE
  let Speed = feature.properties.SPEED_MPH
  featurelayer.bindPopup('The speed limit of ' + Name + ' is ' + Speed )
}

PhatGeojsonOptions = {
  style: PhatGeojsonStyle,
  onEachFeature: createPopup
}

L.geoJSON(EBRSpeedLimit, PhatGeojsonOptions).addTo(PhatMap4)
