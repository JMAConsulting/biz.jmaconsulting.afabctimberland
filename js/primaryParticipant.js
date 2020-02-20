(function($) {
  var parentGuardianField = $('#editrow-custom_360');
  if (parentGuardianField.length) {
    if ($('#custom_360').val() == "1") {
      $('#custom_355').val("");
      $('#custom_356').val("");
      $('#custom_357').val("");
      $('#custom_361').val("");
      $('#editrow-custom_361').hide();
      $('#editrow-custom_355').hide();
      $('#editrow-custom_356').hide();
      $('#editrow-custom_357').hide();
      $('#editrow-custom_360').show();
    }
    else if ($('#custom_360').val() == "2") {
      $('#editrow-custom_355').show();
      $('#editrow-custom_356').show();
      $('#editrow-custom_357').show();
      $('#custom_361').val("");
      $('#editrow-custom_361').hide();
      $('#editrow-custom_360').show();
    }
    else if ($('#custom_360').val() == "3") {
      $('#editrow-custom_361').show();
      $('#custom_355').val("");
      $('#custom_356').val("");
      $('#custom_357').val("");
      $('#editrow-custom_355').hide();
      $('#editrow-custom_356').hide();
      $('#editrow-custom_357').hide();
      $('#editrow-custom_360').show();
    }
    else {
      parentGuardianFieldShow(false);
    }
    if ($('[name=price_1445]:checked') != "4094" && $('[name=price_1445]:checked') != "4099") {
      parentGuardianFieldShow(true);
    }
    else {
      parentGuardianFieldShow(false);
    }
    function parentGuardianFieldShow(show) {
      if (show) {
        parentGuardianField.show();
      }
      else {
        parentGuardianField.hide();
        $('#custom_361').val("");
        $('#custom_360').val("").trigger('change');
        $('#custom_355').val("");
        $('#custom_356').val("");
        $('#custom_357').val("");
        $('#editrow-custom_361').hide();
        $('#editrow-custom_355').hide();
        $('#editrow-custom_356').hide();
        $('#editrow-custom_357').hide();
      }
    };
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
