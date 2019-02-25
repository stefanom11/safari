// JavaScript source code

function DiscoverDropdownOn() {
    document.getElementById("DiscoverDropdownContainer").style.zIndex = "1";
    document.getElementById("DiscoverDropdown").style.display = "block";
}

function DiscoverDropdownOff() {
    document.getElementById("DiscoverDropdown").style.display = "none";
    document.getElementById("DiscoverDropdownContainer").style.zIndex = "-1";
}

function showHint(str) {
    if (str.length === 0) {
        document.getElementById("DiscoverDropdown").innerHTML = "";
        document.getElementById("DiscoverDropdown").style.display = "none";
        document.getElementById("DiscoverDropdownContainer").style.zIndex = "-1";
        return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunc3(this, str);
        }
    };
    xhttp.open("GET", "xml/Cities.xml", true);
    xhttp.send();
}


function myFunc3(xml, str) {
    var i;
    var xmlDoc = xml.responseXML;
    var table;
    var hint = "";
    var cod = "";
    var x = xmlDoc.getElementsByTagName("city");
    for (i = 0; i < x.length; i++) {
        if (x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue.toLowerCase().includes(str.toLowerCase()) == true) {
            hint = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
            cod += "<div>" + hint + "</div>";
        }
    }
    document.getElementById("DiscoverDropdown").innerHTML = cod;
}