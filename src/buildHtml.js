const body = document.body

export default function build() {
    const main = document.createElement('div')
    main.classList.add('main-details')
    body.appendChild(main)

    const location = document.createElement('div')
    location.classList.add('location')
    location.innerHTML = 'Atlanta'
    main.appendChild(location)

    const temperature = document.createElement('div')
    temperature.classList.add('temperature')
    temperature.innerHTML = '46°'
    main.appendChild(temperature)

    const weather = document.createElement('div')
    weather.classList.add('weather')
    weather.innerHTML = 'Cloudy'
    main.appendChild(weather)

    const high_low = document.createElement('div')
    high_low.classList.add('high-low')
    main.appendChild(high_low)

    const high = document.createElement('div')
    high.classList.add('high')
    high.innerHTML = 'H:69°'
    high_low.appendChild(high)

    const low = document.createElement('div')
    low.classList.add('low')
    low.innerHTML = 'L:39°'
    high_low.appendChild(low)
}