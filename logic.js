
// Set url for json
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// Initialize all of the LayerGroups we'll be using

// Create the map with our layers, set zoom centre of map
var map = L.map("map", {
  center: [36.7783, -119.4179],
  zoom: 4.,

});

// Add a tile layer
// connect API KEY with mapbox
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(map);


//tile function to show magnitude size by color going from green to red
function getColor(mag) {
  switch (true) {
    case mag > 6:
      return "#ff0000";
    case mag > 4:
      return "#ff5900";
    case mag > 2:
      return "#ffbf00";
    case mag > 1:
      return "#ffd500";
    case mag > 0:
      return "#aaff00";
    default:
      return "#aaff00";
  }
}
//function to increase the radius of the circl depending on the magnitude 

function getRadius(mag) {
  switch (true) {
    case mag > 6:
      return 20;
    case mag > 4:
      return 14;
    case mag > 2:
      return 10;
    case mag > 1:
      return 9;
    case mag > 0:
      return 5;
    default:
      return 5;

  }
   // maybe could have used a multiplier for magnitude below instead of case-return method

}


//uses the magnitude data to input setting for radius and colors by function above
function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: getColor(feature.properties.mag),
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: false,
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


var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
    magnitudeLevels = [0, 1, 2, 4, 6],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < magnitudeLevels.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(magnitudeLevels[i] + 1) + '"></i> ' +
            magnitudeLevels[i] + (magnitudeLevels[i + 1] ? '&ndash;' + magnitudeLevels[i + 1] + '<br>' : '+');
    }
    // div.innerHTML = labels.join('<br>');
    return div;
};

legend.addTo(map);
 

