import axios from "axios";

export const getGates = () => {
    axios.get('http://localhost:4000/gates')
    .then(
      (res) => {
         console.log(res.data);
        let data = res.data;
        return data;
      }
    )
  }

  export const postGate = (gate,availability) => {
    axios.post('http://localhost:4000/gates'),{
      gate: gate,
      availability: availability,
      active: true
    }
  }

  export const putGate = (id,gate,availability,aircraft_id) => {
    axios.put(`http://localhost:4000/gates/${id}`),{
      gate: gate,
      availability: availability,
      aircraft_id: aircraft_id
    }
  }

  export const deleteGate = (id) => {
    axios.delete(`http://localhost:4000/gates/${id}`)
    window.location.reload();
  }

  export const assignAircraft = (id,aircraft_id) => {
    axios.post(`http://localhost:4000/aircrafts/${id}`), {
      aircraft_id: aircraft_id
    }
  }