var idleListener;

var currentIdle = ""

var lastIdle = ""

window.onload = function() {
  console.log("hi");
  $('.datepicker').datepicker({
    startDate: '+2d',
    format: 'mm-dd-yyyy',
  });
}
                                                              //Smooth Scroll Handling
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
                                                                          //Homepage form handling 
$('#contact-submit').on('click', function() {
  setTimeout(function() {
    $('#hp-contact-form-inner').trigger('reset')
  }, 10)
})

$('#contact-us-phone').on('change textInput input', function() {
  $(this).val($(this).val().replace(/(\d{3})\-?/,'$1-'))
  $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})-?/,'$1-$2-'))
  $(this).val($(this).val().replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'$1-$2-$3'))
});

// Using input filter to fix the phone box to allow - and numbers but nothing else
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

//Now passing the input into the function just defined so it's attached and return what's allowed in regex
setInputFilter(document.getElementById("contact-us-phone"), function(value) {
  return /^\d*\-*\d*\-*\d*$/.test(value); // Allow digits and '.' only, using a RegExp
});
                                                                            //Homepage Image Overlay Idler


$(".grid-img-overlay").each(function() {//selectiong all the grid image overlays
  $(this).on("mouseout", function() {//on mouse out so the overlay goes away when you hover out of it
    if ($(this).css("opacity") > "0") {
      clearTimeout(idleListener);
      $(this).css("opacity", "0")
    }
  });
  $(this).on("mousemove", function() {
      if ($(this).css("opacity") <= "1"){
        $(".grid-img-overlay").css("opacity", "0");
        lastIdle = currentIdle;
        clearTimeout(idleListener);
        $(this).css("opacity", "1");
        idleListener = setTimeout(function() {  
          if($(this).css("opacity") <= "1"){
              currentIdle = idleListener;
              console.log(currentIdle);
              $(this).css("opacity", "0");
          }
        }.bind(this), 1500);
      } else if ($(this).css("opacity") == "1") {
      clearTimeout(idleListener);
    }
  })
});
                                                                            //Reservation Page Form handling
$('#contact-submit').on('click', function() {
  setTimeout(function() {
    $('#hp-contact-form-inner').trigger('reset')
  }, 10)
})
