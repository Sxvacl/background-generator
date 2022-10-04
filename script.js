var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);







function random_bg_color() {
   
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var x1 = Math.floor(Math.random() * 256);
    var y1 = Math.floor(Math.random() * 256);
    var z1 = Math.floor(Math.random() * 256);
    var bgColor1 = "rgb(" + x + "," + y + "," + z + ")";
    var bgColor2 = "rgb(" + x1 + "," + y1 + "," + z1 + ")";
 console.log(bgColor1)
 console.log(bgColor2);
    
    body.style.background = 
	"linear-gradient(to right, " 
	+ bgColor1
	+ ", " 
	+ bgColor2 
	+ ")";;
    css.textContent = body.style.background + ";";
}