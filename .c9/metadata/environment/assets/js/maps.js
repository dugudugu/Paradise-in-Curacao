{"changed":true,"filter":false,"title":"maps.js","tooltip":"/assets/js/maps.js","value":"/* http://www.17educations.com/trigger-google-map-marker-infowindow/ */\n\nvar locations = [\n        { \n          name : 'Fort Nassau', \n          image : 'https://media-cdn.tripadvisor.com/media/photo-f/07/b2/8b/48/fort-nassau.jpg',\n          content : '$$$$, Seafood, European, International',\n          redirect_uri : 'https://fortnassau.com/',\n          lat : 12.1121928, \n          lng : -68.9345321\n        },\n        { \n          name : 'Restaurant & Cafe Gouverneur De Rouville', \n          image : 'https://media-cdn.tripadvisor.com/media/photo-f/03/a1/82/83/gouverneur-de-rouville.jpg ',\n          content : '$$, Caribbean, Seafood, International',\n          redirect_uri : 'https://de-gouverneur.com/',\n          lat : 12.1079371, \n          lng : -68.9370841 \n        },\n        { \n          name : 'Boca 19 Curacao', \n          image : 'https://www.boca19.com/wp-content/uploads/2015/01/DSC0293-360x320.jpg',\n          content : '$$ - $$$, Caribbean, Bar, Seafood',\n          redirect_uri : 'https://www.boca19.com/?fbclid=IwAR3c_dkxAT_iGUOBpcWUoPEHIKGHxat-r7PCYNL3s2FkvpHNGAvv6o3okHQ',\n          lat : 12.0684034, \n          lng : -68.8563469\n        },\n        { \n          name : 'Kokos', \n          image : 'https://media-cdn.tripadvisor.com/media/photo-f/17/67/15/58/gegrilde-kippendijtjes.jpg',\n          content : '$$ - $$$, Bar, Dutch, Street Food',\n          redirect_uri : 'http://www.janthielbeach.com/nl/restaurants/kokos/',\n          lat : 12.0765282, \n          lng : -68.8820387\n        },\n        { \n          name : 'Blues Bar & Restaurant', \n          image : 'https://media-cdn.tripadvisor.com/media/photo-f/0c/53/c0/bc/salmon.jpg',\n          content : '$$ - $$$, Caribbean, International, Grill',\n          redirect_uri : 'https://www.avilabeachhotel.com/restaurants-bars/blues-bar-restaurant?utm_source=tripadvisor&utm_medium=referral',\n          lat : 12.0995886, \n          lng : -68.9236867\n        },\n        { \n          name : 'The Greenhouse Restaurant', \n          image : 'https://media-cdn.tripadvisor.com/media/photo-s/0e/a8/1e/36/the-greenhouse-restaurant.jpg',\n          content : '$$ - $$$, Caribbean, Seafood, Mediterranean',\n          redirect_uri : 'https://thegreenhousecuracao.com/?utm_source=tripadvisor&utm_medium=referral',\n          lat : 12.0866732, \n          lng : -68.9009867\n        },\n        { \n          name : 'Hemingway', \n          image : 'https://media-cdn.tripadvisor.com/media/photo-f/12/20/f1/ee/breakfast-at-the-beach.jpg',\n          content : '$$ - $$$, International, American, Caribbean',\n          redirect_uri : 'http://hemingwaycuracao.com/?utm_source=tripadvisor&utm_medium=referral',\n          lat : 12.0851317, \n          lng : -68.8993443\n        },\n        { \n          name : 'Saint Tropez', \n          image : 'http://sainttropezcuracao.com/new2/images/artsexylightbox_tmp/850c11594fb46f396bfc733241dc07df_220_160.JPG',\n          content : '$$ - $$$, Bar, Seafood, Sushi',\n          redirect_uri : 'http://sainttropezcuracao.com/new2/index.php/en/restaurant',\n          lat : 12.1019297, \n          lng : -68.9293222\n        },\n        { \n          name : 'Baoase Culinary Beach Restaurant', \n          image : 'https://media-cdn.tripadvisor.com/media/photo-s/0f/6c/23/fc/perfect-for-sunset-dinners.jpg',\n          content : '$$$$, Caribbean, Seafood, International',\n          redirect_uri : 'https://baoase.com/beach-restaurant/',\n          lat : 12.0948681, \n          lng : -68.9134872\n        },\n        { \n          name : 'Porto Restaurant', \n          image : 'https://media-cdn.tripadvisor.com/media/photo-s/0f/03/7c/02/the-best-food-on-the.jpg',\n          content : '$$ - $$$, Seafood, International, Gluten Free Options',\n          redirect_uri : 'https://portocuracao.com/?fbclid=IwAR14o1Uc6t4ZY89HzGxOYRdm7MW_SGlH1bB6U_U89xGdtw7g4RJB2PrOW5M',\n          lat : 12.1055901, \n          lng : -68.9402911\n        },\n    ];\n    \n      var map = new google.maps.Map(document.getElementById(\"map\"), {\n        zoom: 10,\n        center: new google.maps.LatLng(locations[0].lat,  locations[0].lng ),\n        mapTypeId: google.maps.MapTypeId.ROADMAP\n      });\n \n      var infowindow = new google.maps.InfoWindow();\n \n      var marker, i;\n      var markers = new Array();\n \n      for (i = 0; i < locations.length; i++) {  \n        marker = new google.maps.Marker({\n          position: new google.maps.LatLng(locations[i].lat, locations[i].lng),\n          map: map\n        });\n \n        \n        google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {\n          return function() {\n            var content =\n              '<div id=\"iw-container\" >' +\n              '<div class=\"iw-title\">' + '<h6>' + locations[i].name + '</h6>' +'</div>' +\n              '<div class=\"iw-content\">' +\n              '<img src=\"' + locations[i].image + '\" height=\"115\" width=\"150\">' +\n              '<p>' + locations[i].content + '</p>' +\n              '<button><a href=\"' + locations[i].redirect_uri + '\">Reserve</a></button>' +\n              '</div>';\n            infowindow.setContent(content);\n            infowindow.open(map, marker);\n          }\n        })(marker, i));\n \n             \n        marker.addListener('mouseout', function() {\n            infowindow.close();\n        });\n        markers.push(marker); \n    }\n \n  google.maps.event.addListener(map, 'click', function(event) {\n    if (infowindow) {\n            infowindow.close();\n        }\n  })\n  \n  $('.rest').hover(\n  function() {\n     if($(this).attr('data-lat') != undefined && $(this).attr('data-lng') != undefined ) {\n        LatLng =  { lat: parseInt($(this).attr('data-lat')) , lng: parseInt($(this).attr('data-lng')) };\n        map.setCenter(LatLng);\n        map.setZoom(15);\n        google.maps.event.trigger(markers[$(this).attr('data-index')], 'mouseover');\n      } else {\n        if (infowindow) {\n             infowindow.close();\n         }\n      }\n  },\n  function() {\n  });\n \n \n /* Hover function for restaurant list */\n \n let list = document.getElementById(\"list\");\n \n list.addEventListener(\"mouseover\", function(event) {\n   event.style.backgroundColor = \"#599bb3\"\n });","undoManager":{"mark":99,"position":100,"stack":[[{"start":{"row":105,"column":40},"end":{"row":105,"column":41},"action":"insert","lines":[" "],"id":962},{"start":{"row":105,"column":41},"end":{"row":105,"column":42},"action":"insert","lines":["<"]}],[{"start":{"row":105,"column":42},"end":{"row":105,"column":43},"action":"insert","lines":["h"],"id":963},{"start":{"row":105,"column":43},"end":{"row":105,"column":44},"action":"insert","lines":["3"]},{"start":{"row":105,"column":44},"end":{"row":105,"column":45},"action":"insert","lines":[">"]}],[{"start":{"row":105,"column":45},"end":{"row":105,"column":46},"action":"insert","lines":[" "],"id":964},{"start":{"row":105,"column":46},"end":{"row":105,"column":47},"action":"insert","lines":["+"]}],[{"start":{"row":105,"column":41},"end":{"row":105,"column":42},"action":"insert","lines":["'"],"id":965}],[{"start":{"row":105,"column":46},"end":{"row":105,"column":47},"action":"insert","lines":["'"],"id":966}],[{"start":{"row":105,"column":70},"end":{"row":105,"column":72},"action":"insert","lines":["''"],"id":967}],[{"start":{"row":105,"column":71},"end":{"row":105,"column":72},"action":"insert","lines":["<"],"id":968},{"start":{"row":105,"column":72},"end":{"row":105,"column":73},"action":"insert","lines":["/"]},{"start":{"row":105,"column":73},"end":{"row":105,"column":74},"action":"insert","lines":["h"]}],[{"start":{"row":105,"column":74},"end":{"row":105,"column":75},"action":"insert","lines":["3"],"id":969},{"start":{"row":105,"column":75},"end":{"row":105,"column":76},"action":"insert","lines":[">"]}],[{"start":{"row":105,"column":77},"end":{"row":105,"column":78},"action":"insert","lines":[" "],"id":970},{"start":{"row":105,"column":78},"end":{"row":105,"column":79},"action":"insert","lines":["+"]}],[{"start":{"row":105,"column":44},"end":{"row":105,"column":45},"action":"remove","lines":["3"],"id":971}],[{"start":{"row":105,"column":44},"end":{"row":105,"column":45},"action":"insert","lines":["5"],"id":972}],[{"start":{"row":105,"column":74},"end":{"row":105,"column":75},"action":"remove","lines":["3"],"id":973}],[{"start":{"row":105,"column":74},"end":{"row":105,"column":75},"action":"insert","lines":["5"],"id":974}],[{"start":{"row":105,"column":44},"end":{"row":105,"column":45},"action":"remove","lines":["5"],"id":975},{"start":{"row":105,"column":44},"end":{"row":105,"column":45},"action":"insert","lines":["6"]}],[{"start":{"row":105,"column":74},"end":{"row":105,"column":75},"action":"remove","lines":["5"],"id":976},{"start":{"row":105,"column":74},"end":{"row":105,"column":75},"action":"insert","lines":["6"]}],[{"start":{"row":107,"column":73},"end":{"row":107,"column":75},"action":"remove","lines":["83"],"id":977},{"start":{"row":107,"column":73},"end":{"row":107,"column":74},"action":"insert","lines":["1"]},{"start":{"row":107,"column":74},"end":{"row":107,"column":75},"action":"insert","lines":["0"]},{"start":{"row":107,"column":75},"end":{"row":107,"column":76},"action":"insert","lines":["0"]}],[{"start":{"row":107,"column":73},"end":{"row":107,"column":76},"action":"remove","lines":["100"],"id":978},{"start":{"row":107,"column":73},"end":{"row":107,"column":74},"action":"insert","lines":["9"]},{"start":{"row":107,"column":74},"end":{"row":107,"column":75},"action":"insert","lines":["0"]}],[{"start":{"row":107,"column":75},"end":{"row":107,"column":76},"action":"insert","lines":[" "],"id":979},{"start":{"row":107,"column":76},"end":{"row":107,"column":77},"action":"insert","lines":["m"]}],[{"start":{"row":107,"column":77},"end":{"row":107,"column":78},"action":"insert","lines":["b"],"id":980},{"start":{"row":107,"column":78},"end":{"row":107,"column":79},"action":"insert","lines":["-"]},{"start":{"row":107,"column":79},"end":{"row":107,"column":80},"action":"insert","lines":["2"]}],[{"start":{"row":107,"column":76},"end":{"row":107,"column":80},"action":"remove","lines":["mb-2"],"id":981},{"start":{"row":107,"column":76},"end":{"row":107,"column":77},"action":"insert","lines":["p"]},{"start":{"row":107,"column":77},"end":{"row":107,"column":78},"action":"insert","lines":["b"]},{"start":{"row":107,"column":78},"end":{"row":107,"column":79},"action":"insert","lines":["-"]},{"start":{"row":107,"column":79},"end":{"row":107,"column":80},"action":"insert","lines":["2"]},{"start":{"row":107,"column":80},"end":{"row":107,"column":81},"action":"insert","lines":["0"]},{"start":{"row":107,"column":81},"end":{"row":107,"column":82},"action":"insert","lines":["p"]}],[{"start":{"row":107,"column":82},"end":{"row":107,"column":83},"action":"insert","lines":["x"],"id":982}],[{"start":{"row":107,"column":76},"end":{"row":107,"column":83},"action":"remove","lines":["pb-20px"],"id":983},{"start":{"row":107,"column":75},"end":{"row":107,"column":76},"action":"remove","lines":[" "]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":984},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":65},"action":"insert","lines":["http://www.17educations.com/trigger-google-map-marker-infowindow/"],"id":985}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["/"],"id":986}],[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["*"],"id":987}],[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":[" "],"id":988}],[{"start":{"row":0,"column":68},"end":{"row":0,"column":69},"action":"insert","lines":[" "],"id":989},{"start":{"row":0,"column":69},"end":{"row":0,"column":70},"action":"insert","lines":["8"]},{"start":{"row":0,"column":70},"end":{"row":0,"column":71},"action":"insert","lines":["?"]}],[{"start":{"row":0,"column":70},"end":{"row":0,"column":71},"action":"remove","lines":["?"],"id":990},{"start":{"row":0,"column":69},"end":{"row":0,"column":70},"action":"remove","lines":["8"]}],[{"start":{"row":0,"column":69},"end":{"row":0,"column":70},"action":"insert","lines":["*"],"id":991},{"start":{"row":0,"column":70},"end":{"row":0,"column":71},"action":"insert","lines":["/"]}],[{"start":{"row":109,"column":74},"end":{"row":109,"column":75},"action":"remove","lines":["0"],"id":994},{"start":{"row":109,"column":73},"end":{"row":109,"column":74},"action":"remove","lines":["9"]}],[{"start":{"row":109,"column":73},"end":{"row":109,"column":74},"action":"insert","lines":["1"],"id":995},{"start":{"row":109,"column":74},"end":{"row":109,"column":75},"action":"insert","lines":["5"]},{"start":{"row":109,"column":75},"end":{"row":109,"column":76},"action":"insert","lines":["0"]}],[{"start":{"row":106,"column":37},"end":{"row":106,"column":38},"action":"insert","lines":[" "],"id":996},{"start":{"row":106,"column":38},"end":{"row":106,"column":39},"action":"insert","lines":["+"]}],[{"start":{"row":106,"column":39},"end":{"row":106,"column":40},"action":"insert","lines":[" "],"id":997}],[{"start":{"row":106,"column":40},"end":{"row":106,"column":66},"action":"insert","lines":["\" height=\"115\" width=\"150\""],"id":998}],[{"start":{"row":106,"column":50},"end":{"row":106,"column":53},"action":"remove","lines":["115"],"id":999},{"start":{"row":106,"column":50},"end":{"row":106,"column":51},"action":"insert","lines":["1"]},{"start":{"row":106,"column":51},"end":{"row":106,"column":52},"action":"insert","lines":["2"]},{"start":{"row":106,"column":52},"end":{"row":106,"column":53},"action":"insert","lines":["5"]}],[{"start":{"row":106,"column":62},"end":{"row":106,"column":65},"action":"remove","lines":["150"],"id":1000},{"start":{"row":106,"column":62},"end":{"row":106,"column":63},"action":"insert","lines":["1"]},{"start":{"row":106,"column":63},"end":{"row":106,"column":64},"action":"insert","lines":["7"]},{"start":{"row":106,"column":64},"end":{"row":106,"column":65},"action":"insert","lines":["5"]}],[{"start":{"row":106,"column":42},"end":{"row":106,"column":66},"action":"remove","lines":["height=\"125\" width=\"175\""],"id":1001},{"start":{"row":106,"column":41},"end":{"row":106,"column":42},"action":"remove","lines":[" "]}],[{"start":{"row":106,"column":40},"end":{"row":106,"column":41},"action":"remove","lines":["\""],"id":1002},{"start":{"row":106,"column":39},"end":{"row":106,"column":40},"action":"remove","lines":[" "]}],[{"start":{"row":106,"column":38},"end":{"row":106,"column":39},"action":"remove","lines":["+"],"id":1003},{"start":{"row":106,"column":37},"end":{"row":106,"column":38},"action":"remove","lines":[" "]}],[{"start":{"row":106,"column":37},"end":{"row":106,"column":38},"action":"insert","lines":[" "],"id":1004}],[{"start":{"row":132,"column":0},"end":{"row":132,"column":1},"action":"remove","lines":[" "],"id":1005}],[{"start":{"row":131,"column":0},"end":{"row":131,"column":1},"action":"remove","lines":[" "],"id":1006},{"start":{"row":130,"column":2},"end":{"row":131,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":130,"column":2},"end":{"row":131,"column":0},"action":"remove","lines":["",""],"id":1007}],[{"start":{"row":147,"column":0},"end":{"row":147,"column":1},"action":"insert","lines":[" "],"id":1008}],[{"start":{"row":147,"column":1},"end":{"row":147,"column":2},"action":"insert","lines":["/"],"id":1009},{"start":{"row":147,"column":2},"end":{"row":147,"column":3},"action":"insert","lines":["8"]}],[{"start":{"row":147,"column":2},"end":{"row":147,"column":3},"action":"remove","lines":["8"],"id":1010}],[{"start":{"row":147,"column":2},"end":{"row":147,"column":3},"action":"insert","lines":["*"],"id":1011}],[{"start":{"row":147,"column":3},"end":{"row":147,"column":4},"action":"insert","lines":[" "],"id":1012},{"start":{"row":147,"column":4},"end":{"row":147,"column":5},"action":"insert","lines":["h"]},{"start":{"row":147,"column":5},"end":{"row":147,"column":6},"action":"insert","lines":["o"]},{"start":{"row":147,"column":6},"end":{"row":147,"column":7},"action":"insert","lines":["v"]},{"start":{"row":147,"column":7},"end":{"row":147,"column":8},"action":"insert","lines":["e"]},{"start":{"row":147,"column":8},"end":{"row":147,"column":9},"action":"insert","lines":["r"]}],[{"start":{"row":147,"column":9},"end":{"row":147,"column":10},"action":"insert","lines":[" "],"id":1013}],[{"start":{"row":147,"column":9},"end":{"row":147,"column":10},"action":"remove","lines":[" "],"id":1014},{"start":{"row":147,"column":8},"end":{"row":147,"column":9},"action":"remove","lines":["r"]},{"start":{"row":147,"column":7},"end":{"row":147,"column":8},"action":"remove","lines":["e"]},{"start":{"row":147,"column":6},"end":{"row":147,"column":7},"action":"remove","lines":["v"]},{"start":{"row":147,"column":5},"end":{"row":147,"column":6},"action":"remove","lines":["o"]},{"start":{"row":147,"column":4},"end":{"row":147,"column":5},"action":"remove","lines":["h"]}],[{"start":{"row":147,"column":4},"end":{"row":147,"column":5},"action":"insert","lines":["H"],"id":1015},{"start":{"row":147,"column":5},"end":{"row":147,"column":6},"action":"insert","lines":["O"]},{"start":{"row":147,"column":6},"end":{"row":147,"column":7},"action":"insert","lines":["v"]},{"start":{"row":147,"column":7},"end":{"row":147,"column":8},"action":"insert","lines":["e"]},{"start":{"row":147,"column":8},"end":{"row":147,"column":9},"action":"insert","lines":["r"]}],[{"start":{"row":147,"column":9},"end":{"row":147,"column":10},"action":"insert","lines":[" "],"id":1016},{"start":{"row":147,"column":10},"end":{"row":147,"column":11},"action":"insert","lines":["F"]},{"start":{"row":147,"column":11},"end":{"row":147,"column":12},"action":"insert","lines":["u"]},{"start":{"row":147,"column":12},"end":{"row":147,"column":13},"action":"insert","lines":["n"]},{"start":{"row":147,"column":13},"end":{"row":147,"column":14},"action":"insert","lines":["c"]},{"start":{"row":147,"column":14},"end":{"row":147,"column":15},"action":"insert","lines":["t"]},{"start":{"row":147,"column":15},"end":{"row":147,"column":16},"action":"insert","lines":["i"]},{"start":{"row":147,"column":16},"end":{"row":147,"column":17},"action":"insert","lines":["o"]},{"start":{"row":147,"column":17},"end":{"row":147,"column":18},"action":"insert","lines":["n"]}],[{"start":{"row":147,"column":18},"end":{"row":147,"column":19},"action":"insert","lines":[" "],"id":1017}],[{"start":{"row":147,"column":18},"end":{"row":147,"column":19},"action":"remove","lines":[" "],"id":1018},{"start":{"row":147,"column":17},"end":{"row":147,"column":18},"action":"remove","lines":["n"]},{"start":{"row":147,"column":16},"end":{"row":147,"column":17},"action":"remove","lines":["o"]},{"start":{"row":147,"column":15},"end":{"row":147,"column":16},"action":"remove","lines":["i"]},{"start":{"row":147,"column":14},"end":{"row":147,"column":15},"action":"remove","lines":["t"]},{"start":{"row":147,"column":13},"end":{"row":147,"column":14},"action":"remove","lines":["c"]},{"start":{"row":147,"column":12},"end":{"row":147,"column":13},"action":"remove","lines":["n"]},{"start":{"row":147,"column":11},"end":{"row":147,"column":12},"action":"remove","lines":["u"]},{"start":{"row":147,"column":10},"end":{"row":147,"column":11},"action":"remove","lines":["F"]},{"start":{"row":147,"column":9},"end":{"row":147,"column":10},"action":"remove","lines":[" "]},{"start":{"row":147,"column":8},"end":{"row":147,"column":9},"action":"remove","lines":["r"]},{"start":{"row":147,"column":7},"end":{"row":147,"column":8},"action":"remove","lines":["e"]}],[{"start":{"row":147,"column":6},"end":{"row":147,"column":7},"action":"remove","lines":["v"],"id":1019},{"start":{"row":147,"column":5},"end":{"row":147,"column":6},"action":"remove","lines":["O"]}],[{"start":{"row":147,"column":5},"end":{"row":147,"column":6},"action":"insert","lines":["o"],"id":1020},{"start":{"row":147,"column":6},"end":{"row":147,"column":7},"action":"insert","lines":["v"]},{"start":{"row":147,"column":7},"end":{"row":147,"column":8},"action":"insert","lines":["e"]},{"start":{"row":147,"column":8},"end":{"row":147,"column":9},"action":"insert","lines":["r"]}],[{"start":{"row":147,"column":9},"end":{"row":147,"column":10},"action":"insert","lines":[" "],"id":1021},{"start":{"row":147,"column":10},"end":{"row":147,"column":11},"action":"insert","lines":["f"]},{"start":{"row":147,"column":11},"end":{"row":147,"column":12},"action":"insert","lines":["u"]},{"start":{"row":147,"column":12},"end":{"row":147,"column":13},"action":"insert","lines":["n"]},{"start":{"row":147,"column":13},"end":{"row":147,"column":14},"action":"insert","lines":["c"]},{"start":{"row":147,"column":14},"end":{"row":147,"column":15},"action":"insert","lines":["t"]},{"start":{"row":147,"column":15},"end":{"row":147,"column":16},"action":"insert","lines":["i"]},{"start":{"row":147,"column":16},"end":{"row":147,"column":17},"action":"insert","lines":["o"]},{"start":{"row":147,"column":17},"end":{"row":147,"column":18},"action":"insert","lines":["n"]}],[{"start":{"row":147,"column":18},"end":{"row":147,"column":19},"action":"insert","lines":[" "],"id":1022},{"start":{"row":147,"column":19},"end":{"row":147,"column":20},"action":"insert","lines":["f"]},{"start":{"row":147,"column":20},"end":{"row":147,"column":21},"action":"insert","lines":["o"]}],[{"start":{"row":147,"column":21},"end":{"row":147,"column":22},"action":"insert","lines":[" "],"id":1023},{"start":{"row":147,"column":22},"end":{"row":147,"column":23},"action":"insert","lines":["r"]},{"start":{"row":147,"column":23},"end":{"row":147,"column":24},"action":"insert","lines":["l"]},{"start":{"row":147,"column":24},"end":{"row":147,"column":25},"action":"insert","lines":["i"]},{"start":{"row":147,"column":25},"end":{"row":147,"column":26},"action":"insert","lines":["s"]},{"start":{"row":147,"column":26},"end":{"row":147,"column":27},"action":"insert","lines":["t"]}],[{"start":{"row":147,"column":27},"end":{"row":147,"column":28},"action":"insert","lines":[" "],"id":1024},{"start":{"row":147,"column":28},"end":{"row":147,"column":29},"action":"insert","lines":["i"]},{"start":{"row":147,"column":29},"end":{"row":147,"column":30},"action":"insert","lines":["e"]},{"start":{"row":147,"column":30},"end":{"row":147,"column":31},"action":"insert","lines":["t"]},{"start":{"row":147,"column":31},"end":{"row":147,"column":32},"action":"insert","lines":["m"]},{"start":{"row":147,"column":32},"end":{"row":147,"column":33},"action":"insert","lines":["s"]}],[{"start":{"row":147,"column":32},"end":{"row":147,"column":33},"action":"remove","lines":["s"],"id":1025},{"start":{"row":147,"column":31},"end":{"row":147,"column":32},"action":"remove","lines":["m"]},{"start":{"row":147,"column":30},"end":{"row":147,"column":31},"action":"remove","lines":["t"]},{"start":{"row":147,"column":29},"end":{"row":147,"column":30},"action":"remove","lines":["e"]},{"start":{"row":147,"column":28},"end":{"row":147,"column":29},"action":"remove","lines":["i"]},{"start":{"row":147,"column":27},"end":{"row":147,"column":28},"action":"remove","lines":[" "]},{"start":{"row":147,"column":26},"end":{"row":147,"column":27},"action":"remove","lines":["t"]},{"start":{"row":147,"column":25},"end":{"row":147,"column":26},"action":"remove","lines":["s"]},{"start":{"row":147,"column":24},"end":{"row":147,"column":25},"action":"remove","lines":["i"]},{"start":{"row":147,"column":23},"end":{"row":147,"column":24},"action":"remove","lines":["l"]},{"start":{"row":147,"column":22},"end":{"row":147,"column":23},"action":"remove","lines":["r"]},{"start":{"row":147,"column":21},"end":{"row":147,"column":22},"action":"remove","lines":[" "]}],[{"start":{"row":147,"column":21},"end":{"row":147,"column":22},"action":"insert","lines":["r"],"id":1026}],[{"start":{"row":147,"column":22},"end":{"row":147,"column":23},"action":"insert","lines":[" "],"id":1027},{"start":{"row":147,"column":23},"end":{"row":147,"column":24},"action":"insert","lines":["r"]},{"start":{"row":147,"column":24},"end":{"row":147,"column":25},"action":"insert","lines":["e"]},{"start":{"row":147,"column":25},"end":{"row":147,"column":26},"action":"insert","lines":["s"]},{"start":{"row":147,"column":26},"end":{"row":147,"column":27},"action":"insert","lines":["t"]},{"start":{"row":147,"column":27},"end":{"row":147,"column":28},"action":"insert","lines":["a"]},{"start":{"row":147,"column":28},"end":{"row":147,"column":29},"action":"insert","lines":["u"]},{"start":{"row":147,"column":29},"end":{"row":147,"column":30},"action":"insert","lines":["r"]},{"start":{"row":147,"column":30},"end":{"row":147,"column":31},"action":"insert","lines":["a"]},{"start":{"row":147,"column":31},"end":{"row":147,"column":32},"action":"insert","lines":["n"]},{"start":{"row":147,"column":32},"end":{"row":147,"column":33},"action":"insert","lines":["t"]}],[{"start":{"row":147,"column":33},"end":{"row":147,"column":34},"action":"insert","lines":[" "],"id":1028},{"start":{"row":147,"column":34},"end":{"row":147,"column":35},"action":"insert","lines":["l"]},{"start":{"row":147,"column":35},"end":{"row":147,"column":36},"action":"insert","lines":["i"]},{"start":{"row":147,"column":36},"end":{"row":147,"column":37},"action":"insert","lines":["s"]},{"start":{"row":147,"column":37},"end":{"row":147,"column":38},"action":"insert","lines":["t"]}],[{"start":{"row":147,"column":38},"end":{"row":147,"column":39},"action":"insert","lines":[" "],"id":1029},{"start":{"row":147,"column":39},"end":{"row":147,"column":40},"action":"insert","lines":["*"]},{"start":{"row":147,"column":40},"end":{"row":147,"column":41},"action":"insert","lines":["/"]}],[{"start":{"row":147,"column":41},"end":{"row":148,"column":0},"action":"insert","lines":["",""],"id":1030},{"start":{"row":148,"column":0},"end":{"row":148,"column":1},"action":"insert","lines":[" "]},{"start":{"row":148,"column":1},"end":{"row":149,"column":0},"action":"insert","lines":["",""]},{"start":{"row":149,"column":0},"end":{"row":149,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":149,"column":1},"end":{"row":149,"column":44},"action":"insert","lines":["let test = document.getElementById(\"test\");"],"id":1031}],[{"start":{"row":149,"column":5},"end":{"row":149,"column":9},"action":"remove","lines":["test"],"id":1032},{"start":{"row":149,"column":5},"end":{"row":149,"column":6},"action":"insert","lines":["l"]},{"start":{"row":149,"column":6},"end":{"row":149,"column":7},"action":"insert","lines":["i"]},{"start":{"row":149,"column":7},"end":{"row":149,"column":8},"action":"insert","lines":["s"]},{"start":{"row":149,"column":8},"end":{"row":149,"column":9},"action":"insert","lines":["t"]}],[{"start":{"row":149,"column":37},"end":{"row":149,"column":41},"action":"remove","lines":["test"],"id":1033},{"start":{"row":149,"column":37},"end":{"row":149,"column":38},"action":"insert","lines":["l"]},{"start":{"row":149,"column":38},"end":{"row":149,"column":39},"action":"insert","lines":["i"]},{"start":{"row":149,"column":39},"end":{"row":149,"column":40},"action":"insert","lines":["s"]},{"start":{"row":149,"column":40},"end":{"row":149,"column":41},"action":"insert","lines":["t"]}],[{"start":{"row":149,"column":44},"end":{"row":150,"column":0},"action":"insert","lines":["",""],"id":1034},{"start":{"row":150,"column":0},"end":{"row":150,"column":1},"action":"insert","lines":[" "]},{"start":{"row":150,"column":1},"end":{"row":151,"column":0},"action":"insert","lines":["",""]},{"start":{"row":151,"column":0},"end":{"row":151,"column":1},"action":"insert","lines":[" "]},{"start":{"row":151,"column":1},"end":{"row":151,"column":2},"action":"insert","lines":["l"]},{"start":{"row":151,"column":2},"end":{"row":151,"column":3},"action":"insert","lines":["i"]},{"start":{"row":151,"column":3},"end":{"row":151,"column":4},"action":"insert","lines":["s"]}],[{"start":{"row":151,"column":4},"end":{"row":151,"column":5},"action":"insert","lines":["t"],"id":1035}],[{"start":{"row":151,"column":5},"end":{"row":151,"column":6},"action":"insert","lines":["."],"id":1036},{"start":{"row":151,"column":6},"end":{"row":151,"column":7},"action":"insert","lines":["a"]}],[{"start":{"row":151,"column":6},"end":{"row":151,"column":7},"action":"remove","lines":["a"],"id":1037},{"start":{"row":151,"column":6},"end":{"row":151,"column":24},"action":"insert","lines":["addEventListener()"]}],[{"start":{"row":151,"column":23},"end":{"row":151,"column":25},"action":"insert","lines":["\"\""],"id":1038}],[{"start":{"row":151,"column":24},"end":{"row":151,"column":25},"action":"insert","lines":["m"],"id":1039},{"start":{"row":151,"column":25},"end":{"row":151,"column":26},"action":"insert","lines":["o"]},{"start":{"row":151,"column":26},"end":{"row":151,"column":27},"action":"insert","lines":["u"]},{"start":{"row":151,"column":27},"end":{"row":151,"column":28},"action":"insert","lines":["s"]},{"start":{"row":151,"column":28},"end":{"row":151,"column":29},"action":"insert","lines":["e"]}],[{"start":{"row":151,"column":24},"end":{"row":151,"column":29},"action":"remove","lines":["mouse"],"id":1040},{"start":{"row":151,"column":24},"end":{"row":151,"column":33},"action":"insert","lines":["mouseover"]}],[{"start":{"row":151,"column":34},"end":{"row":151,"column":35},"action":"insert","lines":[","],"id":1041}],[{"start":{"row":151,"column":35},"end":{"row":151,"column":36},"action":"insert","lines":[" "],"id":1042},{"start":{"row":151,"column":36},"end":{"row":151,"column":37},"action":"insert","lines":["f"]},{"start":{"row":151,"column":37},"end":{"row":151,"column":38},"action":"insert","lines":["u"]},{"start":{"row":151,"column":38},"end":{"row":151,"column":39},"action":"insert","lines":["n"]},{"start":{"row":151,"column":39},"end":{"row":151,"column":40},"action":"insert","lines":["c"]},{"start":{"row":151,"column":40},"end":{"row":151,"column":41},"action":"insert","lines":["t"]},{"start":{"row":151,"column":41},"end":{"row":151,"column":42},"action":"insert","lines":["i"]},{"start":{"row":151,"column":42},"end":{"row":151,"column":43},"action":"insert","lines":["o"]},{"start":{"row":151,"column":43},"end":{"row":151,"column":44},"action":"insert","lines":["n"]}],[{"start":{"row":151,"column":44},"end":{"row":151,"column":46},"action":"insert","lines":["()"],"id":1043}],[{"start":{"row":151,"column":45},"end":{"row":151,"column":46},"action":"insert","lines":["e"],"id":1044},{"start":{"row":151,"column":46},"end":{"row":151,"column":47},"action":"insert","lines":["v"]},{"start":{"row":151,"column":47},"end":{"row":151,"column":48},"action":"insert","lines":["e"]},{"start":{"row":151,"column":48},"end":{"row":151,"column":49},"action":"insert","lines":["n"]},{"start":{"row":151,"column":49},"end":{"row":151,"column":50},"action":"insert","lines":["t"]}],[{"start":{"row":151,"column":51},"end":{"row":151,"column":52},"action":"insert","lines":[" "],"id":1045}],[{"start":{"row":151,"column":52},"end":{"row":151,"column":54},"action":"insert","lines":["{}"],"id":1046}],[{"start":{"row":151,"column":53},"end":{"row":153,"column":1},"action":"insert","lines":["","   "," "],"id":1047}],[{"start":{"row":152,"column":3},"end":{"row":152,"column":4},"action":"insert","lines":["e"],"id":1048},{"start":{"row":152,"column":4},"end":{"row":152,"column":5},"action":"insert","lines":["v"]},{"start":{"row":152,"column":5},"end":{"row":152,"column":6},"action":"insert","lines":["e"]},{"start":{"row":152,"column":6},"end":{"row":152,"column":7},"action":"insert","lines":["n"]},{"start":{"row":152,"column":7},"end":{"row":152,"column":8},"action":"insert","lines":["t"]},{"start":{"row":152,"column":8},"end":{"row":152,"column":9},"action":"insert","lines":["."]},{"start":{"row":152,"column":9},"end":{"row":152,"column":10},"action":"insert","lines":["t"]},{"start":{"row":152,"column":10},"end":{"row":152,"column":11},"action":"insert","lines":["a"]},{"start":{"row":152,"column":11},"end":{"row":152,"column":12},"action":"insert","lines":["r"]}],[{"start":{"row":152,"column":12},"end":{"row":152,"column":13},"action":"insert","lines":["g"],"id":1049},{"start":{"row":152,"column":13},"end":{"row":152,"column":14},"action":"insert","lines":["e"]},{"start":{"row":152,"column":14},"end":{"row":152,"column":15},"action":"insert","lines":["t"]},{"start":{"row":152,"column":15},"end":{"row":152,"column":16},"action":"insert","lines":["."]},{"start":{"row":152,"column":16},"end":{"row":152,"column":17},"action":"insert","lines":["b"]},{"start":{"row":152,"column":17},"end":{"row":152,"column":18},"action":"insert","lines":["a"]},{"start":{"row":152,"column":18},"end":{"row":152,"column":19},"action":"insert","lines":["c"]},{"start":{"row":152,"column":19},"end":{"row":152,"column":20},"action":"insert","lines":["k"]}],[{"start":{"row":152,"column":20},"end":{"row":152,"column":21},"action":"insert","lines":["g"],"id":1050},{"start":{"row":152,"column":21},"end":{"row":152,"column":22},"action":"insert","lines":["r"]},{"start":{"row":152,"column":22},"end":{"row":152,"column":23},"action":"insert","lines":["o"]},{"start":{"row":152,"column":23},"end":{"row":152,"column":24},"action":"insert","lines":["u"]},{"start":{"row":152,"column":24},"end":{"row":152,"column":25},"action":"insert","lines":["n"]},{"start":{"row":152,"column":25},"end":{"row":152,"column":26},"action":"insert","lines":["d"]},{"start":{"row":152,"column":26},"end":{"row":152,"column":27},"action":"insert","lines":["C"]},{"start":{"row":152,"column":27},"end":{"row":152,"column":28},"action":"insert","lines":["o"]},{"start":{"row":152,"column":28},"end":{"row":152,"column":29},"action":"insert","lines":["l"]},{"start":{"row":152,"column":29},"end":{"row":152,"column":30},"action":"insert","lines":["o"]}],[{"start":{"row":152,"column":30},"end":{"row":152,"column":31},"action":"insert","lines":["r"],"id":1051}],[{"start":{"row":152,"column":31},"end":{"row":152,"column":32},"action":"insert","lines":["="],"id":1052}],[{"start":{"row":152,"column":31},"end":{"row":152,"column":32},"action":"remove","lines":["="],"id":1053}],[{"start":{"row":152,"column":31},"end":{"row":152,"column":32},"action":"insert","lines":[" "],"id":1054},{"start":{"row":152,"column":32},"end":{"row":152,"column":33},"action":"insert","lines":["="]}],[{"start":{"row":152,"column":33},"end":{"row":152,"column":34},"action":"insert","lines":[" "],"id":1055}],[{"start":{"row":152,"column":34},"end":{"row":152,"column":36},"action":"insert","lines":["\"\""],"id":1056}],[{"start":{"row":152,"column":35},"end":{"row":152,"column":36},"action":"insert","lines":["#"],"id":1057}],[{"start":{"row":152,"column":36},"end":{"row":152,"column":37},"action":"insert","lines":["5"],"id":1058},{"start":{"row":152,"column":37},"end":{"row":152,"column":38},"action":"insert","lines":["9"]},{"start":{"row":152,"column":38},"end":{"row":152,"column":39},"action":"insert","lines":["9"]},{"start":{"row":152,"column":39},"end":{"row":152,"column":40},"action":"insert","lines":["b"]},{"start":{"row":152,"column":40},"end":{"row":152,"column":41},"action":"insert","lines":["b"]},{"start":{"row":152,"column":41},"end":{"row":152,"column":42},"action":"insert","lines":["3"]}],[{"start":{"row":152,"column":35},"end":{"row":152,"column":42},"action":"remove","lines":["#599bb3"],"id":1059},{"start":{"row":152,"column":35},"end":{"row":152,"column":78},"action":"insert","lines":["let test = document.getElementById(\"test\");"]}],[{"start":{"row":152,"column":9},"end":{"row":152,"column":15},"action":"remove","lines":["target"],"id":1060},{"start":{"row":152,"column":9},"end":{"row":152,"column":10},"action":"insert","lines":["s"]},{"start":{"row":152,"column":10},"end":{"row":152,"column":11},"action":"insert","lines":["t"]},{"start":{"row":152,"column":11},"end":{"row":152,"column":12},"action":"insert","lines":["y"]},{"start":{"row":152,"column":12},"end":{"row":152,"column":13},"action":"insert","lines":["l"]},{"start":{"row":152,"column":13},"end":{"row":152,"column":14},"action":"insert","lines":["e"]}],[{"start":{"row":153,"column":3},"end":{"row":153,"column":4},"action":"insert","lines":[";"],"id":1061}],[{"start":{"row":152,"column":34},"end":{"row":152,"column":77},"action":"remove","lines":["let test = document.getElementById(\"test\");"],"id":1062},{"start":{"row":152,"column":34},"end":{"row":152,"column":35},"action":"insert","lines":["#"]}],[{"start":{"row":152,"column":35},"end":{"row":152,"column":36},"action":"insert","lines":["5"],"id":1063},{"start":{"row":152,"column":36},"end":{"row":152,"column":37},"action":"insert","lines":["9"]},{"start":{"row":152,"column":37},"end":{"row":152,"column":38},"action":"insert","lines":["9"]},{"start":{"row":152,"column":38},"end":{"row":152,"column":39},"action":"insert","lines":["b"]},{"start":{"row":152,"column":39},"end":{"row":152,"column":40},"action":"insert","lines":["b"]},{"start":{"row":152,"column":40},"end":{"row":152,"column":41},"action":"insert","lines":["3"]}],[{"start":{"row":146,"column":1},"end":{"row":147,"column":0},"action":"insert","lines":["",""],"id":1064},{"start":{"row":147,"column":0},"end":{"row":147,"column":1},"action":"insert","lines":[" "]}]]},"ace":{"folds":[{"start":{"row":2,"column":17},"end":{"row":83,"column":4},"placeholder":"..."},{"start":{"row":85,"column":69},"end":{"row":89,"column":6},"placeholder":"..."},{"start":{"row":96,"column":46},"end":{"row":123,"column":4},"placeholder":"..."},{"start":{"row":125,"column":63},"end":{"row":129,"column":2},"placeholder":"..."},{"start":{"row":131,"column":19},"end":{"row":145,"column":3},"placeholder":"..."}],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":147,"column":1},"end":{"row":147,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":true,"wrapToView":true},"firstLineState":0},"timestamp":1567012800390}