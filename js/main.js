// imports from other files
import { apiKey } from '../js/apikeys.js';

let date = new Date();
let currentTime = document.querySelector('#currentTime')
let currentDate = document.querySelector('#currentDate')

// displays current time in html
currentTime.innerText = date.toLocaleTimeString('en-US',{hour: 'numeric', minute: 'numeric'})

// displays current date in html
currentDate.innerText = date.toLocaleDateString('en-US',{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

// Weather stuff
// const choice = document.querySelector('input').value.toLowerCase()
const url = `https://api.weatherbit.io/v2.0/current?lat=40.711903&lon=-73.966068&key=${apiKey}`
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });