const slidersConfig = {
    slider1: {
        element: document.querySelector('.promo-slider#slider1'),
        currentSlide: 0,
        interval: null,
        slides: [
            {
                image: "https://via.placeholder.com/300x400?text=Collection+1",
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
            {
                image: "https://via.placeholder.com/300x400?text=Collection+3",
                title: 'Promotions',
                description: 'Découvrez nos dernières promos sportswear',
                link: 'categories/promos.html'
            }
        ]
    },
    slider2: {
        element: document.querySelector('.promo-slider#slider2'),
        currentSlide: 0,
        interval: null,
        slides: [
            {
                image: "https://via.placeholder.com/300x400?text=Promo+1",
                title: 'Soldes d\'Été',
                description: 'Jusqu\'à -50% sur une sélection d\'articles',
                link: 'categories/soldes.html'
            },
            {
                image: "https://via.placeholder.com/300x400?text=Promo+2",
                title: 'Black Friday',
                description: 'Des offres exceptionnelles toute la semaine',
                link: 'categories/blackfriday.html'
            },
            {
                image: "https://via.placeholder.com/300x400?text=Promo+3",
                title: 'Nouveautés',
                description: 'Découvrez les dernières tendances',
                link: 'categories/nouveautes.html'
            }
        ]
    }
};

function updateDots(sliderId) {
    const slider = slidersConfig[sliderId];
    slider.element.querySelectorAll('.slider-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === slider.currentSlide);
    });
}

function changeSlide(sliderId, index = null) {
    const slider = slidersConfig[sliderId];
    const content = slider.element.querySelector('.slider-content');
    
    if (index !== null) {
        slider.currentSlide = index;
    } else {
        slider.currentSlide = (slider.currentSlide + 1) % slider.slides.length;
    }
    
    slider.element.style.opacity = 0;
    
    setTimeout(() => {
        const currentSlideData = slider.slides[slider.currentSlide];
        slider.element.style.backgroundImage = `url(${currentSlideData.image})`;
        content.innerHTML = `
            <h2>${currentSlideData.title}</h2>
            <p>${currentSlideData.description}</p>
            <a href="${currentSlideData.link}" class="cta-button">Découvrir</a>
        `;
        
        slider.element.style.opacity = 1;
        updateDots(sliderId);
    }, 500);
}

// Initialiser les deux sliders
Object.keys(slidersConfig).forEach(sliderId => {
    const slider = slidersConfig[sliderId];
    
    // Initialiser le contenu du slider
    changeSlide(sliderId, 0);
    
    // Ajouter les événements de clic sur les points
    slider.element.querySelectorAll('.slider-dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slider.interval);
            changeSlide(sliderId, index);
            slider.interval = setInterval(() => changeSlide(sliderId), 5000);
        });
    });
    
    // Démarrer le slider automatique
    slider.interval = setInterval(() => changeSlide(sliderId), 5000);
});