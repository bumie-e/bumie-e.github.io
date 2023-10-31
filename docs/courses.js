// Fetch subtopics from an external API and populate the side navigation
fetch('YOUR_API_ENDPOINT_HERE')
.then(response => response.json())
.then(data => {
    const subtopicsNav = document.getElementById('subtopics-nav');
    data.subtopics.forEach(subtopic => {
        const subtopicLink = document.createElement('a');
        subtopicLink.href = "#"; // You can replace this with actual links if needed
        subtopicLink.textContent = subtopic.title;
        subtopicsNav.appendChild(subtopicLink);
    });
})
.catch(error => {
    console.error('Error fetching subtopics:', error);
});
