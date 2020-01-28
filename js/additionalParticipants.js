(function($) {
  var parentGuardianField = $('#editrow-custom_350');
  if (parentGuardianField.length) {
    $('#editrow-custom_351').hide();
    var additionalRegistrationType = $('#additional_registration_type');
    additionalRegistrationType.on('change', function() {
      if (additionalRegistrationType.val() != 1) {
        parentGuardianField.hide();
      }
      else {
        parentGuardianField.show();
      }
    });
    parentGuardianField.on('change', function() {
      if (parentGuardianField.val() != 1) {
        $('#editrow-custom_351').show();
      }
    });
  }
})(CRM.$);
