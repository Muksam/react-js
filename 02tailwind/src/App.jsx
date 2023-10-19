import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let userObj = {
    username: 'muksam',
    age:12
  }

  return (
    <>
      <h1 className='bg-green-400 text-colot-black p-4'>Tailwind Test</h1>
      <Card  username='muksam' age='26'/>
    </>
  )
}

export default App
