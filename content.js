const adElements = document.querySelectorAll('[id*="ad"], [class*="ad"]');
//removing all the id-s from adds
adElements.forEach(el => el.remove())