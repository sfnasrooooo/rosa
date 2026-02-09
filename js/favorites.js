// favorites.js

// Manage favorites using localStorage
class FavoritesManager {
    constructor() {
        this.favoritesKey = 'favorites';
        this.watchlistKey = 'watchlist';
    }

    // Initialize storage
    init() {
        if (!localStorage.getItem(this.favoritesKey)) {
            localStorage.setItem(this.favoritesKey, JSON.stringify([]));
        }
        if (!localStorage.getItem(this.watchlistKey)) {
            localStorage.setItem(this.watchlistKey, JSON.stringify([]));
        }
    }

    // Add an item to favorites
    addToFavorites(item) {
        let favorites = this.getFavorites();
        favorites.push(item);
        localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    }

    // Remove an item from favorites
    removeFromFavorites(item) {
        let favorites = this.getFavorites().filter(fav => fav !== item);
        localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    }

    // Get all favorites
    getFavorites() {
        return JSON.parse(localStorage.getItem(this.favoritesKey));
    }

    // Manage watchlist
    addToWatchlist(item) {
        let watchlist = this.getWatchlist();
        watchlist.push(item);
        localStorage.setItem(this.watchlistKey, JSON.stringify(watchlist));
    }

    removeFromWatchlist(item) {
        let watchlist = this.getWatchlist().filter(watch => watch !== item);
        localStorage.setItem(this.watchlistKey, JSON.stringify(watchlist));
    }

    getWatchlist() {
        return JSON.parse(localStorage.getItem(this.watchlistKey));
    }
}

// Usage Example:
const manager = new FavoritesManager();
manager.init(); // Initialize localStorage

// manager.addToFavorites('item1');
// manager.removeFromFavorites('item1');
// console.log(manager.getFavorites());

// manager.addToWatchlist('item2');
// manager.removeFromWatchlist('item2');
// console.log(manager.getWatchlist());
