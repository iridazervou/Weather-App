let weather = {
    "apiKey":"2a8248dac07b8ead180cdec59768aef4",
     fetchWeather: function (city) {
       fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
         + city + "&units=metric&appid=" + this.apiKey
       )
       .then((Response) => Response.json())
       .then((data) => this.displayWeather(data));
     },
     displayWeather: function (data) {
       const {name} = data;
       const {description} = data.weather[0];
       const{temp, humidity} = data.main;
       const{speed} = data.wind;
       const weatherIcon = document.querySelector(".weather-icon");
       console.log(name,description,temp,humidity,speed)
       document.querySelector(".header").innerText = "Weather in " + name;
       document.querySelector(".temperature").innerText = Math.round(temp)  + "°C";
       document.querySelector(".weather").innerText = description;
       document.querySelector(".wind").innerText = speed + "km/h";
       document.querySelector(".humidity").innerText = humidity + "%";
       document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?weather "+ description +"')";

       if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "photos/Cloud.png"
       }
        else if(data.weather[0].main == "Clear"){
          weatherIcon.src = "photos/Sun.png"
        }
        else if(data.weather[0].main == "Rain"){
          weatherIcon.src = "photos/Moderate Rain.png"
        }
        else if(data.weather[0].main == "Snow"){
          weatherIcon.src = "photos/Light Snow.png"
        }
    },
    
  search: function () {
    this.fetchWeather(document.querySelector(".input").value);
  }

};

document.querySelector(".buttonsearch").addEventListener("click" , function(){
  weather.search();
}

);





       