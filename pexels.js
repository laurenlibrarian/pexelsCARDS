// pexels.js

const API_KEY = 'YOUR_PEXELS_API_KEY';
const BASE_URL = 'https://api.pexels.com/v1';

// Function to fetch curated photos
async function fetchCurated(page = 1, per_page = 15) {
    const response = await fetch(`${BASE_URL}/curated?page=${page}&per_page=${per_page}`, {
        headers: {
            Authorization: API_KEY
        }
    });
    return await response.json();
}

// Function to search for photos
async function searchPhotos(query, page = 1, per_page = 15) {
    const response = await fetch(`${BASE_URL}/search?query=${query}&page=${page}&per_page=${per_page}`, {
        headers: {
            Authorization: API_KEY
        }
    });
    return await response.json();
}

// Export functions for external use
export { fetchCurated, searchPhotos };