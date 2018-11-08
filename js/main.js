/*
// Service Worker Registration

if (navigator.serviceWorker) {
	navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
		console.log('ServiceWorker registration successful with scope:',  registration.scope);
	}).catch(function(error) {
		console.log('ServiceWorker registration failed:', error);
	});
}

// Create Element on HTML

function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

// FETCH URGENCIA

const divHospitais = document.getElementById('hospitais');
const URL_URGENCIA = 'https://catalogodeservico.com.br/saude/hospitais/';
fetch(URL_URGENCIA)
	.then(response => response.json()) // retorna uma promise
	.then(data => {
		let services = data.services;

		return services.map(service => {
			let collection = createNode('div'),
			a = createNode('a');
			
			collection.innerHTML = `${a}`;
			a.innerHTML = `${service.name}`;
			
			a.href = '../partials/serviceContent.html';
			a.className = 'collection-item waves-effect black-text';
			collection.className = 'collection';
			
			append(divHospitais, collection);
			append(collection, a);
		})
	})
	.catch(err => {
		// trata se algumas das promises falhar
		console.log('Falha na recuperação de informações', err);
	});
*/

// Service Worker Registration

if (navigator.serviceWorker) {
	navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
		console.log('ServiceWorker registration successful with scope:',  registration.scope);
	}).catch(function(error) {
		console.log('ServiceWorker registration failed:', error);
	});
}

function initMap() {
    
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: -9.28, lng: -36.05},
    });

    const url = 'https://catalogodeservico.com.br/saude/hospitais/';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let services = data;

            return services.map(service => {
                let latitude = parseFloat(service.y_coordinate, 6);
                let longitude = parseFloat(service.x_coordinate, 6);

                let latLng = { lat: latitude, lng: longitude };

                let marker = new google.maps.Marker({
                    position: latLng,
                    map: map
                })
            });
        });
};