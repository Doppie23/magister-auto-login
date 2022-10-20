waitForElm('#username').then(() => {
  console.log('Element is ready');
  document.getElementById('username').value = "7661";
  document.getElementById('username').dispatchEvent(new Event('input'));

  waitForElm('#username_submit').then((elm) => {
    console.log(elm)
    elm.click();
  });
});

waitForElm('#password').then(() => {
  console.log('Element is ready');
  document.getElementById('password').value = "Dropshot#1";
  document.getElementById('password').dispatchEvent(new Event('input'));

  waitForElm('#password_submit').then((elm) => {
    elm.click();
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