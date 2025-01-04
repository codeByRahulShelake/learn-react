import React from 'react'
import { createRoot } from 'react-dom/client'

// using user defined object but with entire html code
const reactElement = (
 <a href="https://google.com" target='-blank'>Click here</a>
)

// using react method
const anotherElement = React.createElement(
        'a',
        {href : 'https://github.com/codeByRahulShelake/learn-react'},
        'My repository'
)

/*
createRoot(document.getElementById('root')).render(
 
  reactElement    // user defined object

)
  */

/*
createRoot(document.getElementById('root')).render(
 
  App()  // we can call function like this but it is not a good practice
)

createRoot(document.getElementById('root')).render(
 
  <App />  // default 
)
  */

createRoot(document.getElementById('root')).render(
 
  anotherElement  // using react mehtod

)