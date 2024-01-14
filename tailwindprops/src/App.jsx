import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card name='pallavi' img='https://th.bing.com/th/id/OIP.YAXlTjvtEKchdMVc5laZhwHaE8?w=230&h=180&c=7&r=0&o=5&pid=1.7' para='she is a very beautiful gir in this world' button='view profile'/>
      <Card name='vicky' para='he is a handsome guy inthe world' button='visit me'/>
      <Card/>
     <h1 className='bg-green-600 p-2 rounded-full color text-black active:scale-95 cursor:pointer max-w-30  text-xl'>Tailwind Css</h1>
      <div className=''></div>
    </>
  )
}

export default App
