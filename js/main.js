var src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHt6632X9OBWYjyg1jvDlbDGDC94HEr_M&callback=myMap"

var latitude = 1;  
var longitude = 1;
var myLatLng = null;

class Positions {
 	constructor(nome,latitude,longitude){
		this.nome = nome;
		this.latitude = latitude;
		this.longitude = longitude;	
	}	

}

function carregaUmElementoDoBancoDeDados(){
	setTimeout(function(){
		let tratamento = fetch("http://netocavalcante.pythonanywhere.com/saude/saude/1/");
		tratamento.then(dados=>dados.json())
		.then(dados=>dados.map(tratamento=>{
			let pos = new Position(tratamento.nome, tratamento.x_coordinate, tratamento.y_coordinate);			
		console.log(pos);
		})).catch(err => console.error(err))},300);	
}



if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

function execute(){
	
	if (navigator.geolocation) {
	 	navigator.geolocation.getCurrentPosition(showPosition);	
		carregaUmElementoDoBancoDeDados();		
		myMap();
	} else {
	    document.getElementById("label").innerHTML = "Geo localizacao não suportada";		
	}		

}

var x = document.getElementById("label");


function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    
	latitude = position.coords.latitude;
	longitude = position.coords.longitude
	myMap();
}

function myMap() {

 myLatLng = {lat: latitude, lng: longitude};

var mapProp= {
    center:new google.maps.LatLng(latitude,longitude) 	
};

var map=new google.maps.Map(document.getElementById("map"),{zoom: 18, center:myLatLng});

var mark = new google.maps.Marker({
position : myLatLng, map:map, title :"My position"
}); 



}

