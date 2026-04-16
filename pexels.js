require('dotenv').config();

const API_KEY = process.env.PEXELS_API_KEY;

const fetchPhotos = async (query) => {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
            Authorization: API_KEY,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch photos');
    }

    const data = await response.json();
    return data.photos;
};

const displayPhotos = (photos) => {
    // Code to display photos in the UI.
};

const searchAndDisplayPhotos = async (query) => {
    try {
        const photos = await fetchPhotos(query);
        displayPhotos(photos);
    } catch (error) {
        console.error(error);
    }
};

searchAndDisplayPhotos('nature');
