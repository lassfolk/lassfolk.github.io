var toggleButton = 0;

function toggleNav() {
    
    if (toggleButton === 0) {
    document.getElementById("sidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("openmenubutton_active").style.opacity = "1";
    document.getElementById("openmenubar").style.color = "blue";
    toggleButton = 1;
    }
    else if (toggleButton === 1) {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "200px";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("openmenubutton_active").style.opacity = "0";
    document.getElementById("openmenubar").style.color = "white";
    toggleButton = 0;  
    }
}