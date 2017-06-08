/*

JavaScript for raveenadsouza.com
Copyright 2017 Raveena D'Souza

*/

// CODE FOR FORMS
/*
var nameField = document.getElementById("n");
nameField.onfocus = function() 
{
    if(nameField.value == "NAME")
        {
            nameField.value = "";
        }
};
nameField.onblur = function() 
{
    if(nameField.value == "")
        {
            nameField.value = "NAME";
        }
};
*/

function validate() {
    alert("hejkfdge");
    var error = document.getElementById("error");
    
    var name = document.getElementById("n").nodeValue;
    var email = document.getElementById("e").nodeValue;
    var subj = document.getElementById("s").nodeValue;
    var msg = document.getElementById("m").nodeValue;
    
    
    
    if (name == "" || email = "" || msg == "")
        {
            error.innerHTML = "Please fill the message box";
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
var modalTexts = document.getElementsByClassName("modal-text");
modalTexts[0].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[1].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[2].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[3].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[4].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[5].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[6].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";
modalTexts[7].innerHTML = "PARAGRAPH 1<br><br>paragraph 2";