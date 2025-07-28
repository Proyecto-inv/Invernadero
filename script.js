document.addEventListener('DOMContentLoaded', function () {
    // Efecto para las imágenes de plantas
    const plantImages = document.querySelectorAll('.plant-image img');

    plantImages.forEach(img => {
        img.addEventListener('mouseover', function () {
            this.style.opacity = '0.8';
            this.style.transition = 'opacity 0.3s ease';
        });

        img.addEventListener('mouseout', function () {
            this.style.opacity = '1';
        });
    });
    // Efecto hover para las tarjetas
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });

    // Efecto para las tarjetas de ventajas
    const advantageCards = document.querySelectorAll('.advantage-card');

    advantageCards.forEach(card => {
        card.addEventListener('mouseover', function () {
            this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseout', function () {
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
});
// Botón de volver arriba
const backToTopBtn = document.getElementById('back-to-top');


window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Carrusel infinito 
document.addEventListener('DOMContentLoaded', function () {
    const carouselTrack = document.querySelector('.carousel-track');
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        const clone = member.cloneNode(true);
        carouselTrack.appendChild(clone);
    });

    const carousel = document.querySelector('.team-carousel');
    carousel.addEventListener('mouseenter', () => {
        carouselTrack.style.animationPlayState = 'paused';
    });

    carousel.addEventListener('mouseleave', () => {
        carouselTrack.style.animationPlayState = 'running';
    });
});