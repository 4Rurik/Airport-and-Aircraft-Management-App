import {useEffect,useState} from 'react'
import Navbar from './Navbar'
import Aircrafts from './Aircrafts';
import axios from 'axios';
export default function GetAircraft() {
const [aircrafts, setAircrafts] = useState([]);
  
  useEffect(()=>{
    const fetch =  () => {
     axios.get('http://localhost:4000/aircrafts')
    .then(
      (res) => {
         console.log(res.data);
        let datos = res.data;
        setAircrafts(datos);
  })}
    fetch();
  }, [])

  return (
      <div className='container'>
       GetAircraft
        <Navbar/>
        { aircrafts ? aircrafts.map((value,i) => {
        return <Aircrafts key={i} aircraft={value}/>
        }) : <h1>loading</h1>}
     
    </div>
  )
}


