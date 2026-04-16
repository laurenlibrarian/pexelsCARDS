'use strict';

const { fetchPhotos, fetchPhoto } = require('./pexels');

async function demonstratePexelsUsage() {
    try {
        console.log('Fetching photos...');
        const photos = await fetchPhotos();
        console.log('Fetched photos:', photos);

        const photoId = photos[0].id; // Assuming there's at least one photo
        console.log(`Fetching details for photo ID ${photoId}...`);
        const photoDetails = await fetchPhoto(photoId);
        console.log('Photo details:', photoDetails);
    } catch (error) {
        console.error('Error fetching photos:', error);
    }
}

demonstratePexelsUsage();