const PREVIEW_COUNT = 4;

async function displayCategoryPreview(categoryId) {
    const container = document.getElementById(`${categoryId}-products`);
    if (!container) return;

    try {
        const products = await fetchProductsByCategory(categoryId);
        const previewProducts = products.slice(0, PREVIEW_COUNT);
        
        previewProducts.forEach(product => {
            const productCard = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p class="price">${product.price} €</p>
                </div>
            `;
            container.innerHTML += productCard;
        });
    } catch (error) {
        console.error(`Erreur lors du chargement de la catégorie ${categoryId}:`, error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Object.keys(CATEGORIES).forEach(category => {
        displayCategoryPreview(category);
    });
});