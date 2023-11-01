// Fetch course title and subtopics from an external API and populate the courseinfo.html page
fetch('YOUR_API_ENDPOINT_HERE')
.then(response => response.json())
.then(data => {
    // Populate the course title
    const courseTitleElement = document.getElementById('course-title');
    courseTitleElement.textContent = data.courseTitle;

    // Populate the list of subtopics
    const subtopicsList = document.getElementById('subtopics-list');
    data.subtopics.forEach(subtopic => {
        const listItem = document.createElement('li');
        listItem.textContent = subtopic.title;
        subtopicsList.appendChild(listItem);
    });
})
.catch(error => {
    console.error('Error fetching course information:', error);
});
