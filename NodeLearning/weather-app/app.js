const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error, { lat, long }) => {
    if (error) {
      return console.log(error);
    }

    forecast(lat, long, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(forecastData);
    });
  });
}

// const url2 =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/India.json?access_token=pk.eyJ1IjoibmJodXBhbGFtIiwiYSI6ImNra2VjcGs2eTA3OGcycG85d2VpaGpxbW0ifQ.bBu6qUUVlPE5KIwLMkuq_Q&limit=1";

// request({ url: url2, json: true }, (error, response) => {
//   const [lat, long] = response.body.features[0].center;
//   console.log(`Latitude: ${lat}, Longitude: ${long}`);
//   const url = `http://api.weatherstack.com/current?access_key=853bfe7f4a79fded8a340f2bd161213e&query=${lat},${long}`;
//   request({ url, json: true }, (error, response) => {
//     if (error) {
//       console.log("Unable to connect to weather service");
//     } else if (response.body.error) {
//       console.log("unable to find location");
//     } else {
//       const {
//         weather_descriptions,
//         temperature,
//         feelslike,
//         precip,
//       } = response.body.current;
//       console.log(
//         `${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out. There is a ${precip}% chance of rain.`
//       );
//     }
//   });
// });
