import axios from 'axios';
import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([]);
  const fetchData = () => {
    axios.get('http://localhost:4000/aircrafts')
    .then(
      (res) => {
        console.log(res.data);
        setBackendData(res.data);
      }
    )
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hola</h1>
      {backendData.map((value) => {
        return <div className="card m-2">
          <div className="card-header">
            <h1>{value.airline}</h1>
          </div>
          <div className="card-body">
            <h1>{value.aircraft_registration}</h1>
            <h1>{value.aircraft_status}</h1>
            <h1>{value.capacity}</h1>
          </div>
        </div>
      })}
    </div>
  )
}

export default App
