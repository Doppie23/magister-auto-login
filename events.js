chrome.runtime.onInstalled.addListener( function(details) {
    switch(details.reason) {
      case "install":
        chrome.tabs.create({
			url: 'popup.html',
		});
        break;
      case "update":
        // First run after an update
        break;
    }
  });