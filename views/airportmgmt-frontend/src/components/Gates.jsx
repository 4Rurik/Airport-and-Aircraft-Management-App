import {useState,useEffect} from 'react'
import { deleteGate } from '../service/gateServices'
//import { getGates } from '../service/gateServices'


export default function Gates({gate}) {
    const [oneGate,setOneGate] = useState({})
      useEffect(()=>{
        setOneGate(gate)
      })
    /*const [oneAircraft,setOneAircraft] = useState({})
      useEffect(()=>{
        setOneAircraft(aircraft)
      })*/
  return (
    <div className='container'>
      {gate.active == 1 ? 
        <div className="card" style={{width: "18rem"}}>
          <div className="card-body" >
            <h5 className="card-title">Gate: {oneGate.gate}</h5>
            <p className="card-text">Availability: {oneGate.availability == 0 ? 'Unavailable' : 'Available'}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Aircraft parked on Gate by ID: {oneGate.aircraft_id}</li>
          </ul>
          <div className="card-body">
            <button className='btn btn-danger' onClick={() => deleteGate(`${oneGate.id}`)}>Delete</button>
          </div>
        </div>
: console.log("")} 
    </div>
  )
}
