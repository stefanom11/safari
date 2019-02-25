// JavaScript source code

//DECLARE VARIABLES
//All pages
var bnIndex = document.getElementById("bnIndex");
//Book.html
var pgBookBnGuides = document.getElementById("pgBookBnGuides");
var pgBookBnVehicles = document.getElementById("pgBookBnVehicles");
//var pgBookBody = document.getElementById("pgBookBody");

var bookLink = document.getElementById("bookLink");
var bodyIndex = document.getElementById("bodyIndex");
//Index.html

//Guides.html
var pgGuidesBnBook = document.getElementById("pgGuidesBnBook");



//DEFINE FUNCTIONS
function goToPage(urlDominioSet) {
    collectParametersFromCurrentPage();
    collectParametersFromCurrentURL();    
    urlQuerySet = "";
    urlQuerySet1 = "";
    for (var z in parameters1) {
        urlQuerySet1 = urlQuerySet1 + z + "=" + parameters1[z] + "&";
    }
    for (var j in parameters) {
        if (!parameters1.includes(parameters[j])) {
            urlQuerySet = urlQuerySet + j + "=" + parameters[j] + "&";
        }      
    }
    
    window.location.href = urlDominioSet + "?" + urlQuerySet + urlQuerySet1;
}

function assegnaParametri() {
    collectParametersFromCurrentURL();
    inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].id in parameters && inputs[i].id !== "" && inputs[i].type !== 'radio') {
                inputs[i].value = parameters[inputs[i].id];         
        } else if (inputs[i].type == 'radio' && parameters[inputs[i].name] == inputs[i].value) {
            inputs[i].checked = true;
        }
    }
}

function collectParametersFromCurrentURL() {
    var urlQueryGet = location.search.substring(1).split("&");
    parameters = [];
    for (var i = 0; i < urlQueryGet.length; i++) {
        var temp = urlQueryGet[i].split("=");
        var name = unescape(temp[0]);
        var valore = unescape(temp[1]);
        parameters[name] = valore;
    } 
}

function collectParametersFromCurrentPage() {
    parameters1 = [];
    inputs = document.getElementsByTagName("input");
    for (var n = 0; n < inputs.length; n++) {
        if (inputs[n].id !== "undefined" && inputs[n].id !== null && inputs[n].id !== "" && inputs[n].type !== "radio") {
            var name1 = inputs[n].id;
            var valore1 = document.getElementById(inputs[n].id).value;
            parameters1[name1] = valore1;
        } else if (inputs[n].name !== "undefined" && inputs[n].name !== null && inputs[n].name !== "" && inputs[n].type === "radio" && inputs[n].checked) {
            name1 = inputs[n].name;
            valore1 = inputs[n].value;
            parameters1[name1] = valore1;
        }
    }
}






//EVENT LISTENERS
//pgBookBody.addEventListener("loadend", assegnaParametri);

pgBookBnGuides.addEventListener("click", function () { goToPage("Guides.html"); });
pgBookBnVehicles.addEventListener("click", function () { goToPage("Vehicles.html"); });
bnIndex.addEventListener("click", function () { goToPage("Index.html"); });
pgGuidesBnBook.addEventListener("click", function () { goToPage("Book.html"); });