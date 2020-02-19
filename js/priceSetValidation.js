(function($) {
  $('#price_1652').change(function() {
    if ($(this).val() == '4707') {
      if ($('#price_1654').val() == '4713' || $('#price_1655').val() == '4716') {
        alert('You have already selected an option for 9am');
      }
    }
    else if($(this).val() == '4708') {
      if ($('#price_1654').val() == '4714' || $('#price_1655').val() == '4717') {
        alert('You have already selected an option for 10am');
      }
    }
  });

  $('#price_1654').change(function() {
    if ($(this).val() == '4713') {
      if ($('#price_1652').val() == '4707' || $('#price_1655').val() == '4716') {
        alert('You have already selected an option for 9am');
      }
    }
    else if($(this).val() == '4714') {
      if ($('#price_1652').val() == '4708' || $('#price_1655').val() == '4717') {
        alert('You have already selected an option for 10am');
      }
    }
    else if ($(this).val() == '4715') {
      if ($('#price_1653').val() == '4711' || $('#price_1655').val() == '4718') {
        alert('You have already selected an option for 11am');
      }
    }
  });

  $('#price_1655').change(function() {
    if ($(this).val() == '4716') {
      if ($('#price_1652').val() == '4707' || $('#price_1654').val() == '4713') {
        alert('You have already selected an option for 9am');
      }
    }
    else if($(this).val() == '4717') {
      if ($('#price_1652').val() == '4708' || $('#price_1654').val() == '4714') {
        alert('You have already selected an option for 10am');
      }
    }
    else if ($(this).val() == '4718') {
      if ($('#price_1653').val() == '4711' || $('#price_1654').val() == '4715') {
        alert('You have already selected an option for 11am');
      }
    }
    else if ($(this).val() == '4719' && $('#price_1653').val() == '4712') {
      alert('You have alraedy selected an option for 1pm');
    }
  });

  $('#price_1653').change(function() {
    if ($(this).val() == '4711') {
      if ($('#price_1655').val() == '4718' || $('#price_1654').val() == '4715') {
        alert('You have already selected an option for 11am');
      }
    }
    else if ($(this).val() == '4712' && $('#price_1655').val() == '4719') {
      alert('You have alraedy selected an option for 1pm');
    }
  });
})(CRM.$);
