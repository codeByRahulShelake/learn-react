import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = (
 <a href="https://google.com" target='-blank'>Click here</a>
)

createRoot(document.getElementById('root')).render(
 
  reactElement 

)

/*
createRoot(document.getElementById('root')).render(
 
  App()
)

createRoot(document.getElementById('root')).render(
 
  <App />
)
  */

