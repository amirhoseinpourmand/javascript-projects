var cityInput = document.getElementById("cityInput");
var addInput = document.getElementById("add");
var cityOutput = document.getElementById("cityoutput");
var descOutput = document.getElementById("description");
var tempOutput = document.getElementById("temp");
var windOutput = document.getElementById("wind");

const apiKey = "3045dd712ffe6e702e3245525ac7fa38";

async function GetWeather() {

    if (cityInput.value.trim() === "") return;
    
    var weatherResult = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`)
    console.log(weatherResult);

    var jsonResult = await weatherResult.json();
    SetInfo(jsonResult);

}

function toCelcius(value){
    return (value - 273).toFixed(1);
}

function SetInfo(data){

    var cityName = data["name"];
    var description = data["weather"][0]["description"];
    var temp = data["main"]["temp"];
    var wind = data["wind"]["speed"];

    cityOutput.innerHTML = `City : ${cityName}`;
    descOutput.innerHTML = `Description : ${description}`;
    tempOutput.innerHTML = `Temperature : ${toCelcius(temp)}`;
    windOutput.innerHTML = `Wind : ${wind} km/h`;
}

addInput.addEventListener("click", GetWeather);
cityInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        GetWeather();
    }
})