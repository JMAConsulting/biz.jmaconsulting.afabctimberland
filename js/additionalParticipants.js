(function($) {
  var parentGuardianField = $('#editrow-custom_350');
  if (parentGuardianField.length) {
    var parentFieldValue = $('[name=custom_350]:checked').val();
    if (typeof parentFieldValue !== 'undefined' && parentFieldValue != "1") {
      $('#editrow-custom_360').show();
    }
    else {
      $('#custom_360').val("");
      $('#editrow-custom_360').hide();
      $('#custom_355').val("");
      $('#custom_356').val("");
      $('#custom_357').val("");
      $('#editrow-custom_355').hide();
      $('#editrow-custom_356').hide();
      $('#editrow-custom_357').hide();
    }
    if ($('#custom_360').val().toLowerCase().indexOf('foster') !== -1) {
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
        $('#editrow-custom_359').show();
      }
      else {
        parentGuardianField.hide();
        $('#custom_360').val("").trigger('change');
        $('#custom_355').val("");
        $('#custom_356').val("");
        $('#custom_357').val("");
        $('#editrow-custom_360').hide();
        $('#editrow-custom_355').hide();
        $('#editrow-custom_356').hide();
        $('#editrow-custom_357').hide();
        $('#editrow-custom_359').hide();
      }
    };
    $("[name=custom_350]").change(function() {
      if ($(this).val() != "1") {
        $('#editrow-custom_360').show();
      }
      else {
        $('#custom_360').val("").trigger('change');
        $('#custom_355').val("");
        $('#custom_356').val("");
        $('#custom_357').val("");
        $('#editrow-custom_360').hide();
        $('#editrow-custom_356').hide();
        $('#editrow-custom_357').hide();
        $('#editrow-custom_355').hide();
      }
    });
    $('#custom_360').change(function() {
      if ($(this).val() == "2") {
        $('#editrow-custom_356').show();
        $('#editrow-custom_357').show();
        $('#editrow-custom_355').show();
      }
      else {
        if ($(this).val() == "3") {
          $('#editrow-custom_361').show();
        }
        else {
          $('#editrow-custom_361').val('');
          $('#editrow-custom_361').hide()
        }
        $('#editrow-custom_356').hide();
        $('#editrow-custom_357').hide();
        $('#editrow-custom_355').hide();
      }
    });
  }
})(CRM.$);
