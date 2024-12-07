import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

let addValue= () => {
  if(count <= 19)
  {
    setCount(count + 1)
    document.querySelector('#error').innerHTML =''
  }
  else
    document.querySelector('#error').innerHTML ='Cannot increment more than 20'
}

let reduceValue= () => {
  if(count >= 1)
    {
      setCount(count - 1)
      document.querySelector('#error').innerHTML =''
    }
  else
    document.querySelector('#error').innerHTML = 'Cannot decrease count less than 0'
}

  return (
    <>
      
      <h1>Count is {count}</h1>
      <div className="card">
        <button onClick={addValue}>
          Increase count
        </button>
        <button onClick={reduceValue}>
          Decrease count
        </button>
        <br />
        <p id='error'></p>
      </div>
    </>
  )
}

export default App
