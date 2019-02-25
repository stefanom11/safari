// JavaScript source code

//DECLARE VARIABLES
//All pages
var SDMenuOverlay = document.getElementById("SDMenuOverlay");
var SDMenu = document.getElementById("SDMenu");
var SDMenuIcon = document.getElementById("SDMenuIcon");
var SDMenuOverlayArea1 = document.getElementById("SDMenuOverlayArea1");
var sumUpOverlay = document.getElementById("sumUpOverlay");
var checkDetails = document.getElementById("checkDetails");
var sumUpOverlayoutArea = document.getElementsByClassName("sumUpOverlayoutArea");
var exploreOverlay = document.getElementById("exploreOverlay");


//DEFINE FUNCTIONS
function SDMenuOverlayOn() {
    SDMenuOverlay.style.display = "block";
    setTimeout(SDMenuOverlayOn1, 50);
}
function SDMenuOverlayOn1() {
    SDMenu.style.width = "50%";
}

function SDMenuOverlayOff() {
    SDMenu.style.width = "0%";
    setTimeout(SDMenuOverlayOff1, 1800);
}
function SDMenuOverlayOff1() {
    SDMenuOverlay.style.display = "none";
}
function sumUpOverlayOn() {
    sumUpOverlay.style.display = "block";
}
function sumUpOverlayOff() {
    sumUpOverlay.style.display = "none";
}
function ExploreOverlayOn() {
    exploreOverlay.style.display = "block";
}
function ExploreOverlayOff() {
    exploreOverlay.style.display = "none";
}




//EVENT LISTENERS
SDMenuIcon.addEventListener("click", SDMenuOverlayOn);
SDMenuOverlay.addEventListener("click", SDMenuOverlayOff);
SDMenuOverlayArea1.addEventListener("click", SDMenuOverlayOff);
checkDetails.addEventListener("click", sumUpOverlayOn);
for (var i = 0; i < sumUpOverlayoutArea.length; i++) {
    sumUpOverlayoutArea[i].addEventListener("click", sumUpOverlayOff);
}
