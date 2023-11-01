// Define the API endpoint and request parameters
const API_ENDPOINT = "https://innovatex.azurewebsites.net/courseinfo";
const requestData = {
    "language": "English",
    "course_code": "CSC407"
};

// Fetch course information from the external API and populate the courseinfo.html page
fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
})
.then(response => response.json())
.then(data => {
    // Check if the response contains the expected data
    if (data && data.message) {
        // Populate the course title (chapters)
        const courseTitleElement = document.getElementById('course-title');
        courseTitleElement.textContent = "Course Title: " + data.message.chapters;

        // Populate the list of subtopics
        const subtopicsList = document.getElementById('subtopics-list');
        data.message.subtopics.forEach(subtopic => {
            const listItem = document.createElement('li');
            listItem.textContent = subtopic;
            subtopicsList.appendChild(listItem);
        });
    } else {
        console.error('Unexpected API response format:', data);
    }
})
.catch(error => {
    console.error('Error fetching course information:', error);
});
