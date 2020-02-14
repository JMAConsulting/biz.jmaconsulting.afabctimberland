(function($) {
  $('[name=price_1445]:checked').change(function($) {
    if ($(this).val() == '4094' || $(this).val() == '4111') {
      $('#editrow-custom_359').hide();
    }
    else {
      $('#editrow-custom_359').show();
    }
  });
  if ($('[name=price_1445]:checked').val() == '4094' || $['[name=price_1445]:checked'].val() == '4111') {
    $('#editrow-custom_359').hide();
  }
  else {
    $('#editrow-custom_359').show();
  }
  var parentGuardianField = $('#editrow-custom_350');
  if (parentGuardianField.length) {
    var parentFieldValue = $('[name=custom_350]:checked').val();
    if (typeof parentFieldValue !== 'undefined' && parentFieldValue != "1") {
      $('#editrow-custom_351').show();
    }
    else {
      $('#custom_351').val("");
      $('#editrow-custom_351').hide();
      $('#custom_355').val("");
      $('#custom_356').val("");
      $('#custom_357').val("");
      $('#editrow-custom_355').hide();
      $('#editrow-custom_356').hide();
      $('#editrow-custom_357').hide();
    }
    if ($('#custom_351').val().toLowerCase().indexOf('foster') !== -1) {
      $('#editrow-custom_355').show();
      $('#editrow-custom_356').show();
      $('#editrow-custom_357').show();
    }
    else {
      $('#custom_355').val("");
      $('#custom_356').val("");
      $('#custom_357').val("");
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
      }
      else {
        parentGuardianField.hide();
        $('#custom_351').val("");
        $('#custom_355').val("");
        $('#custom_356').val("");
        $('#custom_357').val("");
        $('#editrow-custom_351').hide();
        $('#editrow-custom_355').show();
        $('#editrow-custom_356').show();
        $('#editrow-custom_357').show();
      }
    };
    $("[name=custom_350]").change(function() {
      if ($(this).val() != "1") {
        $('#editrow-custom_351').show();
      }
      else {
        $('#custom_351').val("");
        $('#custom_355').val("");
        $('#custom_356').val("");
        $('#custom_357').val("");
        $('#editrow-custom_351').hide();
        $('#editrow-custom_356').hide();
        $('#editrow-custom_357').hide();
        $('#editrow-custom_355').hide();
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
