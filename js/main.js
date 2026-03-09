// Portfolio Configuration
const defaultConfig = {
    site_title: "Naciye Duygu",
    site_subtitle: "Computer Science Student & Creative Developer",
    bio_text: "2nd year Computer Science student passionate about coding, cats, films, and cooking.",
    passion_title: "What I Love",
    project_title: "My Projects",
    skills_title: "Technical Skills"
};

let config = { ...defaultConfig };

document.addEventListener('DOMContentLoaded', function() {
    updatePageContent();
    setupEventListeners();
});

function updatePageContent() {
    document.getElementById('heroTitle').textContent = config.site_title || defaultConfig.site_title;
    document.getElementById('heroSubtitle').textContent = config.site_subtitle || defaultConfig.site_subtitle;
    document.getElementById('heroBio').textContent = config.bio_text || defaultConfig.bio_text;
    document.getElementById('passionTitle').textContent = config.passion_title || defaultConfig.passion_title;
    document.getElementById('projectTitle').textContent = config.project_title || defaultConfig.project_title;
    document.getElementById('skillsTitle').textContent = config.skills_title || defaultConfig.skills_title;
}

function setupEventListeners() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function updateConfig(newConfig) {
    config = { ...config, ...newConfig };
    updatePageContent();
}
