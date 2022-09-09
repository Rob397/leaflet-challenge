


// Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude..

// Include popups that provide additional information about the earthquake when a marker is clicked.Will do later after plots are complete

//--------------------// Earthquakes with higher magnitudes should appear larger and darker in colour.-------------

// colour codes for js
// Yellow #FFFF00
// dark orange #ff8c00
// Red 	#FF0000 
    // Function to Determine Color of Marker Based on the Magnitude of the Earthquake
    // function chooseColor(magnitude) {
    //   switch (true) {
    //   case magnitude > 5:
    //       return "#FF0000 ";
    //   case magnitude > 3:
    //       return "#ff8c00";
    //   case magnitude > 1:
    //       return "#FFFF00";
    //   default:
    //       return "#DAF7A6";
    //   }

// ----------------------------------------------------------------------------------------------------------------

// 2.5 level earthquake in the last week json url

  // feature.geometry.coordinates[2] is the data I want for long and lat

  // d3.json(url).then(function (data) {
  //   // Once we get a response, send the data.features object to the createFeatures function
  //   createFeatures(data.features);
  // }).addto(myMap);

  // d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function (data) {
//  This function returns the style data for each of the earthquakes we plot on  
//  the map. We pass the magnitude of the earthquake into two separate functions  
//  to calculate the color and radius. 

//  function styleInfo(feature) {    
//   return {      opacity: 1,      
//   fillOpacity: 1,      fillColor: getColor(feature.geometry.coordinates[2]),      
//   color: "#000000",      
//   radius: getRadius(feature.properties.mag),      
//   stroke: true,      
//   weight: 0.5    };  
// };
// })
  




var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// Initialize all of the LayerGroups we'll be using

// Create the map with our layers
var map = L.map("map", {
  center: [-33.4500, -70.667],
  zoom: 10,

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

// Grabbing our GeoJSON data..
d3.json(url, function(error, data) {
  // console.log(data.features[0].geometry.coordinates[2]);

  // simply addding to the map but works
  // L.geoJSON(data.features).addTo(map);
// Now put conditions
  L.circle(data.features, {
    fillOpacity: 0.75,
    color: "#FFFF00",
    fillColor: color,
    // Adjust radius
    radius: 10000000
  }).addTo(map);
  
//   {
//     style: function(feature) {

//         switch (data.features.geometry.coordinates) {
//             case (data.features.geometry.coordinates[2] > 5): return {color: "#FF0000"};
//             case (data.features[i].geometry.coordinates[2] <= 5): return {color: "#FFFF00"};
//         }
//     }
// }).addTo(map);





  // Add circles to map
//   L.circle(data.features, {
//     fillOpacity: 0.75,
//     color: "#FFFF00",
//     fillColor: color,
//     // Adjust radius
//     radius: data.features[0].geometry.coordinates[2] *150
//   }).bindPopup("<h1>" + "countries[i].name" + "</h1> <hr> <h3>Magnitude: coordinate path here"  + "</h3>").addTo(map);
});
   
  

// });










// function onEachFeature(feature, layer) {
//   layer.bindPopup("<h3>" + feature.geometry.coordinates[2] +
//     "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
// }

// // Create a GeoJSON layer containing the features array on the earthquakeData object
// // Run the onEachFeature function once for each piece of data in the array
// var earthquakes = L.geoJSON(earthquakeData, {
//   onEachFeature: onEachFeature
// });

// function(, latlng) {
//   return L.marker(latlng);
// }


// L.geoJSON(X).addTo(map);


// features.geometry.coordinates

// // Loop through the cities array and create one marker for each city object
// for (var i = 0; i < data.length; i++) {

//   // Conditionals for countries points
//   var color = "";
//   if (data[i].points > 200) {
//     color = "yellow";
//   }
//   else if (countries[i].points > 100) {
//     color = "blue";
//   }
//   else if (countries[i].points > 90) {
//     color = "green";
//   }
//   else {
//     color = "red";
//   }





// // --------------------------------------------------------------------------------------
//     // Pull the "stations" property off of response.data
//     var geometry = data.features;
  
//     // Initialize an array to hold bike markers
//     var coordinates = [];
  
//     // Loop through the stations array
//     for (var index = 0; index < geometry.length; index++) {
//       var station = geometry[index];
  
//       // For each station, create a marker and bind a popup with the station's name
//       var Marker = L.marker([geometry.coordinates[1], geometry.coordintes[2]])
//         .bindPopup("<h3>lat " +geometry.coordinates[0]  + "<h3><h3>long" +  geometry.coordintes[1] + "</h3>"
//         +"<h3><h3>" +  geometry.coordintes[2] + "</h3>");
  
//       // Add the marker to the bikeMarkers array
//       coordinates.push(Marker);
    
  
//     // Create a layer group made from the bike markers array, pass it into the createMap function
//     createMap(L.layerGroup(bikeMarkers));
//   }
// ----------------------------------------------------------------------------------

//   // Add circles to map
//   L.circle(countries[i].location, {
//     fillOpacity: 0.75,
//     color: "white",
//     fillColor: color,
//     // Adjust radius
//     radius: countries[i].points * 1500
//   }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Points: " + countries[i].points + "</h3>").addTo(myMap);
// }























// cities in chili
// Santiago	‑33.4500	‑70.6667, 7007000
// Concepción	‑36.8200	‑73.0445, 889725
// Puente Alto	‑33.6167	‑70.5833, 573935


// // An array containing each city's name, location, and population // example for popup loop
// var cities = [{
//   location: [-33.4500, -70.667],
//   name: "Santiago",
//   population: 7007000
// },
// {
//   location: [-36.8200, -73.0445],
//   name: "Concepción",
//   population: 889725
// },
// {
//   location: [-33.6167, -70.5833],
//   name: "Puente Alto",
//   population: 573935
// },

// ];


// // example loop for popup
// for (var i = 0; i < cities.length; i++) {
//   var city = cities[i];
//   L.marker(city.location)
//     .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
//     .addTo(myMap);
// }

// example circle
// var circle = L.circle([-33.4500, -70.667], {
//   color: "green",
//   fillColor: "#f03",
//   fillOpacity: 0.8,
//   radius: 500.0
// }).addTo(map);


// Your data markers should reflect the magnitude of the earthquake in their size and colour. 
// Earthquakes with higher magnitudes should appear larger and darker in colour.
// USe the logic for conditional looping to do above








// // change variable names
// for (var i = 0; i < cities.length; i++) {

//   // Create a new station object with properties of both station objects
//   var city = Object.assign({}, cities[i], population[i]);
//   // If a city has a different population size then change the color of the 
//   // circle
  
//   if (cities.population < 890000) {
   
    
     
//     };
//   }


//   // If a station has no bikes available, it's empty
//   else if (!station.num_bikes_available) {
//     stationStatusCode = "EMPTY";
//   }
//   // If a station is installed but isn't renting, it's out of order
//   else if (station.is_installed && !station.is_renting) {
//     stationStatusCode = "OUT_OF_ORDER";
//   }
//   // If a station has less than 5 bikes, it's status is low
//   else if (station.num_bikes_available < 5) {
//     stationStatusCode = "LOW";
//   }
//   // Otherwise the station is normal
//   else {
//     stationStatusCode = "NORMAL";
//   }};