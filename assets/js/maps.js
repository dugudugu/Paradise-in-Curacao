var locations = [
        { 
          name : 'Fort Nassau', 
          image : 'https://fortnassau.mystagingwebsite.com/wp-content / uploads / 2015 / 06 / AboutUs.jpg',
          content : '$$$$, Seafood, European, International',
          redirect_uri : 'https://fortnassau.com/',
          lat : 12.1121928, 
          lng : -68.9370841
        },
        { 
          name : 'Restaurant & Cafe Gouverneur De Rouville', 
          image : 'https://media-cdn.tripadvisor.com/media/photo-f/03/a1/82/83/gouverneur-de-rouville.jpg ',
          content : '$$, Caribbean, Seafood, International',
          redirect_uri : 'https://de-gouverneur.com/',
          lat : 12.1079371, 
          lng : -68.9370841 
        },
        { 
          name : 'Boca 19 Curacao', 
          image : 'https://www.boca19.com/wp-content/uploads/2015/01/DSC0293-360x320.jpg',
          content : '$$ - $$$, Caribbean, Bar, Seafood',
          redirect_uri : 'https://www.boca19.com/?fbclid=IwAR3c_dkxAT_iGUOBpcWUoPEHIKGHxat-r7PCYNL3s2FkvpHNGAvv6o3okHQ',
          lat : 12.0684034, 
          lng : -68.8563469
        },
        { 
          name : 'Koko's ', 
          image : 'https://media-cdn.tripadvisor.com/media/photo-f/17/67/15/58/gegrilde-kippendijtjes.jpg',
          content : '$$ - $$$, Bar, Dutch, Street Food',
          redirect_uri : 'http://www.janthielbeach.com/nl/restaurants/kokos/',
          lat : 12.0765282, 
          lng : -68.8820387
        },
        { 
          name : 'Manly Beach', 
          image : 'http://www.thehindu.com/sci-tech/technology/internet/article17060632.ece/alternates/FREE_660/Users%20choice',
          content : 'Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder. ',
          redirect_uri : 'http://www.17educations.com',
          lat : 12.0765282, 
          lng : -68.8820387
        },
        { 
          name : 'Manly Beach', 
          image : 'http://www.thehindu.com/sci-tech/technology/internet/article17060632.ece/alternates/FREE_660/Users%20choice',
          content : 'Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder. ',
          redirect_uri : 'http://www.17educations.com',
          lat : 12.0765282, 
          lng : -68.8820387
        },
        { 
          name : 'Manly Beach', 
          image : 'http://www.thehindu.com/sci-tech/technology/internet/article17060632.ece/alternates/FREE_660/Users%20choice',
          content : 'Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder. ',
          redirect_uri : 'http://www.17educations.com',
          lat : 12.0765282, 
          lng : -68.8820387
        },
        { 
          name : 'Manly Beach', 
          image : 'http://www.thehindu.com/sci-tech/technology/internet/article17060632.ece/alternates/FREE_660/Users%20choice',
          content : 'Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder. ',
          redirect_uri : 'http://www.17educations.com',
          lat : 12.0765282, 
          lng : -68.8820387
        },
        { 
          name : 'Manly Beach', 
          image : 'http://www.thehindu.com/sci-tech/technology/internet/article17060632.ece/alternates/FREE_660/Users%20choice',
          content : 'Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder. ',
          redirect_uri : 'http://www.17educations.com',
          lat : 12.0765282, 
          lng : -68.8820387
        },
        { 
          name : 'Manly Beach', 
          image : 'http://www.thehindu.com/sci-tech/technology/internet/article17060632.ece/alternates/FREE_660/Users%20choice',
          content : 'Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder. ',
          redirect_uri : 'http://www.17educations.com',
          lat : 12.0765282, 
          lng : -68.8820387
        },
    ];
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: new google.maps.LatLng(locations[0].lat,  locations[0].lng ),
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
              '<div id="iw-container">' +
              '<div class="iw-title">' + locations[i].name + '</div>' +
              '<div class="iw-content">' +
              '<img src="' + locations[i].image + '" height="115" width="83">' +
              '<p>' + locations[i].content + '</p>' +
              '<p><a href="' + locations[i].redirect_uri + '">Click</a></p>' +
              '</div>' +
              '<div class="iw-bottom-gradient">$10</div>' +
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
  
 
 
  $('.rest').hover(
  function() {
     if($(this).attr('data-lat') != undefined && $(this).attr('data-lng') != undefined ) {
        LatLng =  { lat: parseInt($(this).attr('data-lat')) , lng: parseInt($(this).attr('data-lng')) };
        map.setCenter(LatLng);
        map.setZoom(10);
        google.maps.event.trigger(markers[$(this).attr('data-index')], 'mouseover');
      } else {
        if (infowindow) {
             infowindow.close();
         }
      }
  },
  function() {
  });
 
