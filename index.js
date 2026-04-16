import dotenv from 'dotenv';
import { fetchCurated, searchPhotos } from './pexels.js';

dotenv.config();

const demonstrateAPI = async () => {
    try {
        const curatedPhotos = await fetchCurated();
        console.log('Curated Photos:', curatedPhotos);

        const searchTerm = 'nature';
        const searchResults = await searchPhotos(searchTerm);
        console.log(`Search Results for ${searchTerm}:`, searchResults);
    } catch (error) {
        console.error('Error using Pexels API:', error);
    }
};

demonstrateAPI();
