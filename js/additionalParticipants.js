(function($) {
  var parentGuardianField = $('#editrow-custom_353');
  if (parentGuardianField.length) {
    if ($('#custom_353').val() == "1") {
      $('#custom_354').val("");
      $('#custom_356').val("");
      $('#custom_357').val("");
      $('#custom_358').val("");
      $('#editrow-custom_358').hide();
      $('#editrow-custom_354').hide();
      $('#editrow-custom_356').hide();
      $('#editrow-custom_357').hide();
    }
    else if ($('#custom_353').val() == "2") {
      $('#editrow-custom_358').show();
      $('#editrow-custom_356').show();
      $('#editrow-custom_357').show();
      $('#custom_354').val("");
      $('#editrow-custom_354').hide();
    }
    else if ($('#custom_353').val() == "3") {
      $('#editrow-custom_354').show();
      $('#custom_358').val("");
      $('#custom_356').val("");
      $('#custom_357').val("");
      $('#editrow-custom_358').hide();
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
        $('#custom_358').val("");
        $('#custom_353').val("").trigger('change');
        $('#custom_354').val("");
        $('#custom_356').val("");
        $('#custom_357').val("");
        $('#editrow-custom_358').hide();
        $('#editrow-custom_354').hide();
        $('#editrow-custom_356').hide();
        $('#editrow-custom_357').hide();
      }
    };
    $('#custom_353').change(function() {
      if ($(this).val() == "2") {
        $('#editrow-custom_356').show();
        $('#editrow-custom_357').show();
        $('#editrow-custom_358').show();
        $('#editrow-custom_354').hide()
      }
      else {
        if ($(this).val() == "3") {
          $('#editrow-custom_354').show();
        }
        else {
          $('#editrow-custom_354').val('');
          $('#editrow-custom_354').hide()
        }
        $('#editrow-custom_356').hide();
        $('#editrow-custom_357').hide();
        $('#editrow-custom_358').hide();
      }
    });
  }
})(CRM.$);
