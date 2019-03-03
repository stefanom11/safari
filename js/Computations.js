// JavaScript source code

//DECLARE VARIABLES
//All pages
var guideCost = document.getElementById("guideCost");
var vehicleCost = document.getElementById("vehicleCost");
var accomodationCost = document.getElementById("accomodationCost");
var otherCost = document.getElementById("otherCost");
var totalCost = document.getElementById("totalCost");
var personCost = document.getElementById("personCost");
var people = document.getElementById("people");


//DEFINE FUNCTIONS
function guideCostCalculator(){

}

function vehicleCostCalculator(){

}

function accomodationCostCalculator(){

}

function totalCostCalculator(){

}

function personCostCalculator() {
        if(people.value>0){
            personCost.innerHTML= 5/people.value;
        } else {
            personCost.innerHTML = 0;
        }
}

function personCostCalculator1() {
    personCost.innerHTML = () => {
        if(people.value>0){
            return 5/people.value
        } else {
            return 0;
        }
    }
}


//EVENT LISTENERS
