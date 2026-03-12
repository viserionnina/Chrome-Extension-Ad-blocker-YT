//const adElements = document.querySelectorAll('[id*="ad"], [class*="ad"]'); //to big and abstarct
//removing all the id-s from adds
//adElements.forEach(el => el.remove())

const YT_AD_SELECTORS = [
    'ytd-ad-slot-renderer',
    'ytd-promoted-video-renderer', 
    'ytd-display-ad-renderer',
    '.ytp-ad-module',
    '#player-ads',
    '.ad-showing'
];

const removeAds = () => {
    YT_AD_SELECTORS.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
    });
};

removeAds();
//start again after YT dynamicly loads
const observer = new MutationObserver(removeAds);
observer.observe(document.body, { childList: true, subtree: true });

