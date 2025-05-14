document.addEventListener("DOMContentLoaded", function () {
// Gestion des modales
    const projectLinks = document.querySelectorAll(".project-link");
    const closeButtons = document.querySelectorAll(".close-modal");
    const modalOverlays = document.querySelectorAll(".modal-overlay");

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    }

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

// Gestion des onglets
/*const tabButtons = document.querySelectorAll(".tab-button");
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
});*/

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabId) {
        // Désactive tous les onglets
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Active l'onglet sélectionné
        const targetButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
        const targetContent = document.getElementById(`${tabId}-tab`);
        
        if(targetButton && targetContent) {
            targetButton.classList.add('active');
            targetContent.classList.add('active');
        }
    }

    // Gestion des clics sur les boutons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            switchTab(tabId);
        });
    });

    // Active l'onglet "about" par défaut
    switchTab('about');
});