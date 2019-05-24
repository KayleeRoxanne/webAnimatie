//ViewSecond >> met hulp van Joop<< ////////
var banaan = document.querySelector('.banana');
var back = document.querySelector('body');
var marilyn = document.querySelector('.marilyn');

function fadeIn() {
    back.classList.add("changeColor");
    marilyn.classList.remove("marilyn");
    marilyn.classList.add("marilyn2");
    banaan.classList.add("movebanana");
}

banaan.addEventListener("click", fadeIn);

//back to firstView//////////

function checkKey(e) {
    if (e.keyCode == 39) {
        back.classList.add("changeColor");
        marilyn.classList.remove("marilyn");
        marilyn.classList.add("marilyn2");
        banaan.classList.add("movebanana");
    }
    if (e.keyCode == 37) {
        back.classList.remove("changeColor");
        marilyn.classList.add("marilyn");
        marilyn.classList.remove("marilyn2");
        banaan.classList.remove("movebanana");
    }

}

document.addEventListener('keydown', checkKey, false);

////////////////peel off banana////////////////////
var topLeft = document.querySelector('#schil_left');
var topRight = document.querySelector('#schil_right');
var under = document.querySelector('#schil_under');
var svg = document.querySelector('.banana');

function schillen() {
    if (svg.classList.contains('movebanana')) {
        topLeft.classList.add("topLeftMove");
        topRight.classList.add("topRightMove");
        under.classList.add("underMove");
    }
}

function schillen2() {
    topLeft.classList.remove("topLeftMove");
    topRight.classList.remove("topRightMove");
    under.classList.remove("underMove");
}

topLeft.addEventListener("click", schillen);
topLeft.addEventListener("dblclick", schillen2);
topRight.addEventListener("click", schillen);
topRight.addEventListener("dblclick", schillen2);
under.addEventListener("click", schillen);
under.addEventListener("dblclick", schillen2);

/////////////header icoon////////////////////

var rectangle = document.querySelector('#rectangle');
var filledHalf = document.querySelector('#filledHalf');
var button = document.querySelector('#button');

function clickRight() {
    //    filledHalf.classList.add("fillLeft");
    //    filledHalf.classList.remove("fillRight");

    button.classList.add("buttonclick");
    console.log('hoi');
    back.classList.add("changeColor");
    marilyn.classList.remove("marilyn");
    marilyn.classList.add("marilyn2");
    banaan.classList.add("movebanana");
}

function clickLeft() {
    button.classList.remove("buttonclick");
    //    filledHalf.classList.add("fillRight");
    //    filledHalf.classList.remove("fillLeft");

    console.log('nee');
    back.classList.remove("changeColor");
    marilyn.classList.add("marilyn");
    marilyn.classList.remove("marilyn2");
    banaan.classList.remove("movebanana");
}

button.addEventListener("click", clickRight);
button.addEventListener("dblclick", clickLeft);





///////////marilynMond//////////////////////
var banaan = document.querySelector('.banana');
var marilyn = document.querySelector('.marilyn');
var chin = document.querySelector('#chin');
var h2 = document.querySelector('h2');

function showMouth() {
    chin.classList.toggle("showMouth");
    h2.classList.toggle("praten");

}

function removeMouth() {
    chin.classList.remove("showMouth");
    h2.classList.remove("praten");
}

marilyn.addEventListener("mouseover", showMouth);
marilyn.addEventListener("mouseout", removeMouth);