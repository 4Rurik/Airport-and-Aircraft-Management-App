import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function GetGates() {
  return (
    <div className='container'>
      <Navbar/>
      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Show all existing Gates</h5>
          <p className="card-text">A consice list of all the existing Gates.</p>
          <Link className='btn btn-primary' to={'/gates/all'}>All Gates</Link>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Show all available Gates</h5>
          <p className="card-text">A consice list of all the Gates that are currently available to any Aircraft.</p>
          <Link className='btn btn-primary' to={'/gates/available'}>All Available Gates</Link>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Show all unavailable Gates</h5>
          <p className="card-text">A consice list of all the Gates currently unavailable to any Aircraft.</p>
          <Link className='btn btn-primary' to={'/gates/unavailable'}>All Unavailable Gates</Link>
        </div>
      </div>
    </div>
  )
}
