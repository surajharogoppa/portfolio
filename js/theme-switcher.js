





document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const sunIcon = themeToggle.querySelector('.fa-sun');
    const moonIcon = themeToggle.querySelector('.fa-moon');
    // Update the theme colors to ensure good contrast with the profile photo
const lightTheme = {
    '--primary-color': '#3498db',
    '--secondary-color': '#2ecc71',
    '--text-color': '#333',
    '--bg-color': '#f9f9f9',
    '--card-bg': '#fff',
    '--shadow': '0 4px 6px rgba(0, 0, 0, 0.1)'
};

const darkTheme = {
    '--primary-color': '#3498db',
    '--secondary-color': '#2ecc71',
    '--text-color': '#f0f0f0',
    '--bg-color': '#121212',
    '--card-bg': '#1e1e1e',
    '--shadow': '0 4px 6px rgba(0, 0, 0, 0.3)'
};
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-theme');
        sunIcon.classList.add('active');
        moonIcon.classList.remove('active');
    } else {
        moonIcon.classList.add('active');
        sunIcon.classList.remove('active');
    }
    
    // Toggle theme
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            sunIcon.classList.add('active');
            moonIcon.classList.remove('active');
        } else {
            localStorage.setItem('theme', 'light');
            moonIcon.classList.add('active');
            sunIcon.classList.remove('active');
        }
    });
});