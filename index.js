const apikey="d41b3a20f7ee1f1b067d89f613b60807";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const weathericon = document.querySelector(".weather-icon");
var audio = new Audio("./sounds/clear.mp3")
audio.play();


async function checkweather(city)
{

    const response = await fetch(apiurl+city+`&appid=${apikey}`);
    var data = await response.json();
   

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";
    audio.pause();
    switch(data.weather[0].main)
    {
        case "Clouds": weathericon.src="./images/Cloudy.png";
                       audio = new Audio("./sounds/cloudy.wav")
                       audio.play();
                       break;
        case "Clear": weathericon.src="./images/clear.png";
                       audio = new Audio("./sounds/clear.mp3")
                      audio.play();        
                       break;
        case "Mist": weathericon.src="./images/misty.png";
                       audio = new Audio("./sounds/misty.mp3")
                       audio.play();
                       break;
        case "Rain": weathericon.src="./images/rainy.png";
                      audio = new Audio("./sounds/rainy.wav")
                      audio.play();
                       break;
        case "Drizzle": weathericon.src="./images/drizzle.png";
                      audio = new Audio("./sounds/drizzle.mp3")
                      audio.play();
                       break;
        default: weathericon.src="./images/clear.png";
                      audio = new Audio("./sounds/clear.mp3")
                      audio.play();
                       break;
    }

    
}

var searchbox = document.querySelector(".search input");
var searchbtn = document.querySelector(".search button");
searchbtn.addEventListener("click",()=>{

    checkweather(searchbox.value);
})
