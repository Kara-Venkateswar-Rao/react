import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div id="colorbar" className='w-full h-screen duration-200' style={{background: color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 '>

          <div className='flex justify-center gap-10 px-3 py-1 border rounded-full'>
            <button 
            onClick={() => {setColor("red")}}
            className=' bg-red-700 px-3 py-0.5 rounded-full active:scale-95'>Red</button>

            <button 
            onClick={() => {setColor("blue")}}
            className=' bg-blue-600 px-3 rounded-full active:scale-95'>Blue</button>

            <button 
            onClick={() => {setColor("#8B5CF6")}}
            className=' bg-violet-500 px-3 rounded-full active:scale-95'>Violet</button>

            <button 
            onClick={() => {setColor("purple")}}
            className=' bg-purple-700 px-3 rounded-full active:scale-95'>Purple</button>
            
            <button 
            onClick={() => {setColor("orange")}}
            className=' bg-orange-600 px-3 rounded-full active:scale-95 shadow-lg'>Orange</button>
            
            <button 
            onClick={() => {setColor("green")}}
            className=' bg-green-600 px-3 rounded-full active:scale-95 shadow-lg'>Green</button>
            
            <button 
            onClick={() => {setColor("Pink")}}
            className=' bg-pink-500 px-3 rounded-full active:scale-95 shadow-lg'>Pink</button>
            
            <button 
            onClick={() => {setColor("black")}}
            className=' bg-slate-900 px-3 rounded-full active:scale-95 shadow-lg border text-white'>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
