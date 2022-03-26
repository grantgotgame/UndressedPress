//Slider section-------------------------------
//Adapted from Jurassic Future team project (JF) with help from https://www.geeksforgeeks.org/how-to-change-the-text-of-a-label-using-javascript/
//I changed an image slideshow to an articles slideshow that links to each individual article. I removed the caption and added title, author, teaser, and link.
var i = 0;
var images = [];
var alt = [];
var title = [];
var author = [];
var teaser = [];
var link = [];

//images array list
images[0] = 'img/article/Great-British-Skinny-Dip.jpg';
images[1] = 'img/article/seminude-hikers.jpg';
images[2] = 'img/article/nude-hot-springs-1.jpg';
images[3] = 'img/article/man-sleeping-naked.jpg';

alt[0] = "Great British Skinny Dip, Studland Beach";
alt[1] = "Photograph of seminude hikers";
alt[2] = "Illustration of woman at Nude Hot Springs";
alt[3] = "Man sleeping naked";

title[0] = "What nudists say about Wales's best nude beaches";
title[1] = "Everybody Naked: Can Naturism become a Trend?";
title[2] = "How a Visit to Nude Hot Springs Helped Me Confront My Fear of Aging";
title[3] = "7 Reasons Why Sleeping Naked Means Sleeping Better";

author[0] = "by Demi Roberts";
author[1] = "by Nick & Lins";
author[2] = "by Ashley Brooks";
author[3] = "by Sara Novak";

teaser[0] = "It might still be winter, but cold water skinny dipping is very much on trend";
teaser[1] = "What’s a trend? It’s basically something that suddenly becomes very popular.";
teaser[2] = "A day spent bathing among naked strangers helped writer Ashley Brooks become more comfortable in her own skin.";
teaser[3] = "And one reason why it’s actually gross.";

link[0] = 'beaches.html';
link[1] = 'trend.html';
link[2] = 'fear.html';
link[3] = 'sleep.html';

function changeImg() {
    //add src to the slider in the index.html
    document.getElementById("slider").src = images[i];
    document.getElementById("slider").alt = alt[i];
    document.getElementById("ss-title").innerHTML = title[i];
    document.getElementById("ss-author").innerHTML = author[i];
    document.getElementById("ss-teaser").innerHTML = teaser[i];
    document.getElementById("ss-link").action = link[i];
    resetDot();
    document.getElementById("dot-" + [i + 1]).style.backgroundColor = "#717171";
}

function leftArrow() {
    //Check if i is 0, then go to the last element of the array instead of go to -1 index
    (i == 0 ? i = images.length - 1 : i--);
    changeImg();
}

function rightArrow() {
    //Check if i is the last element of the array, then go to the first element of the array instead of exceeds array bound
    (i == images.length - 1 ? i = 0 : i++);
    changeImg();
}

//When the index page is loaded, run changeImg function to get the first image
//Adapted from JF with help from https://stackoverflow.com/questions/9578348/best-way-to-execute-js-only-on-specific-page and https://stackoverflow.com/questions/17970734/how-to-call-window-load-event-on-specific-page
function loadIndex() {
    if (window.location.href.match('index.html')) {
        return changeImg();
    }
}
window.onload = loadIndex();

//----------------------------------------------


//Slider dot------------------------------------
function resetDot() {
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "#bbb";
    }
}
//----------------------------------------------