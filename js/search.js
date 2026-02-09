// Advanced Search Functionality for Movie Database

// Function to handle search form submission
function handleSearch(event) {
    event.preventDefault();
    const genre = document.querySelector('#genre').value;
    const year = document.querySelector('#year').value;
    const rating = document.querySelector('#rating').value;
    const sort = document.querySelector('#sort').value;
    searchMovies(genre, year, rating, sort);
}

// Function to perform the search
function searchMovies(genre, year, rating, sort) {
    // Sample implementation: you would replace this with your own search logic
    let results = []; // Replace with actual data fetching
    // Filtering logic here...
    if (genre) {
        results = results.filter(movie => movie.genre === genre);
    }
    if (year) {
        results = results.filter(movie => movie.year === year);
    }
    if (rating) {
        results = results.filter(movie => movie.rating >= rating);
    }
    // Sorting logic here...
    if (sort === 'year') {
        results.sort((a, b) => a.year - b.year);
    } else if (sort === 'rating') {
        results.sort((a, b) => b.rating - a.rating);
    }
    // Update the UI with results
    displayResults(results);
}

// Function to display search results
function displayResults(results) {
    const resultsContainer = document.querySelector('#results');
    resultsContainer.innerHTML = '';
    results.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerText = `${movie.title} (${movie.year}) - Rating: ${movie.rating}`;
        resultsContainer.appendChild(movieElement);
    });
}

// Event listener for search form
document.querySelector('#searchForm').addEventListener('submit', handleSearch);