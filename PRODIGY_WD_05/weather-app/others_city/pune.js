// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '4707f52acfmsh70b4106d7d6ef83p14ba1ajsna056dd45ec94',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// };


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        cloud_pct_pune.innerHTML= response.cloud_pct
        // cloud_pct1.innerHTML= response.cloud_pct
        temp_pune.innerHTML = response.temp
        // temp1.innerHTML = response.temp
        feels_like_pune.innerHTML = response.feels_like
        humidity_pune.innerHTML = response.humidity
        // humidity1.innerHTML = response.humidity
        min_temp_pune.innerHTML = response.min_temp
        max_temp_pune.innerHTML = response.max_temp
        wind_speed_pune.innerHTML = response.wind_speed
        wind_degrees_pune.innerHTML = response.wind_degrees
        // sunrise.innerHTML = response.sunrise
        // sunset.innerHTML = response.sunset

    })
    .catch(err => console.error(err))