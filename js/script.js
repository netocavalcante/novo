
$(document).ready(function() {
  $('.sidenav').sidenav();
  $('.tooltipped').tooltip();
  $('.dropdown-trigger').dropdown();
  
  $(document).on('pageload', function() {
    $('.modal-trigger').leanModal({
      dismissible: true,
      opacity: .5,
      complete: function() { 
        $(document).trigger('modalclose');
      }
    });
  });
});