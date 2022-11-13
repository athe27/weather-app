export default function updateDom(data) {
    const city = document.querySelector('.location')
    const temp = document.querySelector('.temperature')
    const weather = document.querySelector('.weather')
    const high = document.querySelector('.high')
    const low = document.querySelector('.low')

    data.then(function(data) {
        city.innerHTML = data.city
        temp.innerHTML = data.temp + '°'
        weather.innerHTML = data.weather
        high.innerHTML = 'H:' + data.temp_max + '°'
        low.innerHTML = 'L:' + data.temp_min + '°'
    })
    .catch(function(err) {
        const inputField = document.querySelector('input')
        inputField.setCustomValidity('Please enter a valid city.')
        inputField.reportValidity()
    })
}