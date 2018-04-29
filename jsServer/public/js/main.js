jQuery(document).ready(function() {
  jQuery('#onBtn').on('click', function() {
    jQuery.ajax({
      url: 'led/on',
      onError: function(e) { 
        console.error(e);
      },
      success: function(result) {
        console.log('success result', result);
      }
    });
  });
  
  jQuery('#offBtn').on('click', function() {
    jQuery.ajax({
      url: 'led/off',
      onError: function(e) { 
        console.error(e);
      },
      success: function(result) {
        console.log('success result', result);
      }
    });
  });

})
