
//Visit the USGS GeoJSON Feed page and pick a data set to visualise. When you click on a data set, 
//for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data.
// You will be using the URL of this JSON to pull in the data for our visualisation.


// Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.

// Your data markers should reflect the magnitude of the earthquake in their size and colour. Earthquakes with higher magnitudes should appear larger and darker in colour.

// Include popups that provide additional information about the earthquake when a marker is clicked.

// Create a legend that will provide context for your map data


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
  
  // 2.5 level earthquake in the last week json url
  var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";
  
  d3.json(url).then(function(response) {
  
    var heatArray = [];
    
      
    }
  
  
    var heat = L.heatLayer(heatArray, {
      radius: 100,
      blur: 35
    }).addTo(myMap);
  
  });