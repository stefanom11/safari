// JavaScript source code
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "xml/News.xml", true);
xhttp.send();

// insert the content by reading the xml file
function myFunction(xml) {
    var i;
    var j;
    var category;
    var xmlDoc = xml.responseXML;
    var table;
    var imm;
    var cod = "";
    var x = xmlDoc.getElementsByTagName("news");
    var y = document.getElementsByClassName('containerslider');
    for (j = 0; j < y.length; j++) {
        category = y[j].getAttribute('name');
        for (i = 0; i < x.length; i++) {
            if (x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue == category) {
                table = x[i].getElementsByTagName("body")[0].childNodes[0].nodeValue;
                title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                imm = x[i].getElementsByTagName("immagine")[0].childNodes[0].nodeValue;
                cod +=
                    "<div class='Highlight row-es-10 row-s-10' style='min-width: 160px; max-width: 250px; border-radius:5px; margin:15px;'> " +
                    "<div class='row-es-6 row-s-6 col-es-12 col-s-12'>" +
                "<img draggable='false' src='images/" + imm + "' style='max-width: 100%; height: auto; max-height: 100%; margin-left:auto; margin-right:auto; display:block;'></img>" +
                    "</div>" +
                    "<div class='row-es-4 row-s-4' style='padding: 5px'>" +
                    "<p draggable='false' class='t5' style='white-space: normal;'>" + title + "</p>" +
                    "<p draggable='false' style='white-space: normal;'>" + table + "</p>" +
                    "</div>" +
                    "<div class='row-es-2 row-s-2'>" +
                    "</div>" +
                    "</div>";
            }

        }
        y[j].innerHTML = y[j].innerHTML + cod;
        cod = "";
    }
}


// make it scrollable by using buttons
function ScrollLeftSlowly(idContainer) {
    $('#' + idContainer).animate({ scrollLeft: '-=50' }, 500);
}
function ScrollRightSlowly(idContainer) {
    $('#' + idContainer).animate({ scrollLeft: '+=50' }, 500);
}


// make it scrollable by dragging
//$(function () {
//    var curDown = false,
//        curXPos = 0;
//    $('.containerslider').mousemove(function (m) {
//        if (curDown === true) {
//            $(this).scrollLeft($(window).scrollLeft() + (curXPos - m.pageX));
//        }
//    });

//    $('.containerslider').mousedown(function (m) {
//        curDown = true;
//        curXPos = m.pageX;
//    });

//    $('.containerslider').mouseup(function () {
//        curDown = false;
//    });
//})