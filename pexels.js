import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const API_URL = 'https://api.pexels.com/v1';
const COLLECTION_ID = '3zsyinq';

export const fetchCurated = async () => {
    const response = await fetch(`${API_URL}/curated`, {
        headers: {
            Authorization: process.env.PEXELS_API_KEY,
        },
    });
    return response.json();
};

export const searchPhotos = async (query) => {
    const response = await fetch(`${API_URL}/search?query=${query}`, {
        headers: {
            Authorization: process.env.PEXELS_API_KEY,
        },
    });
    return response.json();
};

export const fetchCollectionPhotos = async () => {
    const response = await fetch(`${API_URL}/collections/${COLLECTION_ID}/photos`, {
        headers: {
            Authorization: process.env.PEXELS_API_KEY,
        },
    });
    return response.json();
};
