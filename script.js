// Function to render markdown from file into element
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
  
  // Load markdown content
  renderMarkdown('GITHUB.md', 'github-content');
  renderMarkdown('SHELL.md', 'shell-content');
  
  // DOM Ready actions
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
  
    // Set initial theme (light by default)
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    toggleButton.checked = false;
  
    // Theme toggle logic
    toggleButton.addEventListener('change', () => {
      const isDark = toggleButton.checked;
      document.body.classList.toggle('dark-theme', isDark);
      document.body.classList.toggle('light-theme', !isDark);
    });
  
    // Hamburger toggle
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  });