const axios = require("axios");

export async function handler(event, context, callback) {
  const rapidapiKey = process.env.COVID_API;
  const rapidapiHost = "covid-19-coronavirus-statistics.p.rapidapi.com";
  const rapidapiUrl =
    "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Jamaica";
  const api = "https://coronavirus-19-api.herokuapp.com/countries"
  try {
    const response = await axios({
      method: "GET",
      url:api, // rapidapiUrl,
      headers: {
       // "content-type": "application/octet-stream",
     //   "x-rapidapi-host": rapidapiHost,
     //   "x-rapidapi-key": rapidapiKey
      },
      params: {
        //country: "Jamaica"
      }
    });
   // let { data } = response.data;
   // console.log(response)
    let data = response.data.find(el=>el.country === 'Jamaica')
    console.log(data)
    callback(null, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  } catch (err) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify(err)
    });
  }
}
