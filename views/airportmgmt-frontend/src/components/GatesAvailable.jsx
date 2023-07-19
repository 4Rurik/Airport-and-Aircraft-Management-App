import {useEffect,useState} from 'react'
import Navbar from './Navbar'
import Gates from './Gates';
import axios from 'axios';
export default function GetGate() {
const [gates, setGates] = useState([]);
  
  useEffect(()=>{
    const fetch =  () => {
     axios.get('http://localhost:4000/gates')
    .then(
      (res) => {
         console.log(res.data);
        let datos = res.data;
        setGates(datos);
  })}
    fetch();
  }, [])

  return (
      <div className='container'>
        <Navbar/>
        { gates ? gates.map((value,i) => {
          if (value.availability == 1) {
            return <Gates key={i} gate={value}/>
          }
          return null;
        }) : <h1>loading</h1>}
     
    </div>
  )
}