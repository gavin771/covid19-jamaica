async function loadCOVID() {
  //document.getElementById("last-update").innerHTML = "";
  document.getElementById("confirmed").innerHTML = "";
  document.getElementById("deaths").innerHTML = "";
  document.getElementById("recovered").innerHTML = "";
  const res = await fetch(
    "https://covid19-jamaica.netlify.com/.netlify/functions/covid-api"
  );
  const data = await res.json();
  //document.getElementById("last-update").innerHTML = new Date(data?.covid19Stats[0]?.lastUpdate).toDateString();
  document.getElementById("confirmed").innerHTML = data?.cases;
  document.getElementById("deaths").innerHTML = data?.deaths;
  document.getElementById("recovered").innerHTML = data?.recovered;
}
