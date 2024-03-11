import { useEffect, useState } from 'react'
import './App.css'
import Country from './components/Country';

function App() {
 const [countries, setCountries] = useState([]);
 const [loader, setLoader] = useState(true);
 const [isCountry, setIsCountry] = useState(false);

useEffect(() => {
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(datas => {
    console.log(datas)
    setCountries(datas)
    setTimeout(() => {
      setLoader(false)
      setIsCountry(true)
    }, 2000);
  })
}, []);

  return (
    <>
    <div className="w-full h-32 pt-8 bg-slate-200">
      <div className=' w-96 bg-white rounded-xl p-2 mx-auto flex'>
        <input className=' bg-transparent w-full outline-none px-5' placeholder='Search country' type="text" />
        <button className='btn btn-primary'>Search</button>
      </div>
    </div>
    {
      loader && (
        <div class="loader mt-8 mx-auto"></div>
      )
    }
     <div className='flex gap-5 flex-wrap'>
      
     {
      isCountry && (
        countries.map((country, index) => <Country key={index} country={country}/>)
      )
     }
     </div>
    </>
  )
}

export default App
