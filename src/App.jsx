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
     <div className='flex gap-5 flex-wrap'>
      
     {
      countries.map((country, index) => <Country key={index} country={country}/>)
     }
     </div>
    </>
  )
}

export default App
