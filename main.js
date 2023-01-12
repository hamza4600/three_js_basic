import MainRoot from './src'
import './style.css'
import { main } from './three.js'

document.querySelector('#app').innerHTML = `
  <div id="three"></div>
  <div id="c"></div>
`
// main(document.querySelector('#three'))
MainRoot()

// setupThree(document.querySelector('#app'))
