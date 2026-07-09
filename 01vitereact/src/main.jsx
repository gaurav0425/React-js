import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>Custom Myapp</h1>
  )
}

const anotherElement = (
  <a href="https://google.com" target='__blank'>google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '__blank'},
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
    // reactElement
    <App/>
)
