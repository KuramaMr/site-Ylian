async function fetchProducts() {
    try {
        // Exemple avec Fake Store API
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        
        displayProducts(products);
    } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
    }
}

function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.price} €</p>
                <button class="add-to-cart">Ajouter au panier</button>
            </div>
        `;
        productsContainer.innerHTML += productCard;
    });
}