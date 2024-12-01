// Toggle the Add Project Form visibility
function toggleAddProjectForm() {
    const form = document.getElementById('add-project-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}
function showEducationDetails(education) {
    const educationDetails = document.getElementById("education-details");
    const educationTitle = document.getElementById("education-title");
    const educationDescription = document.getElementById("education-description");

    if (education === "MCA") {
        educationTitle.textContent = "Master of Computer Applications (MCA)";
        educationDescription.textContent =
            "Currently pursuing MCA at Sri Padmavati Mahila Visvavidyalayam, Tirupati. This program has allowed me to dive deeper into software development, web technologies, and problem-solving. I'm passionate about applying these skills in real-world projects.";
    } else if (education === "BSC") {
        educationTitle.textContent = "B.Sc Computer Science";
        educationDescription.textContent =
            "Completed B.Sc Computer Science from Punyagiri Degree College, Vizianagaram. This degree sparked my interest in programming, algorithms, and technology, laying a solid foundation for my journey in the IT field.";
    }

    educationDetails.style.display = "block";
}

function closeEducationDetails() {
    document.getElementById("education-details").style.display = "none";
}

// Show Project Details
function showProjectDetails(title, description) {
    // Get the project detail container and populate it with data
    const detailContainer = document.getElementById("project-detail-container");
    const projectTitle = document.getElementById("project-title");
    const projectDescriptionDetail = document.getElementById("project-description-detail");

    projectTitle.textContent = title;
    projectDescriptionDetail.textContent = description;

    // Display the container
    detailContainer.style.display = "block";
    detailContainer.style.animation = "fadeIn 0.5s ease";
}

// Close the project detail card when clicking outside
document.addEventListener("click", function (event) {
    const detailContainer = document.getElementById("project-detail-container");
    if (!event.target.closest(".project-detail-container") && !event.target.closest(".project")) {
        detailContainer.style.display = "none";
    }
});
// Show the project details for existing projects
function showProjectDetails(title, description) {
    document.getElementById('project-title').textContent = title;
    document.getElementById('project-description-detail').textContent = description;
    document.getElementById('project-detail-container').style.display = 'block';
}

// Show the form to add a new project
function showAddProjectForm() {
    document.getElementById('project-detail-container').style.display = 'block';
    document.getElementById('new-project-title').value = '';
    document.getElementById('new-project-description').value = '';
}

// Save the new project and add it to the list
function saveNewProject() {
    const title = document.getElementById('new-project-title').value;
    const description = document.getElementById('new-project-description').value;
    if (title && description) {
        // Create new project element
        const projectContainer = document.getElementById('projects-container');
        const newProject = document.createElement('div');
        newProject.classList.add('project');
        newProject.onclick = () => showProjectDetails(title, description);
        newProject.innerHTML = `<div class="project-title">${title}</div>`;
        projectContainer.appendChild(newProject);

        // Hide the add project form
        cancelAddProject();
    } else {
        alert('Please fill in both the title and description!');
    }
}

// Cancel adding the new project
function cancelAddProject() {
    document.getElementById('project-detail-container').style.display = 'none';
}


// Add fade-in animation
document.head.insertAdjacentHTML(
    "beforeend",
    `<style>
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>`
);
