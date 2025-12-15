document.getElementById("celsius").addEventListener("change",celsius);
document.getElementById("farenheit").addEventListener("change",farenheit);
document.getElementById("fecha").addEventListener("change",edad);

function celsius() {
    var celsius = document.getElementById("celsius").value;
    document.getElementById("farenheit").value = (celsius * 1.8) + 32;
}

function farenheit() {
    var farenheit = document.getElementById("farenheit").value;
    document.getElementById("celsius").value = (farenheit - 32) / 1.8;
}

function edad() {
    var fecha = document.getElementById("fecha").value; // formato YYYY-MM-DD
    var nacimiento = new Date(fecha);
    var hoy = new Date();
	
	if (nacimiento > hoy) {
        document.getElementById("edad").innerHTML = "Viajero en el tiempo";
        return; // salir de la función
    }

    var edad = hoy.getFullYear() - nacimiento.getFullYear();

    // ajustar si no ha cumplido años este año
    var m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
	if (nacimiento > hoy) {
        document.getElementById("edad").innerHTML = "¿Eres el doctor?";
    }else{
		document.getElementById("edad").innerHTML = "Tienes " + edad + " años";
	}
}