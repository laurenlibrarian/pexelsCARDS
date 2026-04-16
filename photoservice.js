import dotenv from 'dotenv';

dotenv.config();

const API_URL = 'https://api.pexels.com/v1';
const COLLECTION_ID = '3zsyinq';
const API_KEY = process.env.PEXELS_API_KEY;

export const fetchCollectionPhotos = async () => {
    const response = await fetch(`${API_URL}/collections/${COLLECTION_ID}/photos`, {
        headers: {
            Authorization: API_KEY,
        },
    });
    
    if (!response.ok) {
        throw new Error('Failed to fetch collection photos');
    }
    
    const data = await response.json();
    
    return data.media.map(photo => ({
        id: photo.id,
        photographer: photo.photographer,
        photographerUrl: photo.photographer_url,
        alt: photo.alt,
        imageUrl: photo.src.medium,
        avgColor: photo.avg_color
    }));
};
