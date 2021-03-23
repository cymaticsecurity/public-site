let attempts = 10;
let timer = setInterval(function() {
  if(!attempts <= 0){ return clearInterval(timer); } // Give up
  attempts -=1;
  if(document.querySelector('script[src^="https://sdk.cymatic.io"]')){
    CymaticXid.init({});
    clearInterval(timer);
  }
}, 300);
