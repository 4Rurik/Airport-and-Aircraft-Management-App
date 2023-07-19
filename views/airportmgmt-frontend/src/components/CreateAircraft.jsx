import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { postAircraft } from '../service/aircraftService'

export default function CreateAircraft() {
  const [aircraftName, setAircraftName] = useState('')
  const [aircraftAvailability, setAircraftAvailability] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    postAircraft(aircraftName, aircraftAvailability)
    .then((res) => {
      console.log('Aircraft created successfully:', res.data);
    })
    .catch((error) => {
      console.error('Error while creating Aircraft:', error);
    })
  }

  return (
    <div className='container'>
        <Navbar/>
        <div className="">
          <form>
            <div className="mb-3">
              <label for="aircraftName" className="form-label">Aircraft name</label>
              <input type="text" className="form-control" id="aircraftName" value={aircraftName} onChange={(event) => setAircraftName(event.target.value)} aria-describedby="nameHelp" required />
              <div id="nameHelp" className="form-text">Input a name for the new Aircraft.</div>
            </div>
            <div className="mb-3">
              <label for="aircraftName" className="form-label">Aircraft availability</label>
              <select className="form-select"  value={aircraftAvailability} onChange={(event) => setAircraftAvailability(event.target.value)} aria-label="Default select example" required>
                <option selected>Select to state if the Aircraft is available upon creation.</option>
                <option value="1">Available</option>
                <option value="0">Unavailable</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleFormSubmit} >Submit</button>
          </form>
        </div>
    </div>
  )
}