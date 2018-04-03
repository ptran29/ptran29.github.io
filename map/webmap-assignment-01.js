//let PhatMap = L.map('Webmap1').setView([yourLat, yourLon], yourZoom)
let PhatMap = L.map('Webmap1').setView([10.815223, 106.624117], 14)

let basemap = ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
L.tileLayer(basemap).addTo(PhatMap)

let PhatPoint = L.marker([10.815223, 106.624117]).addTo(PhatMap)

let PhatPoint = L.line([10.815223, 106.624117], [10.837949, 106.615716]).addTo(PhatMap)

let polygon = L.polygon([
  [10.804057, 106.636599],
  [10.823616, 106.627673],
  [10.812909, 106.608532]
]).addTo(PhatMap);

polygon.bindPopup('Tay Thanh District')
PhatPoint.bindPopup('VietcomBank')

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mymap.on('click', logCurrentCoordinates)

mymap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
