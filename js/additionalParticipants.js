(function($) {
  $('[name=price_1445]:checked').change(function($) {
    if ($(this).val() == '4094' || $(this).val() == '4111') {
      $('#editrow-custom_359').hide();
    }
    else {
      $('#editrow-custom_359').show();
    }
  });
  if ($['[name=price_1445]:checked'].val() == '4094' || $['[name=price_1445]:checked'].val() == '4111') {
    $('#editrow-custom_359').hide();
  }
  else {
    $('#editrow-custom_359').show();
  }
  var parentGuardianField = $('#editrow-custom_350');
  if (parentGuardianField.length) {
    if ($("[name=custom_350]:checked").val() != "1") {
      $('#editrow-custom_351').show();
    }
    else {
      $('#editrow-custom_351').hide();
    }
    if ($('#custom_351').val().toLowerCase().indexOf('foster') !== -1) {
      $('#editrow-custom_355').show();
      $('#editrow-custom_356').show();
      $('#editrow-custom_357').show();
    }
    else {
      $('#editrow-custom_355').hide();
      $('#editrow-custom_356').hide();
      $('#editrow-custom_357').hide();
    }
    var additionalRegistrationType = $('#additional_registration_type');
    if (additionalRegistrationType.val() != "2") {
      parentGuardianFieldShow(false);
    }
    else {
      parentGuardianFieldShow(true);
    }
    additionalRegistrationType.on('change', function() {
      if (additionalRegistrationType.val() != "2") {
        parentGuardianFieldShow(false);
      }
      else {
        parentGuardianFieldShow(true);
      }
    });
    function parentGuardianFieldShow(show) {
      if (show) {
        parentGuardianField.show();
        $('#editrow-custom_351').show();
      }
      else {
        parentGuardianField.hide();
        $('#editrow-custom_351').hide();
        $('#editrow-custom_351').val('');
      }
    };
    $("[name=custom_350]").change(function() {
      if ($(this).val() != "1") {
        $('#editrow-custom_351').show();
      }
      else {
        $('#editrow-custom_351').hide();
      }
    });
    $('#custom_351').change(function() {
      if ($(this).val().toLowerCase().indexOf('foster') !== -1) {
        $('#editrow-custom_356').show();
        $('#editrow-custom_357').show();
        $('#editrow-custom_355').show();
      }
      else {
        $('#editrow-custom_356').hide();
        $('#editrow-custom_357').hide();
        $('#editrow-custom_355').hide();
      }
    });
  }
})(CRM.$);
