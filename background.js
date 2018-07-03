var regex = /^(?:.*:)?(?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/i;

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        file: 'script.js'
    });
    chrome.tabs.insertCSS({
        file: 'style.css'
    });

    // get the hostname and try to load the correct css for it
    host = regex.exec(tab.url)[1];
    chrome.tabs.insertCSS({
        file: 'domain/' + host + '.css'
    });
});
