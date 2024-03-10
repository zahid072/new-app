import { useEffect, useState } from 'react'
import './App.css'
import Country from './components/Country';

function App() {
 const [countries, setCountries] = useState([]);

useEffect(() => {
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(datas => {
    console.log(datas)
    setCountries(datas)
  })
}, []);

  return (
    <>
    <div className="w-full h-32 pt-8 bg-slate-200">
      <div className=' w-96 bg-white rounded-xl p-2 mx-auto flex'>
        <input className=' bg-transparent w-full outline-none px-5' type="text" />
        <button className='btn btn-primary'>Search</button>
      </div>
    </div>
     <div className='flex gap-5 flex-wrap'>
      
     {
      countries.map((country, index) => <Country key={index} country={country}/>)
     }
     </div>
    </>
  )
}

export default App
