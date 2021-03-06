let projectArray1 = [
  1,
  'http://arcg.is/2rBHUeZ',
  'Book Assignment 01',
  'Tour of Ho Chi Minh City, which was where I was born.',
  true
]

let projectObject1 = {
    id: 1,
    url: 'http://arcg.is/2rBHUeZ',
    title: 'Book Assignment 01',
    desc: 'Tour of Ho Chi Minh City, which was where I was born.',
    thumb: true,
  }

let projectArray2 = [
    2,
    'https://www.arcgis.com/apps/View/index.html?appid=a8c111473e1c439e8ad83db8d026f587',
    'Book Assignment 02',
    'Web App that shows 2.5+ Magnitude Earthquakes around the world in the past 24 hours',
    true,
    ['BookAssignment02', 'Book', 'Assignment']
  ]

let projectObject2 = {
    id: 2,
    url: 'https://www.arcgis.com/apps/View/index.html?appid=a8c111473e1c439e8ad83db8d026f587',
    title: 'Book Assignment 02',
    desc: 'Web App that shows 2.5+ Magnitude Earthquakes around the world in the past 24 hours',
    thumb: true,
    keywords: ['BookAssignment02','Book','Assignment']
  }

let projects = {projectObject1, projectObject2}

console.log(projects);

console.log(projectArray1[1])
console.log(projectObject1.title)
console.log(projectObject1["Book Assignment 01"])

console.log(projectArray2[2])
console.log(projectObject2.title)
console.log(projectObject2["Book Assignment 02"])
