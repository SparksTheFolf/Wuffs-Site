// script.js
document.addEventListener('DOMContentLoaded', function () {
    const projectsContainer = document.getElementById('projects-container');

    // Fetch project data from JSON files and render them
    fetchProjects();

    async function fetchProjects() {
        try {
            const response = await fetch('./projects');
            const projects = await response.json();

            projects.forEach(project => {
                renderProject(project);
            });
        } catch (error) {
            console.error('Error fetching or parsing JSON:', error);
        }
    }

    function renderProject(project) {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        const imageElement = document.createElement('img');
        imageElement.src = `images/${project.image}`;
        imageElement.alt = `${project.title} Image`;
        imageElement.width = 100;

        const detailsElement = document.createElement('div');
        detailsElement.classList.add('project-details');

        const titleElement = document.createElement('h2');
        titleElement.textContent = project.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = project.description;

        const dateElement = document.createElement('p');
        dateElement.textContent = `Date: ${project.startDate} - ${project.endDate}`;

        detailsElement.appendChild(titleElement);
        detailsElement.appendChild(descriptionElement);
        detailsElement.appendChild(dateElement);

        projectElement.appendChild(imageElement);
        projectElement.appendChild(detailsElement);

        projectsContainer.appendChild(projectElement);
    }
});
