//create the map chunk
const myMap = {
  coordinates: [],
  businesses: [],
  map: {},
  markers: {},

  //create the leaflet map
  buildMap() {
    this.map = L.map("map", {
      center: this.coordinates,
      zoom: 12,
    });
    // add openstreetmap tiles
    L.tileLayer(
      "https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=41061f58f4b647bb94dad0063b961f79",
      {
        attribution:
          '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        apikey: "41061f58f4b647bb94dad0063b961f79",
        minZoom: "10",
      }
    ).addTo(this.map);

    //create a marker- you are here
    const marker = L.map(this.coordinates);
    marker.addTo(this.map).bindPopup("<b>You are here</b>").openPopup();
  },

  // add business markers
  addMarkers() {
    for (var i = 0; i < this.businesses.length; i++) {
      this.markers = L.marker([
        this.businesses[i].lat,
        this.businesses[i].long,
      ])
        .bindPopup(`<p1>${this.businesses[i].name}</p1>`)
        .addTo(this.map);
    }
  },
};

async function getCoords() {
  const pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  return [pos.coords.latitude, pos.coords.longitude];
}

// get businesses from 4square
async function getFoursquare(business) {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "fsq3pHxQdJSMdNl7XwIh81QbpHXwduC37YdPkZNaD0OnszQ=",
    },
  };
  let limit = 6;
  let lat = myMap.coordinates[0];
  let lon = myMap.coordinates[1];
  let response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v3/places/search?&query=${business}&limit=${limit}&ll=${lat}%2C${lon}`,
    options
  );
  let data = await response.text();
  let parsedData = JSON.parse(data);
  let businesses = parsedData.results;
  return businesses;
}

function processBusinesses(data) {
  let businesses = data.map((element) => {
    let location = {
      name: element.name,
      lat: element.geocodes.main.latitude,
      long: element.geocodes.main.longitude,
    };
    return location;
  });
  return businesses;
}

// get user's location to the map?-- on load, get location
window.onload = async () => {
  const coords = await getCoords();
  console.log(coords);
  myMap.coordinates = coords;
  myMap.buildMap();
};

//change the business type selection - didn't want a button

document
  .getElementById("businesses")
  .addEventListener("change", async (event) => {
    event.preventDefault();
    let business = document.getElementById("businesses").value;
    let data = await getFoursquare(business);
    myMap.businesses = processBusinesses(data);
    myMap.addMarkers();
  });

//get businesses (3 each?) from 4square API. (Key = "fsq3pHxQdJSMdNl7XwIh81QbpHXwduC37YdPkZNaD0OnszQ=)
