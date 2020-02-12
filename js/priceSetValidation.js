(function($) {
  $('#price_1446').change(function() {
    if ($(this).val() == '4097') {
      if ($('#price_1449').val() == '4106' || $('#price_1450').val() == '4108') {
        alert('You have already selected an option for 9am');
      }
    }
    else if($(this).val() == '4098') {
      if ($('#price_1449').val() == '4107' || $('#price_1450').val() == '4109') {
        alert('You have already selected an option for 10am');
      }
    }
  });

  $('#price_1449').change(function() {
    if ($(this).val() == '4106') {
      if ($('#price_1446').val() == '4097' || $('#price_1450').val() == '4108') {
        alert('You have already selected an option for 9am');
      }
    }
    else if($(this).val() == '4107') {
      if ($('#price_1446').val() == '4098' || $('#price_1450').val() == '4109') {
        alert('You have already selected an option for 10am');
      }
    }
    else if ($(this).val() == '4114') {
      if ($('#price_1447').val() == '4102' || $('#price_1450').val() = '4115') {
        alert('You have already selected an option for 11am');
      }
    }
  });

  $('#price_1450').change(function() {
    if ($(this).val() == '4108') {
      if ($('#price_1446').val() == '4097' || $('#price_1449').val() == '4106') {
        alert('You have already selected an option for 9am');
      }
    }
    else if($(this).val() == '4109') {
      if ($('#price_1446').val() == '4098' || $('#price_1449').val() == '4107') {
        alert('You have already selected an option for 10am');
      }
    }
    else if ($(this).val() == '4115') {
      if ($('#price_1447').val() == '4102' || $('#price_1449').val() = '4114') {
        alert('You have already selected an option for 11am');
      }
    }
    else if ($(this).val() == '4116' && $('#price_1447').val() == '4103') {
      alert('You have alraedy selected an option for 1pm');
    }
  });

  $('#price_1447').change(function() {
    if ($(this).val() == '4102') {
      if ($('#price_1450').val() == '4115' || $('#price_1449').val() = '4114') {
        alert('You have already selected an option for 11am');
      }
    }
    else if ($(this).val() == '4103' && $('#price_1450').val() == '4116') {
      alert('You have alraedy selected an option for 1pm');
    }
  });
})(CRM.$);
