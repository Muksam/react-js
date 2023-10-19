import { useState } from 'react'

function App() {
  
  const [color, setColor] = useState("olive")

  return (
    
         <div className="w-max h-screen duration-500"   style={{backgroundColor:color}}>

          <div className='flex flex-wrap justify-center gap-3 
          shadow-lg bg-white px-3 pg-2 rounded-3xl'>
            <button onClick = {()=>setColor('red')} 
            className='outline-none px-4 py-1 rounded-full 
            text-white '
            style={{backgroundColor:"red"}}>
              Red
            </button>
            <button onClick={()=>setColor('green')} 
            className='outline-none px-4 py-1 rounded-full 
            text-white ' 
            style={{backgroundColor:"green"}}>
              Green
            </button>
            <button onClick={()=>setColor('blue')} 
            className='outline-none px-4 py-1 rounded-full text-white ' 
            style={{backgroundColor:"blue"}}>
              Blue
            </button>
          </div>

         </div>
    
  )
}

export default App
