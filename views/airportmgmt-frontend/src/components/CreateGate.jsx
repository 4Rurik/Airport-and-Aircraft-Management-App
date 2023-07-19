import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { postGate } from '../service/gateServices'

export default function CreateGate() {
  const [gateName, setGateName] = useState('')
  const [gateAvailability, setGateAvailability] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    postGate(gateName, gateAvailability)
    .then((res) => {
      console.log('Gate created successfully:', res.data);
    })
    .catch((error) => {
      console.error('Error while creating Gate:', error);
    })
  }

  return (
    <div className='container'>
        <Navbar/>
        <div className="">
          <form>
            <div className="mb-3">
              <label for="gateName" className="form-label">Gate name</label>
              <input type="text" className="form-control" id="gateName" value={gateName} onChange={(event) => setGateName(event.target.value)} aria-describedby="nameHelp" required />
              <div id="nameHelp" className="form-text">Input a name for the new Gate.</div>
            </div>
            <div className="mb-3">
              <label for="gateName" className="form-label">Gate availability</label>
              <select className="form-select"  value={gateAvailability} onChange={(event) => setGateAvailability(event.target.value)} aria-label="Default select example" required>
                <option selected>Select to state if the Gate is available upon creation.</option>
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