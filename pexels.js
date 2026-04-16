import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const API_KEY = process.env.PEXELS_API_KEY;
const API_URL = 'https://api.pexels.com/v1';

export const fetchCurated = async () => {
    const response = await fetch(`${API_URL}/curated`, {
        headers: {
            Authorization: API_KEY,
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch curated photos');
    }
    return await response.json();
};

export const searchPhotos = async (query) => {
    const response = await fetch(`${API_URL}/search?query=${query}`, {
        headers: {
            Authorization: API_KEY,
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch searched photos');
    }
    return await response.json();
};
