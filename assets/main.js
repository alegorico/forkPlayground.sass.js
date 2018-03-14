
browser.browserAction.onClicked.addListener(function() {
  var creating = browser.tabs.create({
    url:'index.html'
  });
	
});
