var map;
      var service;
      var infowindow;

      function initMap() {
        var shop = new google.maps.LatLng(34.208283,-118.2366307);

        infowindow = new google.maps.InfoWindow();

        var request = {
          query: 'Epiq Automotive Inc',
          fields: ['name', 'geometry'],
        };

        map = new google.maps.Map(
            document.getElementById('map'), {center: shop, zoom: 19});

        service = new google.maps.places.PlacesService(map);

        service.findPlaceFromQuery(request, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }

            map.setCenter(results[0].geometry.location);
          }
        });
      }

      function createMarker(place) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }