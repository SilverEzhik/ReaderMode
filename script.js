// nuke existing styles 
// https://stackoverflow.com/a/46775158/2781073

Array.from(document.querySelectorAll('[style]')).forEach(el => el.removeAttribute('style')); 
Array.from(document.querySelectorAll('link[rel="stylesheet"]')).forEach(el => el.parentNode.removeChild(el)); 
Array.from(document.querySelectorAll('style')).forEach(el => el.parentNode.removeChild(el));
