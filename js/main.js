let date = new Date();
let currentTime = document.querySelector('#currentTime')
let currentDate = document.querySelector('#currentDate')

// displays current time in html
currentTime.innerText = date.toLocaleTimeString('en-US',{hour: 'numeric', minute: 'numeric'})

// displays current date in html
currentDate.innerText = date.toLocaleDateString('en-US',{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

