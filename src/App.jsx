import { useState } from 'react'

import './App.css'

function App() {
  const [color,setColor] = useState("black")

  return (
    <>
      <div className='w-full h-screen duration-200 '  
      style={{backgroundColor:color}}>
        <div className='justify-center text-center border bg-slate-600'><h1>Choose Color</h1>
        <button className='text-white border px-3 py-1 my-2 mx-5 rounded bg-red-700' onClick={()=> setColor('red')}>Red</button>
          <button className='text-white border px-3 py-1 my-2 mx-5 rounded bg-blue-700' onClick={()=> setColor('blue')}>Blue</button>
          <button className='text-white border px-3 py-1 my-2 mx-5 rounded bg-green-700' onClick={()=> setColor('green')}>Green</button>
          <button className='text-white border px-3 py-1 my-2 mx-5 rounded bg-yellow-500' onClick={()=> setColor('yellow')}>yellow</button>
          <button className='text-white border px-3 py-1 my-2 mx-5 rounded  bg-gray-800' onClick={()=> setColor('gray')}>Grey
          </button></div>
        
        
        
      
      </div>
      
    </>
  )
}

export default App
