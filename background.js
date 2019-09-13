// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == "install") {
        chrome.storage.local.set({ isEnabled: true });
        chrome.storage.local.set({ goal: 3.5 });
        chrome.storage.local.set({ consumption: [] });

    } else if (details.reason == "update") {
        chrome.storage.local.get('isEnabled', function (data) {
            if (typeof data.isEnabled === 'undefined') {
                chrome.storage.local.set({ isEnabled: true });
            }
            if (typeof data.goal === 'undefined') {
                chrome.storage.local.set({ goal: 3.5 });
            }
            if (typeof data.consumption === 'undefined') {
                chrome.storage.local.set({ consumption: [] });
            }
        });
    }
});