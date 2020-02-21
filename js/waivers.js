(function($) {
  var clientrights = $('[name=custom_323][value=0]');
  var supervision = $('[name=custom_83][value=0]');
  var cancellation = $('[name=custom_123][value=0]');
  clientrights.hide().next('label').hide();
  supervision.hide().next('label').hide();
  cancellation.hide().next('label').hide();
  if ($('#custom_360').length) {
    if ($('#custom_360').val() == "2") {
      $('.crm-profile-id-55').hide();
    }
    $('#custom_360').change(function() {
      if ($(this).val() == "2") {
        $('.crm-profile-id-55').hide();
      }
    });
  }
})(CRM.$);
