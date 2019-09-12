/* http://www.17educations.com/trigger-google-map-marker-infowindow/ */

var marker,i,locations=[{name:"Fort Nassau",image:"https://media-cdn.tripadvisor.com/media/photo-f/07/b2/8b/48/fort-nassau.jpg",content:"$$$$, Seafood, European, International",redirect_uri:"https://fortnassau.com/",lat:12.115354,lng:-68.926949},{name:"Restaurant & Cafe Gouverneur De Rouville",image:"https://media-cdn.tripadvisor.com/media/photo-f/03/a1/82/83/gouverneur-de-rouville.jpg ",content:"$$, Caribbean, Seafood, International",redirect_uri:"https://de-gouverneur.com/",lat:12.107964,lng:-68.934873},{name:"Boca 19 Curacao",image:"https://www.boca19.com/wp-content/uploads/2015/01/DSC0293-360x320.jpg",content:"$$ - $$$, Caribbean, Bar, Seafood",redirect_uri:"https://www.boca19.com/?fbclid=IwAR3c_dkxAT_iGUOBpcWUoPEHIKGHxat-r7PCYNL3s2FkvpHNGAvv6o3okHQ",lat:12.069070,lng:-68.851823},{name:"Kokos",image:"https://media-cdn.tripadvisor.com/media/photo-f/17/67/15/58/gegrilde-kippendijtjes.jpg",content:"$$ - $$$, Bar, Dutch, Street Food",redirect_uri:"http://www.janthielbeach.com/nl/restaurants/kokos/",lat:12.076539,lng:-68.879853},{name:"Blues Bar & Restaurant",image:"https://media-cdn.tripadvisor.com/media/photo-f/0c/53/c0/bc/salmon.jpg",content:"$$ - $$$, Caribbean, International, Grill",redirect_uri:"https://www.avilabeachhotel.com/restaurants-bars/blues-bar-restaurant?utm_source=tripadvisor&utm_medium=referral",lat:12.099602,lng:-68.921498},{name:"The Greenhouse Restaurant",image:"https://media-cdn.tripadvisor.com/media/photo-s/0e/a8/1e/36/the-greenhouse-restaurant.jpg",content:"$$ - $$$, Caribbean, Seafood, Mediterranean",redirect_uri:"https://thegreenhousecuracao.com/?utm_source=tripadvisor&utm_medium=referral",lat:12.086679,lng:-68.898801},{name:"Hemingway",image:"https://media-cdn.tripadvisor.com/media/photo-f/12/20/f1/ee/breakfast-at-the-beach.jpg",content:"$$ - $$$, International, American, Caribbean",redirect_uri:"http://hemingwaycuracao.com/?utm_source=tripadvisor&utm_medium=referral",lat:12.085145,lng:-68.897158},{name:"Saint Tropez",image:"http://sainttropezcuracao.com/new2/images/artsexylightbox_tmp/850c11594fb46f396bfc733241dc07df_220_160.JPG",content:"$$ - $$$, Bar, Seafood, Sushi",redirect_uri:"http://sainttropezcuracao.com/new2/index.php/en/restaurant",lat:12.101916,lng:-68.926219},{name:"Baoase Culinary Beach Restaurant",image:"https://media-cdn.tripadvisor.com/media/photo-s/0f/6c/23/fc/perfect-for-sunset-dinners.jpg",content:"$$$$, Caribbean, Seafood, International",redirect_uri:"https://baoase.com/beach-restaurant/",lat:12.094888,lng:-68.911300},{name:"Porto Restaurant",image:"https://media-cdn.tripadvisor.com/media/photo-s/0f/03/7c/02/the-best-food-on-the.jpg",content:"$$ - $$$, Seafood, International, Gluten Free Options",redirect_uri:"https://portocuracao.com/?fbclid=IwAR14o1Uc6t4ZY89HzGxOYRdm7MW_SGlH1bB6U_U89xGdtw7g4RJB2PrOW5M",lat:12.105658,lng:-68.938101}],

map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {
        lat: 12.1696,
        lng: -68.99
    }
}), infowindow = new google.maps.InfoWindow(), markers = new Array();

for (i = 0; i < locations.length; i++) marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
    map: map
}), google.maps.event.addListener(marker, "mouseover", function(a, b) {
    return function() {
        var c = '<div id="iw-container" ><div class="iw-title"><h6>' + locations[b].name + '</h6></div><div class="iw-content"><img src="' + locations[b].image + '" height="115" width="150"><p>' + locations[b].content + '</p><button><a href="' + locations[b].redirect_uri + '">Reserve</a></button></div>';
        infowindow.setContent(c), infowindow.open(map, a);
    };
}(marker, i)), marker.addListener("mouseout", function() {
    infowindow.close();
}), markers.push(marker);

google.maps.event.addListener(map, "click", function(a) {
    infowindow && infowindow.close();
});

$(".rest").hover(function() {
    null != $(this).attr("data-lat") && null != $(this).attr("data-lng") ? (LatLng = {
        lat: parseInt($(this).attr("data-lat")),
        lng: parseInt($(this).attr("data-lng"))
    }, map.setCenter(LatLng), map.setZoom(15), google.maps.event.trigger(markers[$(this).attr("data-index")], "mouseover")) : infowindow && infowindow.close();
}, function() {});