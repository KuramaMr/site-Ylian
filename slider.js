const sliders = [
    {
        image:"https://via.placeholder.com/300x400?text=Collection+1",
        title: 'Nouvelle Collection',
        description: 'Découvrez nos dernières nouveautés sportswear',
        link: 'categories/nouveautes.html'
    },
    {
        image: "https://via.placeholder.com/300x400?text=Collection+2",
        title: 'Collection Été',
        description: 'Préparez-vous pour l\'été avec notre nouvelle gamme',
        link: 'categories/ete.html'
    },
    // Ajoutez autant de slides que vous voulez
];

let currentSlide = 0;
let slideInterval;

function updateDots() {
    document.querySelectorAll('.slider-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function changeSlide(index = null) {
    const slider = document.querySelector('.promo-slider');
    const content = document.querySelector('.slider-content');
    
    if (index !== null) {
        currentSlide = index;
    } else {
        currentSlide = (currentSlide + 1) % sliders.length;
    }
    
    slider.style.opacity = 0;
    
    setTimeout(() => {
        slider.style.backgroundImage = `url(${sliders[currentSlide].image})`;
        content.innerHTML = `
            <h2>${sliders[currentSlide].title}</h2>
            <p>${sliders[currentSlide].description}</p>
            <a href="${sliders[currentSlide].link}" class="cta-button">Découvrir</a>
        `;
        
        slider.style.opacity = 1;
        updateDots();
    }, 500);
}

// Ajouter les événements de clic sur les points
document.querySelectorAll('.slider-dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        changeSlide(index);
        slideInterval = setInterval(() => changeSlide(), 5000);
    });
});

// Démarrer le slider automatique
slideInterval = setInterval(() => changeSlide(), 5000);