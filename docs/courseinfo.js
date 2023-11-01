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
    if (data && data.message && data.message.chapter) {
        const mainContent = document.querySelector('.main-content');
        
        // Iterate over each chapter and its subtopics
        for (let chapterTitle in data.message.chapter) {
            const chapterDiv = document.createElement('div');
            
            // Create chapter title
            const chapterHeader = document.createElement('h2');
            chapterHeader.textContent = chapterTitle;
            chapterDiv.appendChild(chapterHeader);
            
            // Create subtopics list for the chapter
            const subtopicsList = document.document.createElement('ul');
            data.message.chapter[chapterTitle].subtopics.forEach(subtopic => {
                const listItem = document.createElement('li');
                listItem.textContent = subtopic;
                subtopicsList.appendChild(listItem);
            });
            chapterDiv.appendChild(subtopicsList);
            
            mainContent.appendChild(chapterDiv);
        }
    } else {
        console.error('Unexpected API response format:', data);
    }
})
.catch(error => {
    console.error('Error fetching course information:', error);
});
