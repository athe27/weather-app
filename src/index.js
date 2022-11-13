import './style.css'
import buildSite from './buildHtml.js'
import weatherData from './weatherData.js'

buildSite()
let data = weatherData('atlanta')
