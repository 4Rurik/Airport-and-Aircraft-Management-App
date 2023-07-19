import {useState,useEffect} from 'react'


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
            <p className="card-text">Some {oneAircraft.id} quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body">
            <button className='btn btn-danger' onClick={() => console.log(`${oneAircraft.id}`)}>Delete</button>
          </div>
        </div>
: console.log("Que mira bobo")} 
    </div>
  )
}
