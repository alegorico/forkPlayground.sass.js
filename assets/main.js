function openApp() {
	chrome.tabs.create({
		url: chrome.extension.getURL('index.html'),
		selected: true
	});
}

chrome.browserAction.onClicked.addListener(function() {
	openApp();
});