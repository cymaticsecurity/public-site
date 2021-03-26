function __onLoaded__(callback){
  if (document.readyState!='loading'){ return callback(); };
  document.addEventListener('DOMContentLoaded', callback);
}
__onLoaded__(function(){
  setTimeout(function(){ CymaticXid.init(); }, 1000)

  let checkoutForm = document.querySelector('form[action="/cart"]');
  if(checkoutForm){
    checkoutForm.onsubmit = function(){
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      formData.append("updates[]", "1"); // TODO FIXME
      formData.append("checkout", "Check out");
      xhr.withCredentials = true;
      xhr.addEventListener("load", function(){
        document.body.insertAdjacentHTML('afterbegin', `<iframe id="checkoutcontainer" src="${xhr.responseURL}"></iframe>`);
      });
      xhr.open("POST", "/cart");
      xhr.send(formData);
      return false;
    }
  }
});
