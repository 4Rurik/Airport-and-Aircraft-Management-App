import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

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
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
  );
}

export default App
