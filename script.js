const apiKey = "03d9b43dea31c5b4c9d4ca6d29abc842";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.getElementById("search");
const searchbtn = document.getElementById("button");

async function checkWeather(city=""){
    if(city==""){
        return
    }
    const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);
    var data = await response.json();

    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.floor(data.main.temp) + "°c";
    document.getElementById("hmdty").innerHTML = data.main.humidity + "%";
    document.getElementById("ws").innerHTML = data.wind.speed + "  Km/h" + "<br>wind Speed";
    
    if(data.weather[0].main == "Clouds"){
        document.getElementById("img").src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        document.getElementById("img").src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        document.getElementById("img").src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        document.getElementById("img").src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        document.getElementById("img").src = "images/mist.png";
    }
}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})

window.addEventListener('load', () => {
    checkWeather("delhi")
});