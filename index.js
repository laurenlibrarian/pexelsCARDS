import { fetchCollectionPhotos } from './photoservice.js';

async function displaySTEMPhotos() {
    try {
        const photos = await fetchCollectionPhotos('STEM');
        photos.forEach(photo => {
            console.log(photo);
        });
    } catch (error) {
        console.error('Error fetching photos:', error);
    }
}

displaySTEMPhotos();
