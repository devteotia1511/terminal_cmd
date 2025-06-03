// Function to fetch and render markdown files
function renderMarkdown(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(md => {
            document.getElementById(elementId).innerHTML = marked.parse(md);
        })
        .catch(err => {
            document.getElementById(elementId).textContent = `Failed to load ${file}`;
            console.error(err);
        });
}

// Render markdown files
renderMarkdown('GITHUB.md', 'github-content');
renderMarkdown('SHELL.md', 'shell-content');

// DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // Set initial theme
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    if (toggleButton) {
        toggleButton.checked = false;

        // Theme toggle event
        toggleButton.addEventListener('change', () => {
            document.body.classList.toggle('dark-theme', toggleButton.checked);
            document.body.classList.toggle('light-theme', !toggleButton.checked);
        });
    }

    // Hamburger menu toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
});
