// Define the API endpoint and request parameters
const API_ENDPOINT = "https://innovatex.azurewebsites.net/course";
const requestData = {
    "language": "English",
    "course_code": "CSC401",
    "page_number": 0
};

// Fetch course information from the external API and populate the courses.html page
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
        // Populate the course title
        const courseTitleElement = document.getElementById('course-title');
        courseTitleElement.textContent = "Course Title: " + data.message["course-title"];

        // Populate the list of subtopics
        const subtopicsContainer = document.getElementById('subtopics-container');
        for (let subtopicTitle in data.message.subtopics) {
            const subtopicDiv = document.createElement('div');
            const subtopicHeader = document.createElement('h3');
            const subtopicContent = document.createElement('p');

            subtopicHeader.textContent = subtopicTitle;
            subtopicContent.textContent = data.message.subtopics[subtopicTitle].indepth_response;

            subtopicDiv.appendChild(subtopicHeader);
            subtopicDiv.appendChild(subtopicContent);
            subtopicsContainer.appendChild(subtopicDiv);
        }
    } else {
        console.error('Unexpected API response format:', data);
    }
})
.catch(error => {
    console.error('Error fetching course information:', error);
});
