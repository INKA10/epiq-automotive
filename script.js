 // Sidenav
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});

    // Slider
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
      indicators: false,
      height: 500,
      transition: 500,
      interval: 6000
    });


// modal script

$(document).ready(function(){
          $('.modal').modal();
        });


    // Material Boxed
    const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {});

    // ScrollSpy
    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {});

// Map for API 

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 34.2083382, lng: -118.2344834},
      zoom: 18
    });

    var request = {
      placeId: 'ChIJO48xBmzqwoARfxv3V4Ijryk',
      fields: ['name', 'formatted_phone_number', 'formatted_address', 'place_id', 'geometry', 'opening_hours']
    };

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);

    service.getDetails(request, function(place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
        google.maps.event.addListener(marker, 'click', function() {
            
          infowindow.setContent('<div style="color:black;"><strong>' + 
            place.name + '</strong><br>' +
            place.formatted_address + '<br>' +
            place.formatted_phone_number + '<br>' +
            place.opening_hours.periods[1].open.time + "-" +place.opening_hours.periods[1].close.time + '</div>');
            
          infowindow.open(map, this);
    
        });
      }
    });
  }