const CATEGORIES = {
    tshirts: "T-shirts & Tops",
    chaussures: "Chaussures",
    shorts: "Shorts",
    chaussettes: "Chaussettes",
    accessoires: "Accessoires"
};

async function loadCategoryProducts() {
    // Récupérer la catégorie depuis l'URL
    const category = window.location.pathname.split('/').pop().replace('.html', '');
    
    try {
        // Simulons une API avec des données statiques pour l'exemple
        const products = await fetchProductsByCategory(category);
        displayProducts(products);
    } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
    }
}

function fetchProductsByCategory(category) {
    // Données statiques pour les tests
    const products = [
        {
            id: 1,
            title: "T-shirt Performance",
            price: 29.99,
            image: "https://via.placeholder.com/300x400?text=T-shirt+1",
            category: "tshirts"
        },
        {
            id: 2,
            title: "T-shirt Running",
            price: 24.99,
            image: "https://via.placeholder.com/300x400?text=T-shirt+2",
            category: "tshirts"
        },
        {
            id: 3,
            title: "T-shirt Training",
            price: 34.99,
            image: "https://via.placeholder.com/300x400?text=T-shirt+3",
            category: "tshirts"
        },
        {
            id: 4,
            title: "T-shirt Chassing",
            price: 44.99,
            image: "https://via.placeholder.com/300x400?text=T-shirt+4",
            category: "tshirts"
        },
        {
            id: 5,
            title: "Chaussures Performance",
            price: 29.99,
            image: "https://via.placeholder.com/300x400?text=Chaussures+1",
            category: "chaussures"
        },
        {
            id: 6,
            title: "Chaussures Running",
            price: 24.99,
            image: "https://via.placeholder.com/300x400?text=Chaussures+2",
            category: "chaussures"
        },
        {
            id: 7,
            title: "Chaussures Training",
            price: 34.99,
            image: "https://via.placeholder.com/300x400?text=Chaussures+3",
            category: "chaussures"
        },
        {
            id: 8,
            title: "Chaussures Chassing",
            price: 44.99,
            image: "https://via.placeholder.com/300x400?text=Chaussures+4",
            category: "chaussures"
        },
        {
            id: 5,
            title: "Shorts Performance",
            price: 29.99,
            image: "https://via.placeholder.com/300x400?text=Shorts+1",
            category: "shorts"
        },
        {
            id: 6,
            title: "Shorts Running",
            price: 24.99,
            image: "https://via.placeholder.com/300x400?text=Shorts+2",
            category: "shorts"
        },
        {
            id: 7,
            title: "Shorts Training",
            price: 34.99,
            image: "https://via.placeholder.com/300x400?text=Shorts+3",
            category: "shorts"
        },
        {
            id: 8,
            title: "Shorts Chassing",
            price: 44.99,
            image: "https://via.placeholder.com/300x400?text=Shorts+4",
            category: "shorts"
        },
        {
            id: 5,
            title: "Accessoires Performance",
            price: 29.99,
            image: "https://via.placeholder.com/300x400?text=Accessoires+1",
            category: "accessoires"
        },
        {
            id: 6,
            title: "Accessoires Running",
            price: 24.99,
            image: "https://via.placeholder.com/300x400?text=Accessoires+2",
            category: "accessoires"
        },
        {
            id: 7,
            title: "Accessoires Training",
            price: 34.99,
            image: "https://via.placeholder.com/300x400?text=Accessoires+3",
            category: "accessoires"
        },
        {
            id: 8,
            title: "Accessoires Chassing",
            price: 44.99,
            image: "https://via.placeholder.com/300x400?text=Accessoires+4",
            category: "accessoires"
        },
        {
            id: 5,
            title: "Chaussettes Performance",
            price: 29.99,
            image: "https://via.placeholder.com/300x400?text=Chaussettes+1",
            category: "chaussettes"
        },
        {
            id: 6,
            title: "Chaussettes Running",
            price: 24.99,
            image: "https://via.placeholder.com/300x400?text=Chaussettes+2",
            category: "chaussettes"
        },
        {
            id: 7,
            title: "Chaussettes Training",
            price: 34.99,
            image: "https://via.placeholder.com/300x400?text=Chaussettes+3",
            category: "chaussettes"
        },
        {
            id: 8,
            title: "Chaussettes Chassing",
            price: 44.99,
            image: "https://via.placeholder.com/300x400?text=Chaussettes+4",
            category: "chaussettes"
        }
    ];
    return products.filter(product => product.category === category);
}

function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p class="price">${product.price} €</p>
            </div>
        `;
        productsContainer.innerHTML += productCard;
    });
}

// Gérer le tri
document.getElementById('sort').addEventListener('change', (e) => {
    const sortValue = e.target.value;
    const products = [...document.querySelectorAll('.product-card')];
    
    products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.price').textContent);
        const priceB = parseFloat(b.querySelector('.price').textContent);
        
        return sortValue === 'price-asc' ? priceA - priceB : priceB - priceA;
    });
    
    const container = document.getElementById('products');
    container.innerHTML = '';
    products.forEach(product => container.appendChild(product));
});

// Charger les produits au chargement de la page
document.addEventListener('DOMContentLoaded', loadCategoryProducts);
