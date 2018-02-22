let projects = [ {
  id: 1,
  url: 'http://arcg.is/2rBHUeZ',
  title: 'Book Assignment 01',
  desc: 'Tour of Ho Chi Minh City, which was where I was born.',
  thumb: true,
  keywords: ['Ho Chi Minh City', 'story map', 'tour']
 } ,
 {
 id: 2,
 url: 'https://www.arcgis.com/apps/View/index.html?appid=a8c111473e1c439e8ad83db8d026f587',
 title: 'Book Assignment 02',
 desc: 'Web App that shows 2.5+ Magnitude Earthquakes around the world in the past 24 hours',
 thumb: false,
 keywords: ['Earthquakes', 'USGS', 'ArcGIS']
} ]

for (let i=0; i < projects.length; i++) {
  let x = i + 1
  console.log('BookAssignment0-' + x + '.png');
}
