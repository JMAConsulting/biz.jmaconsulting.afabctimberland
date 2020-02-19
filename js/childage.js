(function($) {
  if ($('[name=price_1651]:checked').val() != "4703" && $('[name=price_1651]:checked').val() != "4720") {
    $('#editrow-custom_355').show();
    $('#editrow-custom_362').show();
  }
  else {
    $('#custom_362').val('').trigger('change');
    $('#editrow-custom_362').hide();
    $('#custom_355').val('').trigger('change');
    $('#editrow-custom_355').hide();
  }
  $('[name=price_1651]').change(function() {
    if ($(this).val() != "4703" && $(this).val() != "4720") {
      $('#editrow-custom_362').show();
      $('#editrow-custom_355').show();
    }
    else {
      $('#custom_362').val('').trigger('change');
      $('#editrow-custom_362').hide();
      $('#custom_355').val('').trigger('change');
      $('#editrow-custom_355').hide();
    }
  });
})(CRM.$);
