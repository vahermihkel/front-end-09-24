// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import Kinkekaart from './pages/Kinkekaart';
import Seaded from './pages/Seaded';
import LisaToode from './pages/LisaToode';
import Esindused from './pages/Esindused';
// import Kinkekaart2 from './pages/Kinkekaart2';
import Menu from './components/Menu';
import NotFound from './pages/NotFound';
import Profiil from './pages/Profiil';
import LogiSisse from './pages/LogiSisse';
import Registreeru from './pages/Registreeru';

// kahte tüüpi errorid:
// 1. run-time error
// leht läheb üleni valgeks
// viga leiab: parem klõps -> inspect -> console

// 2. compile-time error
// on näha ka konsoolis (seal kus on tehtud "npm start")
// punane joon all + tekst mis on viga


function App() {
  return (
    <div className="App">

      <Menu />
    
{/* localhost:3000/osta-kinkekaart     --->     <div>Kinkekaardid</div> */}

      <Routes>
        <Route path="" element={ <Avaleht/> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="esindused" element={ <Esindused /> } />

        <Route path="profiil" element={ <Profiil /> } />
        <Route path="logi-sisse" element={ <LogiSisse /> } />
        <Route path="registreeru" element={ <Registreeru /> } />

        <Route path="*" element={ <NotFound /> } />
      </Routes>

      {/* FOOTER */}

    </div>
);  
}

export default App;
