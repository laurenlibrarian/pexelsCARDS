export function adaptPhoto(photo) {
    return {
        id: photo.id,
        photographer: photo.photographer,
        photographerUrl: photo.photographer_url,
        src: photo.src,
        alt: photo.alt,
        width: photo.width,
        height: photo.height,
    };
}