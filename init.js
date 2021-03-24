setTimeout(function(){
 let form = document.querySelector('form[data-customer-information-form]');
 
 if(form){
   CymaticXid.v2.init({
    checkout : {
      selector : 'form[data-customer-information-form]',
      username : 'input#checkout_email_or_phone',
      password : 'input#checkout_shipping_address_last_name',
      submit   : 'button#continue_button'
    }
  });
 } else {
  CymaticXid.init();
 }
}, 500);
