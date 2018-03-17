export const mapHandler = {
  init,
  search
};

let map;
let infoWindows = [];

function init() {
  // Set basic map attributes
  const mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(35.4822, -97.5350),
    styles: mapStyles
  };

  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

  $.getJSON('/public/growler-locations.json', (data) => {
    data.forEach( (record) => {
      // Create a marker
      let infoWindow = new google.maps.InfoWindow({
        content: `
          <h3 class="map__caption-title">${record.name}</h3>
          <p class="map__caption-text">Fill Type: ${record.fillType}</p>
          <p class="map__caption-text">${record.address}</p>
          <p class="map__caption-text">${record.phone}</p>
        `
      });

      infoWindows.push(infoWindow);

      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(record.lat, record.lng),
        fillColor: "blue",
        map:      map
      });

      marker.addListener('click', () => {
        closeInfoWindows();
        infoWindow.open(map, marker);
      });
    });
  });

  map.addListener("click", closeInfoWindows);
}

function search(zipCode) {

  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ 'address': zipCode }, (results, status) => {
    if (status === 'OK' && results.length > 0) {
      const coords = {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng()
      };

      map.setCenter({lat: coords.lat, lng: coords.lng});
    }
  });
}

// Private

function closeInfoWindows() {
  for (var i = 0; i < infoWindows.length; i++ ) {
    infoWindows[i].close();
  }
}

const mapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "weight": 2
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffff1f"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffff1f"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];
