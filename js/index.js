console.log("You index.js file is loaded correctly!");
$( ".navitems ul li" ).hover(
    function() {
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
    }
  );