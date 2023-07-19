import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function GetGates() {
  return (
    <div className='container'>
        GetGates
        <Navbar/>
        <div class="card" style={{width: '18rem'}}>
          <div class="card-body">
            <h5 class="card-title">Show all existing Gates</h5>
            <p class="card-text">A consice list of all the existing Gates.</p>
            <Link className='btn btn-primary' to={'/gates/all'}>All Gates</Link>
          </div>
        </div>
        <div class="card" style={{width: '18rem'}}>
          <div class="card-body">
            <h5 class="card-title">Show all available Gates</h5>
            <p class="card-text">A consice list of all the Gates that are currently available to any Aircraft.</p>
            <Link className='btn btn-primary' to={'/gates/available'}>All Available Gates</Link>
          </div>
        </div>
        <div class="card" style={{width: '18rem'}}>
          <div class="card-body">
            <h5 class="card-title">Show all unavailable Gates</h5>
            <p class="card-text">A consice list of all the Gates currently unavailable to any Aircraft.</p>
            <Link className='btn btn-primary' to={'/gates/unavailable'}>All Unavailable Gates</Link>
          </div>
        </div>
        <div class="card" style={{width: '18rem'}}>
          <div class="card-body">
            <h5 class="card-title">Show availability</h5>
            <p class="card-text">Show availability of a specific Gate.</p>
            <Link className='btn btn-primary' to={'/gates/availability'}>Availability of Gates</Link>
          </div>
        </div>
    </div>
  )
}
