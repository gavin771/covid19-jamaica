const axios = require("axios");

export function handler(event, context, callback) {
  const rapidapiKey = process.env.COVID_API;
  const rapidapiHost = "covid-19-coronavirus-statistics.p.rapidapi.com";
  const rapidapiUrl =
    "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Jamaica";

  axios({
    method: "GET",
    url: rapidapiUrl,
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": rapidapiHost,
      "x-rapidapi-key": rapidapiKey
    },
    params: {
      country: "Jamaica"
    }
  })
    .then(response => {
      console.log(response);
      return callback(null, {
        // return null to show no errors
        statusCode: 200, // http status code
        body: response.data.data
      });
    })
    .catch(error => {
      return callback(null, {
        // return null to show no errors
        statusCode: 400, // http status code
        body: error
      });
    });
}
