function __onLoaded__(callback){
  if (document.readyState!='loading'){ return callback(); };
  document.addEventListener('DOMContentLoaded', callback);
}
__onLoaded__(function(){
  setTimeout(function(){ CymaticXid.init(); }, 1000)

  let checkoutForm = document.querySelector('form[action="/cart"]');
  if(checkoutForm){
    document.body.insertAdjacentHTML('afterbegin', `<iframe id="checkoutcontainer" src="https://cymaticswag.myshopify.com/55456989366/checkouts/"></iframe>`);

    checkoutForm.onsubmit = function(){
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      formData.append("updates[]", "1"); // TODO FIXME
      formData.append("checkout", "Check out");
      xhr.withCredentials = true;
      xhr.addEventListener("load", function(){
        document.querySelector('#checkoutcontainer').src = xhr.responseURL; // redirect
      });
      xhr.open("POST", "/cart");
      xhr.send(formData);
      return false;
    }
  }
});
