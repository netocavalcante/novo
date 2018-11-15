// class Selecao {
// 	constructor(destino,menor){
//    this.destino = destino;
//    this.menor = menor;
//  }
// }

// var menorValor = new Selecao(null, 999999);

// var arrayDistances = [];
// let btnSearch = document.getElementById('getDistance');

// btnSearch.addEventListener('click', function() {
//   let origem = document.getElementById('origem');
//   let destino = document.getElementById('destino');
//   sResult = document.getElementById('search-result');

//   sResult.innerHTML = 'Aguarde...';

//   // Instanciar o DistanceMatrixService
//   let service = new google.maps.DistanceMatrixService();
  
//   // Executar o DistanceMatrixService
//   service.getDistanceMatrix({
//     origins: [origem.value],
//     destinations: [destino.value],
//     travelMode: google.maps.TravelMode.DRIVING,
//     unitSystem: google.maps.UnitSystem.METRIC
//   }, tratarRetorno);
// });

// function tratarRetorno(response, status) {
//   let map = document.getElementById('map');

//   //Verificar o Status
//   if (status != google.maps.DistanceMatrixStatus.OK) {

//     //Se o status não for "OK"
//     sResult.innerHTML = status;
//   } else {                  
//     //Imprimindo o Retorno JSON na tela
//     sResult.innerHTML = ` <b>Origem:</b> ${response.originAddresses} 
//                           <br /><b>Destino:</b> ${response.destinationAddresses}
//                           <br /><b>Distância:</b> ${response.rows[0].elements[0].distance.text}
//                           <br /><b>Duração:</b> ${response.rows[0].elements[0].duration.text}
//                           <br /><b>Tipo de Transporte:</b> Carro`;

//     //Atualizando o mapa
//     map.src = `https://maps.google.com/maps?saddr=${response.originAddresses}&daddr=${response.destinationAddresses}&output=embed`;
//   }

//   if(status === google.maps.DistanceMatrixStatus.OK) {
//     arrayDistances.push(response.rows[0].elements[0].distance.text);

//     if (response.rows[0].elements[0].distance.value < menorValor.menor) {
//      menorValor.destino = response.destinationAddresses;
//      menorValor.menorValor = response.rows[0].elements[0].distance.value;
//    } 
//  }
//   /*for (var i = 0; i <= arrayDistances.length; i++) {
//       console.log(arrayDistances[i]);
//     }*/
// }