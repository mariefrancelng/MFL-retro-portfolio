document.addEventListener("DOMContentLoaded", function () {
    const langSelector = document.getElementById("lang-select");
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");


    function updateLanguage(lang) {
        localStorage.setItem("lang", lang); 
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });
    }

    const savedLang = localStorage.getItem("lang") || "fr";
    langSelector.value = savedLang;
    updateLanguage(savedLang);

    langSelector.addEventListener("change", function () {
        updateLanguage(this.value);
    });
});

const discoverButton = document.getElementById('discover-button');

discoverButton.addEventListener('click', function() {
    window.location.href = 'src/home.html';
});