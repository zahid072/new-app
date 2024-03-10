import React from 'react'

const Country = ({country}) => {
    console.log(country)
  return (
    <div>
 <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={country.flags.png} className=' h-64' alt="Shoes" /></figure>
  <div className="card-body pl-0 pt-5 text-start">
    <h2 className="card-title">Name: {country.name.common}</h2>
    <p>Capital: {country.capital}</p>
  </div>
  <div className="card-actions">
      <button className="btn btn-primary">See All Details</button>
    </div>
  </div>
    </div>
  )
}

export default Country
