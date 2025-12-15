document.getElementById("colorTexto").addEventListener("change",colorTexto);
document.getElementById("colorFondo").addEventListener("change",colorFondo);
document.getElementById("tamaño").addEventListener("change",tamaño);
document.getElementById("negrita").addEventListener("change",negrita);
document.getElementById("cursiva").addEventListener("change",cursiva);

function colorTexto(){
	console.log("Color texto: ");
	var colorTexto = document.getElementById("colorTexto").value;
	console.log(colorTexto);
	switch (colorTexto){
		case "black":
			document.getElementById("texto").style.color="black";
			break;
		case "yellow":
			document.getElementById("texto").style.color="yellow";
			break;
		case "violet":
			document.getElementById("texto").style.color="violet";
			break;
		case "blue":
			document.getElementById("texto").style.color="blue";
			break;
		
	}
}

function colorFondo(){
	console.log("Color fondo: ");
	var colorFondo = document.getElementById("colorFondo").value;
	console.log(colorFondo);
	switch (colorFondo){
		case "white":
			document.getElementById("texto").style.backgroundColor="white";
			break;
		case "black":
			document.getElementById("texto").style.backgroundColor="black";
			break;
		case "violet":
			document.getElementById("texto").style.backgroundColor="violet";
			break;
		case "blue":
			document.getElementById("texto").style.backgroundColor="blue";
			break;
		
	}
}

function tamaño(){
	console.log("Tamaño texto: ");
	var tamaño = document.getElementById("tamaño");
	console.log(tamaño.value);
	if(tamaño.value <10){
		tamaño.value = 10;
		console.log(tamaño.value);
	}
	if(tamaño.value > 40){
		tamaño.value = 40;
		console.log(tamaño.value);
	}
	document.getElementById("texto").style.fontSize = tamaño.value + "px";
}

function negrita(){
	console.log("Negrita: ");
	var negrita = document.getElementById("negrita").checked;
	console.log(negrita);
	if(negrita){
		document.getElementById("texto").style.fontWeight = "bold";
	}else{
		document.getElementById("texto").style.fontWeight = "normal";
	}
}

function cursiva(){
	console.log("Cursiva: ");
	var cursiva = document.getElementById("cursiva").checked;
	console.log(cursiva);
	if(cursiva){
		document.getElementById("texto").style.fontStyle = "italic";
	}else{
		document.getElementById("texto").style.fontStyle = "normal";
	}
}