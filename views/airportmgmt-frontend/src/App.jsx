import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GetAircraft from './components/GetAircraft';
import CreateAircraft from './components/CreateAircraft';
import UpdateAircraft from './components/UpdateAircraft';
import GetGates from './components/GetGates';
import CreateGate from './components/CreateGate';
import UpdateGate from './components/UpdateGate';
import GatesAll from './components/GatesAll';
import GatesAvailable from './components/GatesAvailable';
import GatesUnavailable from './components/GatesUnavailable';
import GatesAvailability from './components/GatesAvailability';

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aircrafts/get' element={<GetAircraft />}></Route>
        <Route path='/aircrafts/create' element={<CreateAircraft />}></Route>
        <Route path='/aircrafts/update' element={<UpdateAircraft />}></Route>
        <Route path='/gates/get' element={<GetGates />}></Route>
        <Route path='/gates/create' element={<CreateGate />}></Route>
        <Route path='/gates/update' element={<UpdateGate />}></Route>
        <Route path='/gates/all' element={<GatesAll />}></Route>
        <Route path='/gates/available' element={<GatesAvailable />}></Route>
        <Route path='/gates/unavailable' element={<GatesUnavailable />}></Route>
        <Route path='/gates/availability' element={<GatesAvailability />}></Route>
      </Routes>
  );
}

export default App
