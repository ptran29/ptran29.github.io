let projectData = []

projectData[0] = {
  id: 1,
  url: 'http://arcg.is/2rBHUeZ',
  title: 'Book Assignment 01',
  desc: 'Tour of Ho Chi Minh City, which was where I was born.',
  thumb: true,
  keywords: ['Ho Chi Minh City', 'story map', 'tour']
 }


for (let i = 0; i < projectData.length; i++) {
  createTitle(projectData[i].title)
  createThumbnail(projectData[i].thumb, projectData[i].id)
}
