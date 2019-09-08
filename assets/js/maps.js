/* http://www.17educations.com/trigger-google-map-marker-infowindow/ */

var locations = [{
		name: 'Fort Nassau',
		image: 'https://media-cdn.tripadvisor.com/media/photo-f/07/b2/8b/48/fort-nassau.jpg',
		content: '$$$$, Seafood, European, International',
		redirect_uri: 'https://fortnassau.com/',
		lat: 12.1121928,
		lng: -68.9345321
	},
	{
		name: 'Restaurant & Cafe Gouverneur De Rouville',
		image: 'https://media-cdn.tripadvisor.com/media/photo-f/03/a1/82/83/gouverneur-de-rouville.jpg ',
		content: '$$, Caribbean, Seafood, International',
		redirect_uri: 'https://de-gouverneur.com/',
		lat: 12.1079371,
		lng: -68.9370841
	},
	{
		name: 'Boca 19 Curacao',
		image: 'https://www.boca19.com/wp-content/uploads/2015/01/DSC0293-360x320.jpg',
		content: '$$ - $$$, Caribbean, Bar, Seafood',
		redirect_uri: 'https://www.boca19.com/?fbclid=IwAR3c_dkxAT_iGUOBpcWUoPEHIKGHxat-r7PCYNL3s2FkvpHNGAvv6o3okHQ',
		lat: 12.0684034,
		lng: -68.8563469
	},
	{
		name: 'Kokos',
		image: 'https://media-cdn.tripadvisor.com/media/photo-f/17/67/15/58/gegrilde-kippendijtjes.jpg',
		content: '$$ - $$$, Bar, Dutch, Street Food',
		redirect_uri: 'http://www.janthielbeach.com/nl/restaurants/kokos/',
		lat: 12.0765282,
		lng: -68.8820387
	},
	{
		name: 'Blues Bar & Restaurant',
		image: 'https://media-cdn.tripadvisor.com/media/photo-f/0c/53/c0/bc/salmon.jpg',
		content: '$$ - $$$, Caribbean, International, Grill',
		redirect_uri: 'https://www.avilabeachhotel.com/restaurants-bars/blues-bar-restaurant?utm_source=tripadvisor&utm_medium=referral',
		lat: 12.0995886,
		lng: -68.9236867
	},
	{
		name: 'The Greenhouse Restaurant',
		image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/a8/1e/36/the-greenhouse-restaurant.jpg',
		content: '$$ - $$$, Caribbean, Seafood, Mediterranean',
		redirect_uri: 'https://thegreenhousecuracao.com/?utm_source=tripadvisor&utm_medium=referral',
		lat: 12.0866732,
		lng: -68.9009867
	},
	{
		name: 'Hemingway',
		image: 'https://media-cdn.tripadvisor.com/media/photo-f/12/20/f1/ee/breakfast-at-the-beach.jpg',
		content: '$$ - $$$, International, American, Caribbean',
		redirect_uri: 'http://hemingwaycuracao.com/?utm_source=tripadvisor&utm_medium=referral',
		lat: 12.0851317,
		lng: -68.8993443
	},
	{
		name: 'Saint Tropez',
		image: 'http://sainttropezcuracao.com/new2/images/artsexylightbox_tmp/850c11594fb46f396bfc733241dc07df_220_160.JPG',
		content: '$$ - $$$, Bar, Seafood, Sushi',
		redirect_uri: 'http://sainttropezcuracao.com/new2/index.php/en/restaurant',
		lat: 12.1019297,
		lng: -68.9293222
	},
	{
		name: 'Baoase Culinary Beach Restaurant',
		image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/6c/23/fc/perfect-for-sunset-dinners.jpg',
		content: '$$$$, Caribbean, Seafood, International',
		redirect_uri: 'https://baoase.com/beach-restaurant/',
		lat: 12.0948681,
		lng: -68.9134872
	},
	{
		name: 'Porto Restaurant',
		image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/03/7c/02/the-best-food-on-the.jpg',
		content: '$$ - $$$, Seafood, International, Gluten Free Options',
		redirect_uri: 'https://portocuracao.com/?fbclid=IwAR14o1Uc6t4ZY89HzGxOYRdm7MW_SGlH1bB6U_U89xGdtw7g4RJB2PrOW5M',
		lat: 12.1055901,
		lng: -68.9402911
	},
];

var map = new google.maps.Map(document.getElementById("map"), {
	zoom: 10,
	center: new google.maps.LatLng(locations[0].lat, locations[0].lng),
	mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;
var markers = new Array();

for (i = 0; i < locations.length; i++) {
	marker = new google.maps.Marker({
		position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
		map: map
	});


	google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
		return function() {
			var content =
				'<div id="iw-container" >' +
				'<div class="iw-title">' + '<h6>' + locations[i].name + '</h6>' + '</div>' +
				'<div class="iw-content">' +
				'<img src="' + locations[i].image + '" height="115" width="150">' +
				'<p>' + locations[i].content + '</p>' +
				'<button><a href="' + locations[i].redirect_uri + '">Reserve</a></button>' +
				'</div>';
			infowindow.setContent(content);
			infowindow.open(map, marker);
		}
	})(marker, i));


	marker.addListener('mouseout', function() {
		infowindow.close();
	});
	markers.push(marker);
}

google.maps.event.addListener(map, 'click', function(event) {
	if (infowindow) {
		infowindow.close();
	}
})

var markerCluster = new MarkerClusterer(map, markers, {
	imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
});

$('.rest').hover(
	function() {
		if ($(this).attr('data-lat') != undefined && $(this).attr('data-lng') != undefined) {
			LatLng = {
				lat: parseInt($(this).attr('data-lat')),
				lng: parseInt($(this).attr('data-lng'))
			};
			map.setCenter(LatLng);
			map.setZoom(15);
			google.maps.event.trigger(markers[$(this).attr('data-index')], 'mouseover');
		} else {
			if (infowindow) {
				infowindow.close();
			}
		}
	},
	function() {});