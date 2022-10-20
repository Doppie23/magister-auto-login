MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    const target = mutations[0].target
    if (target.matches('html')){
      console.log('iets')
      // document.getElementById('username').value = "7661";
      // document.getElementById('username').dispatchEvent(new Event('input'));
      // document.getElementById('username_submit').click();
      

    }
  });

// waitForElm('#password').then(() => {
//   console.log('Element is ready');
//   document.getElementById('password').value = "Dropshot#1";
//   document.getElementById('password').dispatchEvent(new Event('input'));
//   document.getElementById('password_submit').click();

//   waitForElm('#password_submit').then(() => {
//     document.getElementById('password_submit').click();
//   });
// });
  
observer.observe(document, {
  subtree: true,
  attributes: true
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