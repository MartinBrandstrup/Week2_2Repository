import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

// Wednesday Assignment

//Assignment 1a

const jokeTextField = document.getElementById("joke_id_field")
const jokeIdBtn = document.getElementById("joke_id_submit")

jokeIdBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let jokeIdText = jokes.getJokeById(jokeTextField.value)
    if (jokeIdText !== undefined) {
        document.getElementById("joke_id_text").innerHTML = jokeIdText
    } else {
        document.getElementById("joke_id_text").innerHTML = 'No joke with provided id exists'
    }
})

//Assignment 1b

const JokeNewField = document.getElementById("joke_new_field")
const JokeNewSubmit = document.getElementById("joke_new_submit")

JokeNewSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    jokes.addJoke(JokeNewField)
})

//Assignment 2

const jokeFetchBtn = document.getElementById("joke_fetch_submit")

function getFetchJoke() {
    fetch("https://studypoints.info/jokes/api/jokes/period/hour")
        .then(res => res.json())
        .then(data => {
            console.log("data", data);
            document.getElementById("joke_fetch_text").innerHTML = data.joke
        })
}

jokeFetchBtn.addEventListener('click', (event) => {
    event.preventDefault()
    getFetchJoke()
})

// 2.6 Probably because we're using CORS

setInterval(getFetchJoke, 60*60*1000)

// Assignment 3

const SVGText = document.getElementById("svg_text")
const SVGNorth = document.getElementById("north")
const SVGEast = document.getElementById("east")
const SVGSouth = document.getElementById("south")
const SVGWest = document.getElementById("west")

SVGText.innerHTML = "Click on the four leafed clover!"

SVGNorth.addEventListener('click', (event) => {
    event.preventDefault()
    SVGText.innerHTML = "North clicked!"
})

SVGEast.addEventListener('click', (event) => {
    event.preventDefault()
    SVGText.innerHTML = "East clicked!"
})

SVGSouth.addEventListener('click', (event) => {
    event.preventDefault()
    SVGText.innerHTML = "South clicked!"
})

SVGWest.addEventListener('click', (event) => {
    event.preventDefault()
    SVGText.innerHTML = "West clicked!"
})