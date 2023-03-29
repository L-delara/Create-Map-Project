// What events will your application need? -- select and submit map options

// What APIs will you need and in what order? -- geolocation and local businesses(foursquare)

// How will you obtain the user's location? -- leaflet api

// How will you add the user's location to the map?

// How will you get the selected location from the user? -- on load, get location

// How will you add that information to the map?

function findPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

navigator.geolocation.getCurrentPosition(findPosition);
