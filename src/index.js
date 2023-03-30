// What events will your application need? -- select and submit map options

// What APIs will you need and in what order? -- geolocation and local businesses(foursquare)

// How will you obtain the user's location? -- leaflet api

// How will you add the user's location to the map?

// How will you get the selected location from the user? -- on load, get location

// How will you add that information to the map?

//create the map
const myMap = L.Map("map", {
  center: [35.77, -78.79],
  zoom: 15,
});

//streetmap tiles
L.tileLayer(
  "https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=41061f58f4b647bb94dad0063b961f79",
  {
    attribution:
      '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    apikey: "41061f58f4b647bb94dad0063b961f79",
    maxZoom: 18,
  }
);

//Geolocation pin
const marker = L.marker([35.77, -78.79]);
marker.addTo(myMap);

// function findPosition(position) {
//   console.log(position.coords.latitude);
//   console.log(position.coords.longitude);
// }

// navigator.geolocation.getCurrentPosition(findPosition);
