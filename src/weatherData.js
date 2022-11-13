const API_KEY = '053205b634b187e5d3f8b90a0db292ef'

export default async function fetchWeatherData(cityName) {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=' + API_KEY, {mode: 'cors'})
    return response.json().then(function(response) {
        return {
            city: formatCityName(cityName),
            weather: response.weather[0].main,
            temp: kelvinToFahrenheit(response.main.temp),
            temp_max: kelvinToFahrenheit(response.main.temp_max),
            temp_min: kelvinToFahrenheit(response.main.temp_min)
        }
    })
}

function formatCityName(cityName) {
    return cityName[0].toUpperCase() + cityName.toLowerCase().slice(1)
}

function kelvinToFahrenheit(K) {
    return Math.round((K - 273.15) * 9/5 + 32)
}