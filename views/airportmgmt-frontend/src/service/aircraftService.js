import axios from 'axios';

export const getAircrafts = () => {
    axios.get('http://localhost:4000/aircrafts')
    .then(
      (res) => {
         console.log(res.data);
        let data = res.data;
        return data;
      }
    )
  }

  export const postAircraft = (airline,aircraft_registration,capacity,aircraft_status,) => {
    axios.post('http://localhost:4000/aircrafts'),{
      airline: airline,
      aircraft_registration: aircraft_registration,
      capacity: capacity,
      aircraft_status: aircraft_status,
      active: true
    }
  }

  export const putAircraft = (id,airline,aircraft_registration,capacity,aircraft_status,) => {
    axios.put(`http://localhost:4000/aircrafts/${id}`),{
      airline: airline,
      aircraft_registration: aircraft_registration,
      capacity: capacity,
      aircraft_status: aircraft_status,
      active: true
    }
  }

  export const deleteAircraft = (id) => {
    axios.delete(`http://localhost:4000/aircrafts/${id}`)
    window.location.reload();
  }

  export const assignAircraft = (id,aircraft_id) => {
    axios.post(`http://localhost:4000/aircrafts/${id}`), {
      aircraft_id: aircraft_id
    }
  }