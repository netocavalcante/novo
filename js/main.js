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
            
            new google.maps.Marker({
                position: latLng,
                map: map,
                draggable: true,
                animation: google.maps.Animation.DROP,
            })
        });
    });
};