var modelos = ["camaro", "forte", "mazda3", "m240i", "a8"];
var marcas = ["mazda", "kia", "renault", "audi", "bmw"];
var imagenes = ["vehiculo1.png", "vehiculo2.png", "vehiculo3.png", "vehiculo4.png", "vehiculo5.png"];
var intervalId;

function generaNumeroAleatorio(max, min){
    return Math.round(Math.random() * (max - min) + min);
}

function getModeloAleatorio(){
	var numeroAleatorio = Math.floor(Math.random() * modelos.length);
    return modelos[numeroAleatorio];
}

function getMarcaAleatoria(){
	var numeroAleatorio = Math.floor(Math.random() * marcas.length);
    return marcas[numeroAleatorio];
}

var Vehiculo = function(){
	this.marca = "";
	this.modelo = ""; 
	this.velocidad = "";
	this.kmRecorridos = "";
	this.metrosAvanza = "";
}
Vehiculo.prototype.init = function(){
	this.kmRecorridos = 0;
	this.metrosAvanza = getMetrosQueAvanzaCadaSegundo(this.velocidad);
}
var Motocicleta = function(){
	this.init();
}
Motocicleta.prototype = new Vehiculo();

var Automovil = function(marca, modelo, velocidad, img, clase){
	this.marca = marca;
	this.modelo = modelo;
	this.velocidad = velocidad;
	this.imagen = img;
	this.clase = clase;
	this.init();
}
Automovil.prototype = new Vehiculo();
Automovil.prototype.pintarAuto = function(){
	var carretera = document.getElementById("carretera");

	var carril = document.createElement("div");
		carril.className = "carril1";
  	

  	var img_auto = document.createElement("img");
  		img_auto.className = this.clase;
  		img_auto.src = "./vehiculos/" + this.imagen;

  		carril.appendChild(img_auto);

  	document.body.insertBefore(carril, carretera); 
}

var Carrera = function(){
	this.vehiculos = [];
	this.distancia = 0;
}
Carrera.prototype.iniciarCarrera = function(){
	intervalId = setInterval(cicloCarrera, 1000);
}
Carrera.prototype.finCarrera = function(){
	clearInterval(intervalId);
}
Carrera.prototype.addAuto = function(){
	console.log("addAuto");
	var marca = document.getElementById("marcas").value;
	var modelo = document.getElementById("modelos").value;
	var imagen = document.getElementById("imagen").value;
	var velocidad = document.getElementById("velocidad").value;
	var clase = document.getElementById("clase").value;
	
	var auto = new Automovil(marca,modelo, velocidad, imagen, clase);
		this.vehiculos.push(auto);
		auto.pintarAuto();
	
}

function getMetrosQueAvanzaCadaSegundo(velocidadEnKmh){
    var metros = velocidadEnKmh*1000/3600;
    return metros;
}

function cicloCarrera(){
	console.log("cicloCarrera");
	if(carrera.distancia<200){
		carrera.distancia += 10;


		for(var v=0; v<carrera.vehiculos.length; v++){
			console.log(carrera.vehiculos[v]);
			pintarAvanceAuto(carrera.vehiculos[v]);
		}

		//pintarAvanceAuto(carrera.vehiculo2, "auto2");

		/*if(carrera.vehiculo1.kmRecorridos > 1110){
			alert("Primer lugar: Auto 1");
			carrera.finCarrera();
		}else if(carrera.vehiculo2.kmRecorridos > 1110){
			alert("Primer lugar: Auto 2");
			carrera.finCarrera();
		}*/
	} 
}

function pintarAvanceAuto(auto) {
	auto.kmRecorridos = auto.kmRecorridos + auto.metrosAvanza;
	console.log(auto.clase);
	var au = document.getElementsByClassName(auto.clase);
	auto.kmRecorridos = auto.kmRecorridos + auto.metrosAvanza;
	au[0].style.left = auto.kmRecorridos + "px";
}

function addElementos(){
	var marcas_select = document.getElementById("marcas")
		for(var i=0; i<marcas.length; i++){
			var option_mr = document.createElement("option");
			option_mr.value = marcas[i];
			option_mr.innerHTML = marcas[i];
			marcas_select.insertBefore(option_mr,null);
		}

	var modelos_select = document.getElementById("modelos");
		for(var i=0; i<modelos.length; i++){
			var option_md = document.createElement("option");
			option_md.innerHTML = modelos[i];
			modelos_select.insertBefore(option_md,null);
		}

	var imagen_select = document.getElementById("imagen");
		for(var i=0; i<imagenes.length; i++){
			var option_img = document.createElement("option");
			option_img.innerHTML = imagenes[i];
			imagen_select.insertBefore(option_img,null);
		}
}

var carrera = new Carrera();

window.onload = function() {
  addElementos();
};


	