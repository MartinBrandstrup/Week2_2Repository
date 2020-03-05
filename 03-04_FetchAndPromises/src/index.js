import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

const jokeTextField = document.getElementById("joke_id_field")
const jokeIdBtn = document.getElementById("joke_id_submit")

const JokeNewField = document.getElementById("joke_new_field")
const JokeNewSubmit = document.getElementById("joke_new_submit")

const jokeFetchTextField = document.getElementById("joke_id_fetch_field")
const jokeFetchIdBtn = document.getElementById("joke_id_fetch_submit")

//Assignment 1a

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
JokeNewSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    jokes.addJoke(JokeNewField)
})

//Assignment 2
jokeFetchIdBtn.addEventListener('click', (event) => {
    event.preventDefault()
    
})


