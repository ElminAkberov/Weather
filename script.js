const api = "https://api.openweathermap.org/data/2.5/weather";
const key = "1106d248a589812b7e884a26bdfc89ec";
const input = document.querySelector("input");
const images = document.getElementById("images");
const humid = document.getElementById("humid");
const wind = document.getElementById("wind");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const button = document.querySelector("button");

button.onclick = function show(){
    let request = `${api}?q=${input.value}&units=metric&appid=${key}`;
    fetch(request)
    .then(res => res.json())
    .then(data => displayFunction(data));
}
displayFunction()
function displayFunction(res){
    h2.innerHTML = `<span style="text-transform:capitalize ;">${input.value}</span>`
    h1.innerHTML = Math.floor(res.main.temp) + "°C"
    humid.innerHTML = res.main.humidity + " %"
    wind.innerHTML = Math.floor(res.wind.speed) + " km/h"
    res.weather.forEach(element => {
        images.innerHTML = element.main == "Clouds" ? `<img src="img/cloud.png"/>` : element.main == "Clear" ? `<img src="img/sun.png"/>` : element.main == "Rain" ? `<img src="img/rain.png"/>` : element.main == "Thunderstorm" ? `<img src="img/storm.png"/>`:""
    }
    )
    console.log(res);
}
