const body = document.body

export default function build() {
    const enterInfo = document.createElement('form')
    body.appendChild(enterInfo)

    const inputCity = document.createElement('input')
    inputCity.setAttribute('type', 'text')
    enterInfo.appendChild(inputCity)

    const submitButton = document.createElement('button')
    submitButton.innerHTML = 'Submit'
    enterInfo.appendChild(submitButton)

    const main = document.createElement('div')
    main.classList.add('main-details')
    body.appendChild(main)

    const location = document.createElement('div')
    location.classList.add('location')
    main.appendChild(location)

    const temperature = document.createElement('div')
    temperature.classList.add('temperature')
    main.appendChild(temperature)

    const weather = document.createElement('div')
    weather.classList.add('weather')
    main.appendChild(weather)

    const high_low = document.createElement('div')
    high_low.classList.add('high-low')
    main.appendChild(high_low)

    const high = document.createElement('div')
    high.classList.add('high')
    high_low.appendChild(high)

    const low = document.createElement('div')
    low.classList.add('low')
    high_low.appendChild(low)
}