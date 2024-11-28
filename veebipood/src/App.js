// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Ostukorv from './pages/Ostukorv';
import Kinkekaart from './pages/Kinkekaart';
import Seaded from './pages/Seaded';
import LisaToode from './pages/LisaToode';
import Esindused from './pages/arrays/Esindused';
// import Kinkekaart2 from './pages/Kinkekaart2';
import Menu from './components/Menu';
import NotFound from './pages/NotFound';
import Profiil from './pages/Profiil';
import LogiSisse from './pages/LogiSisse';
import Registreeru from './pages/Registreeru';
import Hinnad from './pages/arrays/Hinnad';
import Tooted from './pages/arrays/Tooted';
import Tootajad from './pages/arrays/Tootajad';
import HaldaEsindused from './pages/halda/HaldaEsindused';
import HaldaHinnad from './pages/halda/HaldaHinnad';
import HaldaTooted from './pages/halda/HaldaTooted';
import HaldaTootajad from './pages/halda/HaldaTootajad';
import YksEsindus from './pages/yks/YksEsindus';
import YksHind from './pages/yks/YksHind';
import YksToode from './pages/yks/YksToode';
import YksTootaja from './pages/yks/YksTootaja';
import MuudaEsindus from './pages/muuda/MuudaEsindus';
import MuudaHind from './pages/muuda/MuudaHind';
import MuudaToode from './pages/muuda/MuudaToode';
import MuudaTootaja from './pages/muuda/MuudaTootaja';
import AdminHome from './pages/AdminHome';
import Map from './components/Map';

// kahte tüüpi errorid:
// 1. run-time error
// leht läheb üleni valgeks
// viga leiab: parem klõps -> inspect -> console

// 2. compile-time error
// on näha ka konsoolis (seal kus on tehtud "npm start")
// punane joon all + tekst mis on viga

// Eng poes ka:
// Bootstrap          npm i react-bootstrap bootstrap 
// E-maili saatmine   npm i @emailjs
// Kaardirakendus     npm i react-leaflet leaflet --> lisa mõned poed teise linna
// Tõlge              npm i react-i18next i18next --> lisa kolmas ja neljas keel, 
//                    Webshop (ingl keelne) kata kõik tõlgetega


function App() {
  return (
    <div className="App">

      <Menu />
    
{/* localhost:3000/osta-kinkekaart     --->     <div>Kinkekaardid</div> */}

      <Routes>
        <Route path="" element={ <Tooted/> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />

        <Route path="profiil" element={ <Profiil /> } />
        <Route path="logi-sisse" element={ <LogiSisse /> } />
        <Route path="registreeru" element={ <Registreeru /> } />

        <Route path="esindused" element={ <Esindused /> } />
        <Route path="hinnad" element={ <Hinnad /> } />
        <Route path="tooted" element={ <Tooted /> } />
        <Route path="tootajad" element={ <Tootajad /> } />

        <Route path="halda-esindused" element={ <HaldaEsindused /> } />
        <Route path="halda-hinnad" element={ <HaldaHinnad /> } />
        <Route path="halda-tooted" element={ <HaldaTooted /> } />
        <Route path="halda-tootajad" element={ <HaldaTootajad /> } />

        <Route path="esindus/:jrknr" element={ <YksEsindus /> } />
        <Route path="hind/:i" element={ <YksHind /> } />
        <Route path="toode" element={ <YksToode /> } />
        <Route path="tootaja" element={ <YksTootaja /> } />

        <Route path="muuda-esindus/:jarjekorranumber" element={ <MuudaEsindus /> } />
        <Route path="muuda-hind/:ix" element={ <MuudaHind /> } />
        <Route path="muuda-toode" element={ <MuudaToode /> } />
        <Route path="muuda-tootaja" element={ <MuudaTootaja /> } />

        <Route path="admin" element={ <AdminHome /> } />
        <Route path="shops" element={ <Map /> } />

        <Route path="*" element={ <NotFound /> } />
      </Routes>

      {/* FOOTER */}

    </div>
);  
}

export default App;

// kokku 18 kohtumist
// 12. 30.10 K
// 13. 02.11/03.11 L 16.30 või P 16.30
// 14. 6.11 K õhtu Disainer
// 15. 13.11 K õhtu 
// 16. 15.11 R õhtu
// 17. 18.11 E õhtu
// Kodus lõpuprojekti kirjutamine
// 18. 28.11 N õhtu
