// ==============================
// Portfolio Main JS
// ==============================

// ------------------------------
// Smooth Scroll for Navigation
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ------------------------------
// Initialize Materialize
// ------------------------------
document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit(); // Auto init all Materialize components
});

// ------------------------------
// Lazy Load Images
// ------------------------------
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
});

// ------------------------------
// Footer Year Auto-update
// ------------------------------
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// ------------------------------
// Internationalization (i18n)
// ------------------------------
const lang = {
    en: {
        navHome: "Home",
        navProjects: "Projects",
        navAbout: "About",
        navContact: "Contact",
        heroGreeting: "Hello, I'm Ismail Rio Handoyo",
        heroRole: "AI & Mobile Developer",
        heroDesc: "Passionate about AI, Web, and Mobile development. Let's build something amazing together!",
        btnDownloadCV: "Download CV",
        sectionProjects: "Projects",
        sectionAbout: "About Me",
        proj1Title: 'People Counting',
        proj1Desc: 'In-store counting for traffic, heatmap, and journey analytics. High accuracy and real-time.',
        proj2Title: 'Merchandiser App',
        proj2Desc: 'Merchandising system with high accuracy and real-time features.',
        sectionContact: "Contact"
    },
    id: {
        navHome: "Beranda",
        navProjects: "Proyek",
        navAbout: "Tentang",
        navContact: "Kontak",
        heroGreeting: "Halo, Saya Ismail Rio Handoyo",
        heroRole: "Pengembang AI & Mobile",
        heroDesc: "Bersemangat di bidang AI, Web, dan Mobile. Mari kita bangun sesuatu yang luar biasa bersama!",
        btnDownloadCV: "Unduh CV",
        sectionProjects: "Proyek",
        sectionAbout: "Tentang Saya",
        proj1Title: 'People Counting',
        proj1Desc: 'Sistem counting di toko ritel untuk traffic, heatmap, dan journey analytics. Akurasi tinggi dan realtime.',
        proj2Title: 'Merchandiser App',
        proj2Desc: 'Sistem Merchandise dengan Akurasi tinggi dan realtime.',
        sectionContact: "Kontak"
    }
};

// Apply selected language
function applyLang(selectedLang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (lang[selectedLang] && lang[selectedLang][key]) {
            el.textContent = lang[selectedLang][key];
        }
    });
    updateCVLink(selectedLang);
}

// ------------------------------
// Dynamic CV Link per Language
// ------------------------------
function updateCVLink(langCode) {
    const cvBtn = document.getElementById('btn-download-cv');
    if (!cvBtn) return;
    cvBtn.href = langCode === 'id'
        ? 'assets/cv/CV_Ismail_Rio_Handoyo_ID.pdf'
        : 'assets/cv/CV_Ismail_Rio_Handoyo_EN.pdf';
}

// ------------------------------
// Language Switcher
// ------------------------------
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const selectedLang = this.getAttribute('data-lang');
        applyLang(selectedLang);
        localStorage.setItem('preferredLang', selectedLang);
    });
});

// ------------------------------
// Load preferred language on start
// ------------------------------
const savedLang = localStorage.getItem('preferredLang') || 'en';
applyLang(savedLang);

// ------------------------------
// Dark Mode Toggle
// ------------------------------
const darkToggle = document.getElementById('dark-toggle');
if (darkToggle) {
    darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    });

    // Load saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}
