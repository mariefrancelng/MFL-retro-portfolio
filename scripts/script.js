document.addEventListener("DOMContentLoaded", function () {
    const langSelector = document.getElementById("lang-select");
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");

    // Mise à jour du texte en fonction de la langue choisie
    function updateLanguage(lang) {
        localStorage.setItem("lang", lang); // Sauvegarde la langue choisie
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });
    }

    // Vérification si langue enregistrée
    const savedLang = localStorage.getItem("lang") || "fr";
    langSelector.value = savedLang;
    updateLanguage(savedLang);

    // Changement de la langue
    langSelector.addEventListener("change", function () {
        updateLanguage(this.value);
    });
});
