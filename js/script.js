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
            sendMail(name, email, subj, msg);
        }
}

function sendMail(name, email, subj, msg)
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

// ======== SLIDESHOWS ========

var faceImg = document.getElementById("face"); // get image
var imgArray = ["images/proj/catalyst-google.PNG", "images/proj/wear-hacks-group.jpg", "images/proj/eng-ideas-clinic.jpg", "images/me.jpg"];
var index = 0;
/*
function slideshow()
{
    faceImg.setAttribute("src", imgArray[index]);
    index++;
    if (index >= imgArray.length)
        index = 0;
}
var changename = setInterval(slideshow, 1000);*/

/* FOLLOWING CODE CAN BE USED TO STOP THE INTERVAL WITH A CLICK 
faceImg.onclick = function()
{
    clearInterval(changename); clearTimeout also exists
};
*/

// ======== MODAL CONTENT ========

var img1 = document.getElementById("pic-1"); // get images
var img2 = document.getElementById("pic-2"); // get images
var img3 = document.getElementById("pic-3"); // get images
var modal1imgs = ["images/proj/final-project-sq.jpg", "images/proj/tron-days-work-sq.jpg"];
var modal2imgs = ["images/proj/final-project-design-sq.jpg", "images/proj/final-project-group-sq.jpg", "images/proj/final-project-sq.jpg"];
var modal3imgs = ["images/proj/wear-hacks-group.jpg", "images/proj/wear-hacks-myo-2.jpg", "images/proj/wear-hacks-myo.jpg"];
var modal4imgs = [];
var modal5imgs = ["images/proj/catalyst-3/jpg", "images/proj/catalyst-2-sq", "images/proj/catalyst-google.jpg"];
var modal6imgs = [];
var modal7imgs = ["images/proj/eng-ideas-clinic.jpg"];
var modal8imgs = [];
var count = 0;
//var imageClicks = document.getElementsByClassName("startSlideshow");
/*
function modalSlideshow(img, arr)
{
    img.fadeIn('400');
    img.setAttribute("src",  arr[count]);
    count++;
    if (count >= arr.length)
            count = 0;
} 
var changename = setInterval(modalSlideshow, 1000, img1, modal1imgs);
for (l = 0; l < 3; l++)
{
    imageClicks[0].onclick = function(){
        clearInterval(changename);
        changename = setInterval(modalSlideshow, 2500, img1, modal1imgs);
    };
    clearInterval(changename);
    imageClicks[1].onclick = function(){
        clearInterval(changename);
        changename = setInterval(modalSlideshow, 2500, img2, modal2imgs);
    };
    
    clearInterval(changename);
    imageClicks[2].onclick = function(){
        clearInterval(changename);
        changename = setInterval(modalSlideshow, 2500, img3, modal3imgs);
    };
    clearInterval(changename);
}
*/
/*
function modalSlideshow2()
{
    img2.setAttribute("src",  modal2imgs[count]);
    count2++;
    if (count2 >= modal2imgs.length)
            count2 = 0;
} 
*/
//var changename1 = setInterval(modalSlideshow, 1000, img1, modal1imgs);
//var changename2 = setInterval(modalSlideshow2, 2000);

var modalTexts = document.getElementsByClassName("modal-text");
/*
// tron days
modalTexts[0].innerHTML = "<br>Tron Days was a two-day event held by during our first term of university where students, in teams of four, applied several skills developed througout the term in various problems. These were designed to integrate our five courses (calculus, linear algenra, digital computation (c++), mechatronics engineering (concepts course), and chemistry. The purpose of these problems were to solve open-ended questions, as seen in the real world, and use our assumptions, engineering judgement, and previous knowledge to come up with an appropriate solution.<br><br><indent>Prior to these two days, we designed a logo that was to represent us during the event using AutoCAD. This was for the development of our CAD skills and helped us collaborate and share ideas to come up with a good design. During the event, we had several problems centered around the movie <i>The Martian</i> where we disproved the probabilty that growing potatoes in that environment was possible, or researching appropriate materials to cover a rip in a high pressure difference wall. These activites helped me develop my <strong>problem solving</strong> skills, and to <strong>collaborate</strong> with my teammates to create a successful solution.";
//final project
modalTexts[1].innerHTML = "<br>The MTE 100 (Mechatronics Engineering)/GENE 121 (Digital Computation) final project was an integrated project spanning two months completed in a group of four students. The assignment was to create and program a robot that would perform a task. This was done using Lego NXT and RobotC, a C-based language. My team decided to create a robot that would act as an ATM. It was programmed to collect, scan, process, count, and sort money for the user. This was done using several sensors, such as colour sensors, encoders, ultrasonic sensors, etc.<br><br>This project had several deliverables throughout the timeline that allowed us to stay organized and focus on finishing the assignment in the allotted time. We used several project management techniques, such as the critial path method, gantt charts, and Excel spreadsheets to track our progress and ensure that we were moving at a good pace. We developed teamworking skills by collaborating our ideas to create the design and communicating with each other about our work so that our code would integrate well in the end. Our last deliverable for this assignment was a full report describing what our robot was and how it was designed. Thie greatly improved our report-writing skills and helped us stay more organised. We ended up finishing on track, and developed many vital skills along the way.";
// wearhacks 2017
modalTexts[2].innerHTML = "<br>WearHacks 2017 was a hacakthon held in Kitchener. I, along with three other friends, designed a productvity app to be used with a VR headset, and controlled by the Thalmic Labs' Myo Gesture Control Armband. This app featured sections such as a calendar, to-do list, user health, etc. It was designed in virtual reality that could then be transitioned into augmented reality for a more realistic and useful experience.<br><br>This app was developed with Unity and C#, and HTML/CSS for our website promoting the app.";
// kumon math and reading
modalTexts[3].innerHTML = "<br>Kumon is a math and reading academic enrichment program for students from preschool to grade 12 to supplement material taught in class. I was an early-learner tutor and was responsible for teaching students up to grade 3 concepts about math and reading. My other responsibilites include marking their classwork and homework, supervising the other students, and guiding them towards the answer if they had questions.<br><br>This job helped me gain responsiblity, develop <strong>time management skills</strong>, and improve my math skills.";
modalTexts[4].innerHTML = "The Grade 11 Girls Catalyst Conference was a 3 day overnight event where 50 delegates were chosen to attend and participate in various workshops and projects. There were various workshops covered where we gained many hands-on technical skills such as soldering, using machine shop tools to create a keychain, and using Arduino to create different LED colours and displays.";
modalTexts[5].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[6].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[7].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";

*/
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
    
     //   $("#face").fadeOut();
    // jQuery slideshows
    $('#img-click').on('click', setInterval(slideshows, 2000));
    
    function slideshows()
    {
        $('#pic-1').delay(2000).fadeOut(200);
        $('#pic-1').attr("src", modal1imgs[1]);
        $('#pic-1').fadeIn(200);
        $('#pic-1').attr("src", modal1imgs[0]);
        $('#pic-1').delay(2000).fadeOut(200);
        $('#pic-1').attr("src", modal1imgs[1]);
        $('#pic-1').fadeIn(200);
    }
});

// use fadeout jequery

// ======== TEXT OVERLAP ON IMAGE ========
hide = document.getElementsByClassName("hide");
function hideText()
{
    hide.setAttribute("visibility", "hidden");
}

// ======== GETTING WIDTH AND HEIGHT FOR ADJUSTMENTS TO SECTIONS ========
/*
function getWidthHeight() {
    var wtf = document.getElementById("demo");
    var h = wtf.offsetHeight;
    document.getElementById("demo").innerHTML = "<br>Height: " + h;
}*/