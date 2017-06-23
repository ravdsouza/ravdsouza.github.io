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
    
    if (!(name == "") && !(email == "") && !(msg == ""))
        {
            sendMail();
        }
}

function sendMail()
{
    if (!(subj == ""))
        {
            window.location.href = "mailto:radsouza@edu.uwaterloo.ca?subject="+subj+"&body=Name: "+name+"        Email: "+email+"        Message: "+msg;
        }
    else
        {
          window.location.href = "mailto:radsouza@edu.uwaterloo.ca?subject=Message for Raveena D'Souza&body=Name: "+name+"        Email: "+email+"        Message: "+msg;
        }
} 

// ======== SLIDESHOWS ========

/*var faceImg = document.getElementById("face"); // get image
var imgArray = ["images/proj/catalyst-google.PNG", "images/proj/wear-hacks-group.jpg", "images/proj/eng-ideas-clinic.jpg", "images/me.jpg"];
var index = 0;

function slideshow()
{
    faceImg.setAttribute("src", imgArray[index]);
    index++;
    if (index >= imgArray.length)
        index = 0;
}

var changename = setInterval(slideshow, 2000);*/

/* FOLLOWING CODE CAN BE USED TO STOP THE INTERVAL WITH A CLICK 
faceImg.onclick = function()
{
    clearInterval(changename); clearTimeout also exists
};

*/

// ======== MODAL CONTENT ========

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

// tron days
modalTexts[0].innerHTML = "<br>Tron Days was a two-day event held by during our first term of university where students, in teams of four, applied several skills developed througout the term in various problems. These were designed to integrate our five courses (calculus, linear algenra, digital computation (c++), mechatronics engineering (concepts course), and chemistry. The purpose of these problems were to solve open-ended questions, as seen in the real world, and use our assumptions, engineering judgement, and previous knowledge to come up with an appropriate solution.<br><br><indent>Prior to these two days, we designed a logo that was to represent us during the event using AutoCAD. This was for the development of our CAD skills and helped us collaborate and share ideas to come up with a good design. During the event, we had several problems centered around the movie <i>The Martian</i> where we disproved the probabilty that growing potatoes in that environment was possible, or researching appropriate materials to cover a rip in a high pressure difference wall. These activites helped me develop my <strong>problem solving</strong> skills, and to <strong>collaborate</strong> with my teammates to create a successful solution.";
//final project
modalTexts[1].innerHTML = "<br>The MTE 100 (Mechatronics Engineering)/GENE 121 (Digital Computation) final project was an integrated project spanning two months completed in a group of four students. The assignment was to create and program a robot that would perform a task. This was done using Lego NXT and RobotC, a C-based language. My team decided to create a robot that would act as an ATM. It was programmed to collect, scan, process, count, and sort money for the user. This was done using several sensors, such as colour sensors, encoders, ultrasonic sensors, etc.<br><br>This project had several deliverables throughout the timeline that allowed us to stay organized and focus on finishing the assignment in the allotted time. We used several project management techniques, such as the critial path method, gantt charts, and Excel spreadsheets to track our progress and ensure that we were moving at a good pace. We developed teamworking skills by collaborating our ideas to create the design and communicating with each other about our work so that our code would integrate well in the end. Our last deliverable for this assignment was a full report describing what our robot was and how it was designed. Thie greatly improved our report-writing skills and helped us stay more organised. We ended up finishing on track, and developed many vital skills along the way.";
// wearhacks 2017
modalTexts[2].innerHTML = "<br>WearHacks 2017 was a hacakthon held in Kitchener. I, along with three other friends, designed a productvity app to be used with a VR headset, and controlled by the Thalmic Labs' Myo Gesture Control Armband. This app featured sections such as a calendar, to-do list, user health, etc. It was designed in virtual reality that could then be transitioned into augmented reality for a more realistic and useful experience.<br><br>This app was developed with Unity and C#, and HTML/CSS for our website promoting the app.";
// kumon math and reading
modalTexts[3].innerHTML = "<br>Kumon is a math and reading academic enrichment program for students from preschool to grade 12 to supplement material taught in class. I was an early-learner tutor and was responsible for teaching students up to grade 3 concepts about math and reading. My other responsibilites include marking their classwork and homework, supervising the other students, and guiding them towards the answer if they had questions.<br><br>This job helped me gain responsiblity, develop <strong>time management skills</strong>, and improve my math skills.";
modalTexts[4].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[5].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[6].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[7].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";


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


// ======== TEXT OVERLAP ON IMAGE ========
hide = document.getElementsByClassName("hide");
function hideText()
{
    hide.setAttribute("visibility", "hidden");
}