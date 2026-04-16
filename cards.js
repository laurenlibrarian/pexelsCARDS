/**
 * cards.js — browser-ready Pexels card renderer
 *
 * Configure via window.PEXELS_CONFIG before this script loads:
 *   window.PEXELS_CONFIG = {
 *     apiKey:       'YOUR_PEXELS_API_KEY',
 *     collectionId: '3zsyinq',
 *     perPage:      15,
 *   };
 *
 * Expects a <div id="pexels-cards-grid"> in the page.
 */
(function () {
    'use strict';

    const cfg = window.PEXELS_CONFIG || {};
    const API_KEY       = cfg.apiKey       || '';
    const COLLECTION_ID = cfg.collectionId || '3zsyinq';
    const PER_PAGE      = cfg.perPage      || 3;
    const API_BASE      = 'https://api.pexels.com/v1';

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function renderCard(photo) {
        const alt          = escapeHtml(photo.alt || 'Photo from Pexels');
        const imgUrl       = escapeHtml(photo.src.medium);
        const photographer = escapeHtml(photo.photographer);
        const photoUrl     = escapeHtml(photo.photographer_url);

        return `
            <div class="pexels-card">
                <img src="${imgUrl}" alt="${alt}" loading="lazy">
                <div class="pexels-card-body">
                    ${photo.alt ? `<p class="pexels-card-alt">${alt}</p>` : ''}
                    <p class="pexels-card-credit">
                        Photo by
                        <a href="${photoUrl}" target="_blank" rel="noopener noreferrer">${photographer}</a>
                        on <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">Pexels</a>
                    </p>
                </div>
            </div>`;
    }

    async function loadCards() {
        const grid = document.getElementById('pexels-cards-grid');
        if (!grid) return;

        if (!API_KEY) {
            grid.innerHTML = '<p class="pexels-error">Pexels API key is missing. Set <code>window.PEXELS_CONFIG.apiKey</code> before loading cards.js.</p>';
            return;
        }

        grid.innerHTML = '<p class="pexels-loading">Loading photos\u2026</p>';

        try {
            const url = `${API_BASE}/collections/${COLLECTION_ID}?type=photos&per_page=${PER_PAGE}&page=1`;
            const response = await fetch(url, {
                headers: { Authorization: API_KEY },
            });

            if (!response.ok) {
                throw new Error(`Pexels API returned ${response.status}`);
            }

            const data = await response.json();
            const photos = (data.media || []).filter(item => item.type !== 'Video');

            if (photos.length === 0) {
                grid.innerHTML = '<p class="pexels-loading">No photos found in this collection.</p>';
                return;
            }

            grid.innerHTML = photos.map(renderCard).join('');
        } catch (err) {
            grid.innerHTML = `<p class="pexels-error">Could not load photos — ${escapeHtml(err.message)}. Check the API key and collection ID in the browser console.</p>`;
            console.error('[pexels-cards]', err);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadCards);
    } else {
        loadCards();
    }
})();
