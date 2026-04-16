export const config = {
    apiKey: process.env.PEXELS_API_KEY,
    requestParams: {
        per_page: 15,
        page: 1,
        type: 'photos',
    },
};