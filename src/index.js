//create the map
const myMap = L.map("map", {
  center: [35.77, -78.79],
  zoom: 15,
});

// add openstreetmap tiles
L.tileLayer(
  "https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=41061f58f4b647bb94dad0063b961f79",
  {
    attribution:
      '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    apikey: "41061f58f4b647bb94dad0063b961f79",
    maxZoom: 15,
  }
).addTo(myMap);

// How to get the location from the user?
function findPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

navigator.geolocation.getCurrentPosition(findPosition);

// add markers to map - current pos., businesses

//select a business type and load the markers
// function pinOnMap(event){

// }

// let businessPicker = document.querySelector("#businesses");
// businessPicker.addEventListener("change", pinOnMap);

// How will you add the user's location to the map?-- on load, get location

//get businesses (3 each?) from 4square API. (Key = "fsq3pHxQdJSMdNl7XwIh81QbpHXwduC37YdPkZNaD0OnszQ=)

// How will you add that information to the map?
