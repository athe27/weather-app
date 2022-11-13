import './style.css'
import buildSite from './buildHtml.js'
import weatherData from './weatherData.js'
import display from './domDisplay'

buildSite()
const input = document.querySelector('input')
const submit = document.querySelector('button')

submit.addEventListener('click', (event) => {
    event.preventDefault()
    const data = weatherData(input.value)
    display(data)
})