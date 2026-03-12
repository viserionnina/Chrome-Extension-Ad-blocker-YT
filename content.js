//const adElements = document.querySelectorAll('[id*="ad"], [class*="ad"]'); //to big and abstarct
//removing all the id-s from adds
//adElements.forEach(el => el.remove())

//specific css selectors for ads
const YT_AD_SELECTORS = [ 
    'ytd-ad-slot-renderer',      //container for slot ads
    'ytd-promoted-video-renderer',  //promo video in search bar
    'ytd-display-ad-renderer',      //banner ads
    '.ytp-ad-module',          //ads on video players
    '#player-ads',             //player ad overlay
    '.ad-showing'
];

const removeAds = () => {
    YT_AD_SELECTORS.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
    });
};

removeAds();
//start again after YT dynamicly loads for cleaning the DOM
const observer = new MutationObserver(removeAds);
observer.observe(document.body, { childList: true, subtree: true });

