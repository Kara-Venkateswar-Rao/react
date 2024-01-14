import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // function to increase value:
  const addValue = () =>{
    console.log("vicky", count);
    
    if(count === 20){
      setCount(20);
    }else{
      setCount(count+1)
    }
  }

  // function to decrease value:
  const decreaseValue = () =>{
    console.log("vicky", count);
    
    if(count === 0){
      setCount(0);
    }else{
      setCount(count-1)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {count}</h2>
      <button onClick={addValue}>add value</button>
      <button 
      style={{marginLeft: 20}}
      onClick={decreaseValue}>decrease value</button>
    </>
  )
}

export default App
