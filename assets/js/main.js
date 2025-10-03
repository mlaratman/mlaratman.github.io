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
        labelId: 'Indonesia',
        labelEn: 'English',
        navHome: "Home",
        navProjects: "Projects",
        navAbout: "About",
        navContact: "Contact",
        heroGreeting: "Hello, I'm Ismail Rio Handoyo",
        heroRole: "Android Apps & Backend Developer",
        heroDesc: "Building Android & Backend apps since 2018, focusing on solid architecture, real-time data integration" +
            " and intuitive UI/UX to support large-scale business needs.",
        btnDownloadCV: "Download CV",
        sectionProjects: "Projects",
        sectionAbout: "About Me",
        sectionAboutDesc: "I’m an Android & Backend developer with a focus on tranforming complex idea into fast, secure," +
            " and easy to use with Mobile Device.\n" +
            " With 7+ years of expiriences on FMCG, analyst, and mobile system.\n" +
            " My Objective is simple : creating technology that is practical, reliable, and user friendly.",
        proj1Title: 'People Counting',
        proj1Desc: 'In-store counting for traffic, heatmap, and journey analytics. High accuracy and real-time.',
        proj2Title: 'Merchandiser App',
        proj2Desc: 'Merchandising system with high accuracy and real-time features.',
        projCase: 'Case Study',
        kitMobile: 'Mobile',
        kitMobileub: 'Core mobile stack for modern Android apps.',

        kitBackend: 'Backend',
        kitBackendSub: 'APIs that are reliable, secure, and scalable.',
        kitDb: 'Database',
        kitDbSub: 'Reliable databases for analytics & apps.',
        kitAi: 'AI / Computer Vision',
        kitAiSub: 'Practical AI on-device & at the edge.',
        kitUiux: 'UI / UX',
        kitUiuxSub: 'Usability-first with clean, consistent interfaces.',

        aboutExp: 'Experience',
        aboutExpSub: 'Some of the major client i have works with in 7+ years.',

        sectionContact: "Contact"
    },
    id: {
        labelId: 'Indonesia',
        labelEn: 'Inggris',
        navHome: "Beranda",
        navProjects: "Proyek",
        navAbout: "Tentang",
        navContact: "Kontak",
        heroGreeting: "Halo, Saya Ismail Rio Handoyo",
        heroRole: "Pengembang aplikasi Android & Backend",
        heroDesc: "Membuat aplikasi Android & Backend sejak 2018, berfokus pada arsitektur solid, integrasi data real-time" +
            " dan UI/UX yang intuitif untuk mendukung kebutuhan bisnis skala besar.",
        btnDownloadCV: "Unduh CV",
        sectionProjects: "Proyek",
        sectionAbout: "Tentang Saya",
        sectionAboutDesc: "Saya developer Android & Backend dengan fokus ke mengubah ide kompleks menjadi aplikasi cepat, aman," +
            " dan mudah digunakan pada " +
            " Mobile Device.\n" +
            " Dengan lebih dari 7+ tahun pengalaman di FMCG, analitik, dan sistem Mobile.\n" +
            " Tujuan saya sederhana : menghadirkan teknologi yang praktis, mudah dipakai, dan dapat diandalkan.",
        proj1Title: 'People Counting',
        proj1Desc: 'Sistem counting di toko ritel untuk traffic, heatmap, dan journey analytics. Akurasi tinggi dan realtime.',
        proj2Title: 'Merchandiser App',
        proj2Desc: 'Sistem Merchandise dengan Akurasi tinggi dan realtime.',
        projCase: 'Studi Kasus',
        kitMobile: 'Mobile',
        kitMobileub: 'Stack mobile inti untuk aplikasi Android modern.',

        kitBackend: 'Backend',
        kitBackendSub: 'API yang andal, aman, dan scalable.',
        kitDb: 'Database',
        kitDbSub: 'Analitik cepat + storage transaksional yang stabil.',
        kitAi: 'AI / Computer Vision',
        kitAiSub: 'AI praktis di perangkat & edge.',
        kitUiux: 'UI / UX',
        kitUiuxSub: 'Fokus usability dengan antarmuka yang konsisten.',

        aboutExp: 'Pengalaman',
        aboutExpSub: 'Saya pernah bekerja sama dengan beberapa klient besar berikut selama 7+ tahun.',

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


function setActiveLangButton(lang) {
    document.querySelectorAll(".lang-btn").forEach(btn => {
        if (btn.getAttribute("data-lang") === lang) {
            btn.classList.add("active");
            btn.setAttribute("aria-pressed", "true");
        } else {
            btn.classList.remove("active");
            btn.setAttribute("aria-pressed", "false");
        }
    });
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
        // Reset all buttons
        document.querySelectorAll(".lang-btn").forEach(b => b.setAttribute("aria-pressed", "false"));
        // Set clicked one as active
        btn.setAttribute("aria-pressed", "true");

        const selectedLang = this.getAttribute('data-lang');
        applyLang(selectedLang);
        setActiveLangButton(selectedLang);
        localStorage.setItem('preferredLang', selectedLang);
    });
});

// ------------------------------
// Load preferred language on start
// ------------------------------
const savedLang = localStorage.getItem('preferredLang') || 'en';
applyLang(savedLang);
setActiveLangButton(savedLang);

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
