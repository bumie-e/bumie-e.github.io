// Fetch subtopics and content from an external API
fetch('YOUR_API_ENDPOINT_HERE')
.then(response => response.json())
.then(data => {
    const subtopicsContainer = document.getElementById('subtopics-container');
    data.subtopics.forEach(subtopic => {
        const subtopicDiv = document.createElement('div');
        subtopicDiv.className = 'subtopic';

        const subtopicTitle = document.createElement('h3');
        subtopicTitle.textContent = `Subtopic: ${subtopic.title}`;
        subtopicDiv.appendChild(subtopicTitle);

        const subtopicContent = document.createElement('p');
        subtopicContent.textContent = subtopic.content;
        subtopicDiv.appendChild(subtopicContent);

        subtopicsContainer.appendChild(subtopicDiv);
    });
})
.catch(error => {
    console.error('Error fetching subtopics:', error);
});
