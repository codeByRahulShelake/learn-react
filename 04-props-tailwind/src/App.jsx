import './App.css'
import Card from './components/Card'

function App() {
let myArr = [1,2,3]
let myObj = {
  name : 'Rahul', 
  age : 22
}
  return (
    <>
     <h1 className="text-4xl font-bold  bg-gray-200 text-blue-600 p-4 rounded-lg mb-5">Used Tailwind</h1>
     <div className='cards'>
        <Card userName = 'Rahul'/>
        <Card userName = 'Sonali'/>
        {/*<Card someArr = {myArr}  */}
        {/*<Card someObj = {myObj}  */}
        <Card/>
     </div>
     

    </>
  )
}

export default App
