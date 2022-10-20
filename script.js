waitForElm('#username').then(() => {
  chrome.storage.sync.get(['leerlingnummer'], function(leerlingnummer){
    document.getElementById('username').value = leerlingnummer.leerlingnummer;
    document.getElementById('username').dispatchEvent(new Event('input'));

    waitForElm('#username_submit').then((elm) => {
      elm.click();
    });
  });  
});

waitForElm('#password').then(() => {
  chrome.storage.sync.get(['wachtwoord'], function(wachtwoord){
    document.getElementById('password').value = wachtwoord.wachtwoord;
    document.getElementById('password').dispatchEvent(new Event('input'));
  
    waitForElm('#password_submit').then((elm) => {
      elm.click();
    });
  });
});

function waitForElm(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    
    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
            observer.disconnect();
          }
        });
        
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      });
    }      