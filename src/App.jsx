import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function clickHandler(){
    if(count >= 0){
      setCount(count + 1);
    }
  }
  function removeHandler(){
    if(count > 0){
      setCount(count - 1);
    }
  }

  return (
    <>
     <h1>hello</h1>
     <button onClick={clickHandler} className=' bg-emerald-500 px-6 py-3 rounded-xl'>click me</button>
     <button onClick={removeHandler} className=' bg-emerald-500 px-6 py-3 rounded-xl'>remove</button>

     <h3>count: {count}</h3>
    </>
  )
}

export default App
