//Funciones
document.getElementById("botonDespedir").addEventListener("click", despedir);
document.getElementById("botonModoClaro").addEventListener("click", claro);
document.getElementById("botonModoOscuro").addEventListener("click", oscuro);



function saludar() {
    var nombre = document.getElementById("nombre").value;
    var saludo = document.getElementById("saludo");
	if (nombre == ""){
		saludo.innerHTML = "";
	}else{
    saludo.innerHTML = "Hola " + nombre;
	saludo.style.color="blue";
	}
}

function despedir() {
    var nombre = document.getElementById("nombre").value;
    var saludo = document.getElementById("saludo");
	if (nombre == ""){
		saludo.innerHTML = "";
	}else{
    saludo.innerHTML = "Adios " + nombre;
	saludo.style.color="#F527F2";
	}
}

function claro() {
	var header = document.querySelector("header");
	var main = document.querySelector("main");
	var footer = document.querySelector("footer");
	
	main.style.backgroundColor="white";
	header.style.backgroundColor="yellow";
	header.style.color="black";
	footer.style.backgroundColor="yellow";
	footer.style.color="black";
}

function oscuro(){
    var header = document.querySelector("header");
	var main = document.querySelector("main");
	var footer = document.querySelector("footer");
	
	main.style.backgroundColor="darkgray";
	header.style.backgroundColor="black";
	header.style.color="white";
	footer.style.backgroundColor="black";
	footer.style.color="white";
}