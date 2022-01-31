var css= document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomColorGen");
var number;
var hexNumber;



/*body.style.background = "linear-gradient(to right,"+ color1.value + "," + color2.value + ")";*/
/*css.textContent = body.style.background + ";";*/
function genRandomNumber(){
	number = Math.floor(Math.random() * 10000000);
	hexNumber = number.toString(16);
}


function setGradient(){
	body.style.background = "linear-gradient(to right,"+ color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function setRandomColors(){

	genRandomNumber();
	var colorHexNumber1="#"+hexNumber;
	genRandomNumber();
	var colorHexNumber2="#"+hexNumber;

	body.style.background = "linear-gradient(to right,"+colorHexNumber1+"," + colorHexNumber2 + ")";
	console.log(colorHexNumber);
}


button.addEventListener("click", setRandomColors);
color1.addEventListener("input", setGradient);
	


color2.addEventListener("input", setGradient);
	