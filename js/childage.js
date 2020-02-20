(function($) {
  if ($('[name=price_1445]:checked').val() != "4094" && $('[name=price_1445]:checked').val() != "4099") {
    $('#editrow-custom_359').show();
  }
  else {
    $('#custom_359').val('').trigger('change');
    $('#editrow-custom_359').hide();
  }
})(CRM.$);
