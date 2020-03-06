import 'bootstrap/dist/css/bootstrap.css'

const urlBase = "http://restcountries.eu/rest/v1/alpha?codes="
let countryDiv = document.getElementById('svg') //Not sure what the id of the entire svg is
let countryCode = 'de'

countryDiv.addEventListener('click', (event) => {
    const countryPressed = event.target.closest('g)') //.closest is apparently not available for this svg?
    document.getElementById('country').innerHTML = countryPressed.id
})

function fetchCountry() {
    fetch(urlBase + countryCode)
        .then(res => res.json())
        .then(data => {
            console.log("data", data);
            document.getElementById("country").innerHTML = data
        })
}

fetchCountry()