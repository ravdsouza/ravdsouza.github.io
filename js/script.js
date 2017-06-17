/*

JavaScript for raveenadsouza.com
Copyright © 2017 Raveena D'Souza

*/

// SENDING FORM EMAIL WITH EMAIL CLIENT

function sendMail()
{
    var name = document.getElementById("n").value;
    var email = document.getElementById("e").value;
    var subj = document.getElementById("s").value;
    var msg = document.getElementById("m").value;
    if (!(subj == ""))
        {
            window.location.href = "mailto:radsouza@edu.uwaterloo.ca?subject="+subj+"&body=Name: "+name+"        Email: "+email+"        Message: "+msg;
        }
    else
        {
          window.location.href = "mailto:radsouza@edu.uwaterloo.ca?subject=Message for Raveena D'Souza&body=Name: "+name+"        Email: "+email+"        Message: "+msg;
        }
} 

// SLIDESHOWS

var faceImg = document.getElementById("face"); // get image
var imgArray = ["images/proj/catalyst-google.PNG", "images/proj/wear-hacks-group.jpg", "images/proj/eng-ideas-clinic.jpg", "images/me.jpg"];
var index = 0;

function slideshow()
{
    faceImg.setAttribute("src", imgArray[index]);
    index++;
    if (index >= imgArray.length)
        index = 0;
}

var changename = setInterval(slideshow, 2000);

/* FOLLOWING CODE CAN BE USED TO STOP THE INTERVAL WITH A CLICK 
faceImg.onclick = function()
{
    clearInterval(changename); clearTimeout also exists
};

*/

// MODAL CONTENT

var modalPics = document.getElementsByClassName("modal-pic"); // get images
var modal1imgs = ["images/proj/tron-days-work-sq.jpg"];
var modal2imgs = ["images/proj/final-project-sq.jpg", "final-project-design-sq.jpg", "images/proj/final-project-group-sq.jpg"];
var modal3imgs = ["images/proj/wear-hacks-myo.jpg", "images/proj/wear-hacks-group.jpg", "wear-hacks-myo-2.jpg"];
var modal4imgs = [];
var modal5imgs = ["images/proj/catalyst-3/jpg", "images/proj/catalyst-2-sq", "images/proj/catalyst-google.jpg"];
var modal6imgs = [];
var modal7imgs = ["images/proj/eng-ideas-clinic.jpg"];
var modal8imgs = [];
var modalImages = [modal1imgs, modal2imgs, modal3imgs, modal4imgs, modal5imgs, modal6imgs, modal7imgs, modal8imgs];
var count = 0;

function modalSlideshow(ind)
{
    modalPics[ind].setAttribute("src", modalImages[ind][count])
    count++;
    if (count >= modalImages[ind].length)
            count = 0;
} 

var two = setInterval(modalSlideshow(1), 2000);

var modalTexts = document.getElementsByClassName("modal-text");
modalTexts[0].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[1].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[2].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[3].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[4].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[5].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[6].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[7].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";


// SMOOTH SCROLLING (w/ jQuery using code from w3schools.com w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll with some changes made)

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // 700 is the # of milliseconds to links
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
      });
    } // End if
  });
});


// TEXT OVERLAP ON IMAGE
hide = document.getElementsByClassName("hide");
function hideText()
{
    hide.setAttribute("visibility", "hidden");
}
