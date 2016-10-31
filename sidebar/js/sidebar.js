var toggleButton = 0;

function toggleNav() {
    
    if (toggleButton === 0) {
    document.getElementById("sidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.transition = "0.5s";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    /*document.getElementById("openmenubutton").style.opacity = "0.5";*/
    document.getElementById("openmenubar").style.color = "blue";
    document.getElementById("openmenubutton").src="img/menubutton_active.jpg";
    toggleButton = 1;
    }
    else if (toggleButton === 1) {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("main").style.transition = "0.5s";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
    /*document.getElementById("openmenubutton").style.opacity = "1";*/
    document.getElementById("openmenubar").style.color = "white";
    document.getElementById("openmenubutton").src="img/menubutton.jpg";
    toggleButton = 0;  
    }
}