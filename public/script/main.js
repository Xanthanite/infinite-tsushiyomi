window.onload = function() {
  console.log("hi");
  $('.datepicker').datepicker({
    startDate: '+2d',
    format: 'mm-dd-yyyy',
  });
}


$('#contact-us-phone').keyup(function(){
  $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'$1-$2-$3'))
});

