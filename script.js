/*

JavaScript for raveenadsouza.com
Copyright 2017 Raveena D'Souza

*/

// CODE FOR FORMS

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

// SLIDESHOWS, can be done with an array of image sources and timers to display the different images

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

// MODALS