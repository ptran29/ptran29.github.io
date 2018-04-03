let PhatMap3 = L.map('Webmap3').setView([10.815223, 106.624117], 14)

let basemap = ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
L.tileLayer(basemap).addTo(PhatMap3)

let MyMarkerIcon = L.icon({
  iconUrl: 'marker.png',
  iconSize: [65, 90], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

let PhatMarker = L.marker([10.815223, 106.624117], {icon: MyMarkerIcon}).addTo(PhatMap3)

let PhatPoint = [
  [10.804057, 106.636599],
  [10.823616, 106.627673],
  [10.812909, 106.608532] ]

let PhatStyle = {
  color: 'red',
  fillColor: 'blue'
}

let polygon = L.polygon(PhatPoint, PhatStyle).addTo(PhatMap3);
