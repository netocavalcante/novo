if ('serviceWorker' in navigator) {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
        .register('service-worker.js')
        .then(() => console.log('Service Worker Registered'));
    }
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
            
            let marker =  new google.maps.Marker({
                position: latLng,
                map: map,
                animation: google.maps.Animation.DROP,
            });

          
            let contentString = 
            `<div class="containerInfoWindow">
                <h1 class="titleInfoWindow">${service.nome}</h1>
                <div id="bodyContentInfoWindow">
                    <p class="description">${service.endereco}</p>
                    <a class="btn" href="https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}" target="_blank">Como chegar lá</a>
                </div>
            </div>`;
            
            let infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });

            
        });
    });
    
};