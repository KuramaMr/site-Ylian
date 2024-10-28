function optimizeImageUrl(url, width = 400) {
    // Si c'est une URL Unsplash, on peut utiliser leurs paramètres d'optimisation
    if (url.includes('unsplash.com')) {
        return `${url}&w=${width}&q=75&fm=webp`;
    }
    return url;
}
