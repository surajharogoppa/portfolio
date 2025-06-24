document.addEventListener('DOMContentLoaded', function() {
    // Skill level animations
    const skills = [
        { name: 'Java', level: '90%' },
        { name: 'Python', level: '85%' },
        { name: 'Django', level: '80%' },
        { name: 'Spring Boot', level: '75%' },
        { name: 'Selenium', level: '85%' },
        { name: 'MySQL', level: '80%' },
        { name: 'HTML/CSS', level: '90%' },
        { name: 'JavaScript', level: '75%' }
    ];
    
    const skillsContainer = document.querySelector('.skills-grid');
    
    if (skillsContainer) {
        skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.className = 'skill-category';
            skillElement.innerHTML = `
                <h3>${skill.name}</h3>
                <div class="skill-bar">
                    <div class="skill-level" style="--skill-level: ${skill.level}"></div>
                </div>
                <span class="skill-percent">${skill.level}</span>
            `;
            skillsContainer.appendChild(skillElement);
        });
    }
    
    // Floating elements animation
    const floatElements = document.querySelectorAll('.project-card, .certificate-card');
    
    floatElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Background particles (optional)
    // You can add a more sophisticated particle system here if desired
});