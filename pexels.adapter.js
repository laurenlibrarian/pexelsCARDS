// adaptPhoto function to normalize Pexels API responses

/**
 * Normalize the Pexels API response
 * @param {Object} photo - The photo object from Pexels API
 * @returns {Object} - Normalized photo object
 */
function adaptPhoto(photo) {
    return {
        id: photo.id,
        photographer: photo.photographer,
        photographer_url: photo.photographer_url,
        src: photo.src,
        alt: photo.alt,
        width: photo.width,
        height: photo.height,
        liked: photo.liked
    };
}

module.exports = adaptPhoto;