(function($) {
  if ($('[name=price_1445]:checked').val() != "4094" && $('[name=price_1445]:checked').val() != "4099") {
    $('#editrow-custom_358').show();
    $('#editrow-custom_359').show();
  }
  else {
    $('#custom_359').val('').trigger('change');
    $('#editrow-custom_359').hide();
    $('#custom_358').val('').trigger('change');
    $('#editrow-custom_358').hide();
  }
  $('[name=price_1445]').change(function() {
    if ($(this).val() != "4094" && $(this).val() != "4099") {
      $('#editrow-custom_359').show();
      $('#editrow-custom_358').show();
    }
    else {
      $('#custom_359').val('').trigger('change');
      $('#editrow-custom_359').hide();
      $('#custom_358').val('').trigger('change');
      $('#editrow-custom_358').hide();
    }
  });
})(CRM.$);
