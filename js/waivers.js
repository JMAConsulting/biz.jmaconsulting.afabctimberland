(function($) {
  var clientrights = $('[name=custom_323][value=0]');
  var supervision = $('[name=custom_83][value=0]');
  var cancellation = $('[name=custom_123][value=0]');
  clientrights.hide().next('label').hide();
  supervision.hide().next('label').hide();
  cancellation.hide().next('label').hide();
})(CRM.$);
