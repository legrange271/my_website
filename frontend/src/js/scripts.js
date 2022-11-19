function SendAlert() {
	alert("Hello - thnak you to coming to my website");
}

function ShowHidden(){
	document.getElementById("hiddentext").style.display = 'block';
}

function updateTheNumber(){
	var currentVal = parseFloat(document.getElementById("numbertoupdate").innerHTML);
	console.log(currentVal)
	console.log(typeof currentVal)
	if (currentVal == 3) {
		var newVal = Math.PI;
	}
	else if (currentVal > 10){
		var newVal = Math.floor(Math.random()*100)
	}
	else {
		var newVal = currentVal +1;
	}
	document.getElementById("numbertoupdate").innerHTML = newVal

}

			