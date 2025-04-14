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

// home.html --> section "main"
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content, .tabcontent");
  
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        const tab = button.getAttribute("data-tab");
  
        // Retirer la classe "active" de tous les boutons
        tabButtons.forEach(btn => btn.classList.remove("active"));
  
        // Ajouter "active" sur le bouton cliqué
        button.classList.add("active");
  
        // Masquer tous les contenus
        tabContents.forEach(content => content.classList.remove("active"));
  
        // Afficher le bon contenu
        const activeContent = document.getElementById(`${tab}-tab`);
        if (activeContent) activeContent.classList.add("active");
      });
    });
  });

  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.dataset.tab;
  
      document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
      button.classList.add('active');
      document.getElementById(`${tab}-tab`).classList.add('active');
    });
  });
  
