// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '4707f52acfmsh70b4106d7d6ef83p14ba1ajsna056dd45ec94',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// };
// const getWeather = (city)=>{
// cityName.innerHTML=city
// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
//     .then(response => response.json())
//     .then(response => {
//         console.log(response)
//         cloud_pct.innerHTML= response.cloud_pct
//         cloud_pct1.innerHTML= response.cloud_pct
//         temp.innerHTML = response.temp
//         temp1.innerHTML = response.temp
//         feels_like.innerHTML = response.feels_like
//         humidity.innerHTML = response.humidity
//         humidity1.innerHTML = response.humidity
//         min_temp.innerHTML = response.min_temp
//         max_temp.innerHTML = response.max_temp
//         wind_speed.innerHTML = response.wind_speed
//         wind_degrees.innerHTML = response.wind_degrees
//         // sunrise.innerHTML = response.sunrise
//         // sunset.innerHTML = response.sunset

//     })
//     .catch(err => console.error(err));
// }
// // const submit = document.getElementById("submit");
// submit.addEventListener("click", (e)=>{
// e.preventDefault()
// getWeather(city.value)
// })
// getWeather("Delhi")
document.addEventListener("DOMContentLoaded", function() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4707f52acfmsh70b4106d7d6ef83p14ba1ajsna056dd45ec94',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const getWeather = (city) => {
        cityName.innerHTML = city;
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                cloud_pct.innerHTML = response.cloud_pct;
                cloud_pct1.innerHTML = response.cloud_pct;
                temp.innerHTML = response.temp;
                temp1.innerHTML = response.temp;
                feels_like.innerHTML = response.feels_like;
                humidity.innerHTML = response.humidity;
                humidity1.innerHTML = response.humidity;
                min_temp.innerHTML = response.min_temp;
                max_temp.innerHTML = response.max_temp;
                wind_speed.innerHTML = response.wind_speed;
                wind_degrees.innerHTML = response.wind_degrees;
                // sunrise.innerHTML = response.sunrise
                // sunset.innerHTML = response.sunset
            })
            .catch(err => console.error(err));
    }

    const submit = document.getElementById("submit");
    const city = document.getElementById("city");
    const cityName = document.getElementById("cityName");
    const cloud_pct = document.getElementById("cloud_pct");
    const cloud_pct1 = document.getElementById("cloud_pct1");
    const temp = document.getElementById("temp");
    const temp1 = document.getElementById("temp1");
    const feels_like = document.getElementById("feels_like");
    const humidity = document.getElementById("humidity");
    const humidity1 = document.getElementById("humidity1");
    const min_temp = document.getElementById("min_temp");
    const max_temp = document.getElementById("max_temp");
    const wind_speed = document.getElementById("wind_speed");
    const wind_degrees = document.getElementById("wind_degrees");

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        getWeather(city.value);
    });

    getWeather("Delhi");
});
