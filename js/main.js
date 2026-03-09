// Portfolyo Ayarları
const defaultConfig = {
    site_title: "Naciye Duygu",
    site_subtitle: "Bilgisayar Mühendisliği Öğrencisi & Yaratıcı Geliştirici",
    bio_text: "Kod yazmaya, kedilere, filmlere ve yemek yapmaya ilgi duyan 2. sınıf bilgisayar mühendisliği öğrencisi.",
    passion_title: "Sevdiklerim",
    project_title: "Projelerim",
    skills_title: "Teknik Yetenekler"
};

let config = { ...defaultConfig };

document.addEventListener("DOMContentLoaded", function () {
    updatePageContent();
    setupEventListeners();
});

// Sayfadaki yazıları güncelle
function updatePageContent() {
    document.getElementById("heroTitle").textContent =
        config.site_title || defaultConfig.site_title;

    document.getElementById("heroSubtitle").textContent =
        config.site_subtitle || defaultConfig.site_subtitle;

    document.getElementById("heroBio").textContent =
        config.bio_text || defaultConfig.bio_text;

    document.getElementById("passionTitle").textContent =
        config.passion_title || defaultConfig.passion_title;

    document.getElementById("projectTitle").textContent =
        config.project_title || defaultConfig.project_title;

    document.getElementById("skillsTitle").textContent =
        config.skills_title || defaultConfig.skills_title;
}

// Menü linklerinde yumuşak kaydırma (smooth scroll)
function setupEventListeners() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
}

// Ayarları değiştirme fonksiyonu
function updateConfig(newConfig) {
    config = { ...config, ...newConfig };
    updatePageContent();
}
