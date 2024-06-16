var menu = document.getElementById('menu');
var menuBtn = document.getElementById('menubtn');
var navigation = document.getElementById('navigation');

menuBtn.onclick = function(e) {
    var currentRight = window.getComputedStyle(navigation).right;
    if (currentRight == "-200px") {
        navigation.style.right = "0";
        menu.src = "images/close.png";
    } else {
        navigation.style.right = "-200px";
        menu.src = "images/menu.png";
    }
    e.stopPropagation(); // Prevent the event from bubbling up to the document
}

document.onclick = function(e) {
    var currentRight = window.getComputedStyle(navigation).right;
    if (currentRight == "0px" && !navigation.contains(e.target) && e.target !== menuBtn) {
        navigation.style.right = "-200px";
        menu.src = "images/menu.png";
    }
}