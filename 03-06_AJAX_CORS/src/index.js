import 'bootstrap/dist/css/bootstrap.css'

const urlBase = "http://restcountries.eu/rest/v1/alpha?codes="
let countryCode = de

function fetchCountry() {
    fetch(urlBase + countryCode)
        .then(res => res.json())
        .then(data => {
            console.log("data", data);
            document.getElementById("country").innerHTML = data.capital
        })
}

fetchCountry()