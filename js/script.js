document.addEventListener("DOMContentLoaded", function () {
    // Code existant pour la gestion des langues
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

    // Code pour le bouton Discover (si présent)
    const discoverButton = document.getElementById('discover-button');
    if (discoverButton) {
        discoverButton.addEventListener('click', function() {
            window.location.href = 'src/home.html';
        });
    }

    // Gestion des onglets
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
  
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


// Gestion des modales
    const projectLinks = document.querySelectorAll(".project-link");
    const closeButtons = document.querySelectorAll(".close-modal");
    const modalOverlays = document.querySelectorAll(".modal-overlay");

    // Fonction pour ouvrir une modale
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    }

    // Fonction pour fermer une modale
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    // Ouvrir la modale quand on clique sur le bouton "En savoir plus"
    projectLinks.forEach(link => {
        link.addEventListener("click", () => {
            const modalId = link.getAttribute("data-modal");
            openModal(modalId);
        });
    });

    // Fermer la modale quand on clique sur le X
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal-overlay");
            if (modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    });

    // Fermer la modale si on clique en dehors du contenu
    modalOverlays.forEach(overlay => {
        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                overlay.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    });
});