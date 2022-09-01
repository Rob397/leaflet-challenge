//example starter code for the map

var myMap = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 2
  });
  
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
  var url = "static/data/australia-healthsites.geojson";
  
  d3.json(url).then(function(response) {
  
    var heatArray = [];
    
      
    }
  
  
    var heat = L.heatLayer(heatArray, {
      radius: 100,
      blur: 35
    }).addTo(myMap);
  
  });