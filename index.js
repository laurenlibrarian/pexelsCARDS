import { fetchCollectionPhotos } from './photoService';

const displayPhotos = async () => {
    const photos = await fetchCollectionPhotos('STEM');
    const photoContainer = document.getElementById('photoContainer');
    photoContainer.innerHTML = '';

    photos.forEach(photo => {
        const photoElement = document.createElement('div');
        photoElement.innerHTML = `
            <h2>${photo.photographer}</h2>
            <img src='${photo.imageUrl}' alt='${photo.alt}' />
            <p>Photographer URL: <a href='${photo.photographerUrl}'>${photo.photographerUrl}</a></p>
        `;
        photoContainer.appendChild(photoElement);
    });
};

displayPhotos();
