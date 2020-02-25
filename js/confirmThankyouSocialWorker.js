(function($) {
  if ($('.Social.Worker').length !== -1) {
    $('.Social.Worker').each(function() {
      if ($(this).next('.content').length < 1) {
        $(this).hide();
      }
    });
  }
  if ($('.What is your relationship?-section').length !== -1) {
    if ($('.What is your relationship?-section').next('.content').length < 1) {
      $('.What is your relationship?-section').hide();
    }
  }
})(CRM.$);
