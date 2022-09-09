


// Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude..

// Include popups that provide additional information about the earthquake when a marker is clicked.Will do later after plots are complete

//--------------------// Earthquakes with higher magnitudes should appear larger and darker in colour.-------------

// colour codes for js
// Yellow #FFFF00
// dark orange #ff8c00
// Red 	#FF0000 
// #ADFF2F is green



var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// Initialize all of the LayerGroups we'll be using

// Create the map with our layers
var map = L.map("map", {
  center: [36.7783, -119.4179],
  zoom: 4.,

});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(map);

function getColor(mag) {
  switch (true) {
    case mag > 4:
      return "#E9967A";
    case mag > 2:
        return "#FF0000";
    case mag > 0.4:
      return "#EE9C00";
    case mag > 1.5:
      return "#E9967A";
    case mag > 0:
      return "#FFFF00";
    default:
      return "#ADFF2F";
  }
}


function getRadius(mag) {
  switch (true) {
    case mag > 6:
      return 18;
    case mag > 3:
      return 14;
    case mag > 1.5:
      return 10;
    case mag > 0.5:
      return 9;
    default:
      return 4;

  }

  // return mag*1.3
}


function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: getColor(feature.properties.mag),
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.6
  };
}


// Grabbing our GeoJSON data..
d3.json(url, function(error, data) {


L.geoJson(data, {
  // We turn each feature into a circleMarker on the map.
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng);
  },
  // We set the style for each circleMarker using our styleInfo function.
  style: styleInfo,
  // We create a popup for each marker to display the magnitude and location of the earthquake after the marker has been created and styled
  onEachFeature: function (feature, layer) {
    layer.bindPopup(
      "Magnitude: "
      + feature.properties.mag
      + "<br>Depth: "
      + feature.geometry.coordinates[2]
      + "<br>Location: "
      + feature.properties.place
    );
  }
}).addTo(map);
});



 

