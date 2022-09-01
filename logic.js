
//Visit the USGS GeoJSON Feed page and pick a data set to visualise. When you click on a data set, 
//for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data.
// You will be using the URL of this JSON to pull in the data for our visualisation.


// Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.

// Your data markers should reflect the magnitude of the earthquake in their size and colour. Earthquakes with higher magnitudes should appear larger and darker in colour.

// Include popups that provide additional information about the earthquake when a marker is clicked.

// Create a legend that will provide context for your map data



  
  // 2.5 level earthquake in the last week json url
  var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";



  d3.json(url).then(function(data) {
    // Once we get a response, send the data.features object to the createFeatures function
    createFeatures(data.features);
  });
  
    // Create a GeoJSON layer containing the features array on the earthquakeData object
    // Run the onEachFeature function once for each piece of data in the array
    var earthquakes = L.geoJSON(earthquakeData, {
      onEachFeature: onEachFeature
    });
    var myMap = L.map("map", {
      center: [40.7128, -74.0059],
      zoom: 2
    });

    function createFeatures(earthquakeData) {
  
      // Define a function we want to run once for each feature in the features array
      // Give each feature a popup describing the place and time of the earthquake
      function onEachFeature(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.place +
          "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
      }
    
    
    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/streets-v11",
      accessToken: API_KEY
    }).addTo(myMap);  
  //   // Sending our earthquakes layer to the createMap function
  //   createMap(earthquakes);
  // }function createMap(earthquakes) {

  //   // Define streetmap and darkmap layers
  //   var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  //     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  //     tileSize: 512,
  //     maxZoom: 18,
  //     zoomOffset: -1,
  //     id: "mapbox/streets-v11",
  //     accessToken: API_KEY
  //   });
  
  //   var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  //     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  //     maxZoom: 18,
  //     id: "dark-v10",
  //     accessToken: API_KEY
  //   });
  
  //   // Define a baseMaps object to hold our base layers
  //   var baseMaps = {
  //     "Street Map": streetmap,
  //     "Dark Map": darkmap
  //   };
  
  //   // Create overlay object to hold our overlay layer
  //   var overlayMaps = {
  //     Earthquakes: earthquakes
  //   };
  
  //   // Create our map, giving it the streetmap and earthquakes layers to display on load
  //   var myMap = L.map("map", {
  //     center: [
  //       37.09, -95.71
  //     ],
  //     zoom: 5,
  //     layers: [streetmap, earthquakes]
  //   });
  
  //   // Create a layer control
  //   // Pass in our baseMaps and overlayMaps
  //   // Add the layer control to the map
  //   L.control.layers(baseMaps, overlayMaps, {
  //     collapsed: false
  //   }).addTo(myMap);
  }
  
  
    // Grab the data with d3
    // d3.json(url).then(function (response) {
    
    //     console.log(response)
    //     // Create a new marker cluster group
    //     var markers = L.markerClusterGroup();
    
    //     // Loop through data
    //     for (var i = 0; i < response.length; i++) {
    
    //         // Set the data location property to a variable
    //         var location = response[i].location;
    
    //         // Check for location property
    //         if (location) {
    
    //             // Add a new marker to the cluster group and bind a pop-up
    //             markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
    //                 .bindPopup(response[i].descriptor));
    //         }
    
    //     }
    
    //     // Add our marker cluster layer to the map
    //     myMap.addLayer(markers);
    
    // });
