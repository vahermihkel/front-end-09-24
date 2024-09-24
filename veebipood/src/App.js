// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import Kinkekaart from './pages/Kinkekaart';
import Seaded from './pages/Seaded';
import LisaToode from './pages/LisaToode';
import Esindused from './pages/Esindused';


function App() {
  return (
    <div className="App">


      <Link to="">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="Nobe auto" />
      </Link>

      <Link to="ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>

      <Link to="osta-kinkekaart">
        <button className="nupp">Kinkekaart</button>
      </Link>

      <Link to="seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Link to="lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="esindused">
        <button className="nupp">Esindused</button>
      </Link>
    
{/* localhost:3000/osta-kinkekaart     --->     <div>Kinkekaardid</div> */}

      <Routes>
        <Route path="" element={ <Avaleht/> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="esindused" element={ <Esindused /> } />
      </Routes>


    </div>
);  
}

export default App;
