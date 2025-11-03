// script.js - Défilement fluide
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav ul li a');
  
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Empêcher le comportement par défaut du lien
      const targetId = this.getAttribute('href').substring(1); // Récupère l'ID de la section
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 50, // Ajuste la position pour un meilleur alignement
        behavior: 'smooth'
      });
    });
  });
});
