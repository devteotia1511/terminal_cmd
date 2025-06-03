// Render GITHUB.md
fetch('GITHUB.md')
    .then(response => response.text())
    .then(md => {
        document.getElementById('github-content').innerHTML = marked.parse(md);
    })
    .catch(err => {
        document.getElementById('github-content').textContent = "Failed to load GITHUB.md";
        console.error(err);
    });

// Render SHELL.md
fetch('SHELL.md')
    .then(response => response.text())
    .then(md => {
        document.getElementById('shell-content').innerHTML = marked.parse(md);
    })
    .catch(err => {
        document.getElementById('shell-content').textContent = "Failed to load SHELL.md";
        console.error(err);
    });

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const toggleButton = document.getElementById('theme-toggle');
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    if (toggleButton) {
        toggleButton.checked = false;
    }
    if (toggleButton) {
        toggleButton.addEventListener('change', () => {
            document.body.classList.toggle('light-theme', toggleButton.checked);
            document.body.classList.toggle('dark-theme', !toggleButton.checked);
        });
    }
});
