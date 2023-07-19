import {useState,useEffect} from 'react'
import { deleteAircraft } from '../service/aircraftService'


export default function Aircrafts({aircraft}) {
  const [oneAircraft,setOneAircraft] = useState({})
  useEffect(()=>{
    setOneAircraft(aircraft)
  })
  return (
    <div className='container'>
      {aircraft.active == 1 ? 
        <div className="card" style={{width: "18rem"}}>
          <div className="card-body" >
            <h5 className="card-title">{oneAircraft.airline}</h5>
            <p className="card-text">Aircraft Registration: {oneAircraft.aircraft_registration}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Capacity: {oneAircraft.capacity}</li>
            <li class="list-group-item">Status: {oneAircraft.aircraft_status}</li>
          </ul>
          <div class="card-body">
            <button className='btn btn-danger' onClick={() => deleteAircraft(`${oneAircraft.id}`)}>Delete</button>
          </div>
        </div>
: console.log("")} 
    </div>
  )
}
