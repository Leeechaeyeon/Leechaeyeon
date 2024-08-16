const $cursor = document.querySelector('#cursor__circle');
const $hover = document.querySelectorAll('a');

document.body.addEventListener('mousemove', onMouseMove);
    for (let i = 0; i < $hover.length; i++) { $hover[i].addEventListener('mouseenter', onMouseHover); $hover[i].addEventListener('mouseleave', onMouseHoverOut);
}

function onMouseMove(e) {
    TweenMax.to($cursor, .4, {
        x: e.pageX - 16,
        y: e.pageY - 16
    })
}

function onMouseHover() {
    /*TweenMax.to($cursor, .4, {
        scale: 3,
    })*/
}
function onMouseHoverOut() {
    /* TweenMax.to($cursor, .4, {
        scale: 1,
    })*/
}


const $profile_less = document.querySelector('#profile__less');
const $profile_more = document.querySelector('#profile__more');
const $scrollable = document.querySelector('#scrollable');
const $button = document.querySelector('#more_less');

$button.onclick = function () {

    if($profile_less.className == "hidden"){
        $profile_less.className = "";
        $scrollable.scrollTop = 0;
        $profile_more.className = "hidden";
        $button.innerHTML = "(more)";
    } else {
        $profile_less.className = "hidden";
        $profile_more.className = "";
        $profile_more.scrollTop = 0;
        $button.innerHTML = "(less)";
    }
};

const $body = document.querySelector('body');
const $button2 = document.querySelector('#dark_light');

var date = new Date();
var hours = date.getHours();

// Check for date or night
function checkTime() {  
  
    if (hours >= 9 && hours <= 20) {
        $body.className = "";
        $button2.innerHTML = "(dark)";

    } else {
        $body.className = "dark";
        $button2.innerHTML = "(light)";
    }
}

$button2.onclick = function () {

    if($body.className == "dark"){
        $body.className = "";
        $button2.innerHTML = "(dark)";
    } else {
        $body.className = "dark";
        $button2.innerHTML = "(light)";
    }
};

$(document).ready(function() {
    checkTime();
});
