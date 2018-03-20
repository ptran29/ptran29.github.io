for (let i = 0; i < projectData.length; i++) {
  createTitle(projectData[i].title)
  if (projectData[i].thumb === true) {
    console.log('BookAssignment0-' + projectData[i].id + '.png')
  } else {
    console.log('logo.png')
  }
}



function createTitle (title) {
  console.log('Title' + title)
}
function createThumbnail () {}
