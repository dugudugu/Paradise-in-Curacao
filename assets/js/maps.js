function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 12.2,
            lng: -68.9
        }
    });
    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
    var locations = [
      {lat: 12.1121928, lng: -68.9345321}, 
      {lat: 12.1079371, lng: -68.9370841},
      {lat: 12.0684034, lng: -68.8563469},
      {lat: 12.0765282, lng: -68.8820387},
      {lat: 12.0995886, lng: -68.9236867},
      {lat: 12.0866732, lng: -68.9009867},
      {lat: 12.0851317, lng: -68.8993443},
      {lat: 12.1019297, lng: -68.9283222},
      {lat: 12.0948681, lng: -68.9134872},
      {lat: 12.1055901, lng: -68.9402911}];
        
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
