/*
JavaScript for raveenadsouza.com
Copyright © 2017 Raveena D'Souza
*/





// ======== SENDING FORM EMAIL WITH EMAIL CLIENT ========

function checkMail()
{
    var name = document.getElementById("n").value;
    var email = document.getElementById("e").value;
    var subj = document.getElementById("s").value;
    var msg = document.getElementById("m").value;
    if (name != "" && email != "" && msg != "")
    {
            if ((subj != ""))
        {
            window.location.href = "mailto:radsouza@edu.uwaterloo.ca?subject="+subj+"&body=Name: "+name+"        Email: "+email+"        Message: "+msg;
        }
    else 
        {
          window.location.href = "mailto:radsouza@edu.uwaterloo.ca?subject=Message for Raveena D'Souza&body=Name: "+name+"        Email: "+email+"        Message: "+msg;
        } 
    }
}



// ======== SMOOTH SCROLLING ========

// done w/ jQuery using code from w3schools.com (w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll with some changes made)

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll for 700ms
      $('html, body').animate({
        scrollTop: $(hash).offset().top-42
      }, 700, function(){
    
        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
      });
    }
  });
});





// use fadeout jequery