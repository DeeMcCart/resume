        
        var APIKey = "AIzaSyBo12wRAtpFdRyk2HpMS2t8BQbacQUmDOs"
        function initMap() {
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 6, 
                center: {
                    lat: 53.350631935496004, 
                    lng: -6.2599891096804585
                    }
            });

            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var locations = [
                {lat: 53.350, lng: -6.256 },
                {lat: 53.5, lng: -6.6 },
                {lat: 52.0, lng: -8.9 },
                ];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                  label: labels[i % labels.length], 
                  map: map,
            });
            });
            /* Add markerClusterer to the map  - not working 25/09/23*/    
            var markerClusterer = markerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            
        }
    
    