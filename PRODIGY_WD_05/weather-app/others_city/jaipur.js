// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '4707f52acfmsh70b4106d7d6ef83p14ba1ajsna056dd45ec94',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// };


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        cloud_pct_jaipur.innerHTML= response.cloud_pct
        // cloud_pct1.innerHTML= response.cloud_pct
        temp_jaipur.innerHTML = response.temp
        // temp1.innerHTML = response.temp
        feels_like_jaipur.innerHTML = response.feels_like
        humidity_jaipur.innerHTML = response.humidity
        // humidity1.innerHTML = response.humidity
        min_temp_jaipur.innerHTML = response.min_temp
        max_temp_jaipur.innerHTML = response.max_temp
        wind_speed_jaipur.innerHTML = response.wind_speed
        wind_degrees_jaipur.innerHTML = response.wind_degrees
        // sunrise.innerHTML = response.sunrise
        // sunset.innerHTML = response.sunset

    })
    .catch(err => console.error(err))