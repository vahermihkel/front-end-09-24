import React, { useRef, useState } from 'react'
import esindusedJSON from "../../data/esindused.json";

function HaldaEsindused() {
  const [esindused, setEsindused] = useState(esindusedJSON.slice());
  const esindusRef = useRef();
  const otsingRef = useRef();

  const kustutaEsimene = () => {
    esindusedJSON.splice(0, 1);
    setEsindused(esindusedJSON.slice());
  }

  const kustutaTeine = () => {
    esindusedJSON.splice(1, 1);
    setEsindused(esindusedJSON.slice());
  }

  const kustutaKolmas = () => {
    esindusedJSON.splice(2, 1);
    setEsindused(esindusedJSON.slice());
  }

  const kustutaNeljas = () => {
    esindusedJSON.splice(3, 1);
    setEsindused(esindusedJSON.slice());
  }

  const kustuta = (index) => {
    esindusedJSON.splice(index, 1);
    setEsindused(esindusedJSON.slice());
  }

  const lisa = () => {
    // esindused.push() --> siin teeb ainult siia lehele selle lisamise, teistele lehtedele mitte
    esindusedJSON.push(esindusRef.current.value); // --> siin teeb faili juurde lisamise 
    //(me küll ise ei näe seda failis, aga mälupõhiselt ta on seal)
    // see tähendab, et ka teised lehed näevad seda lisamist, kuna nemad kasutavad sama faili
    setEsindused(esindusedJSON.slice()); // see muudab ka siin lehel võttes failis
  }

  const otsi = () => {
    const vastus = esindusedJSON.filter(esindus => 
      esindus.toLowerCase().includes(otsingRef.current.value.toLowerCase())
    );
    setEsindused(vastus); 
  }

  const arvutaKokku = () => {
    let summa = 0;
    esindused.forEach(esindus => summa = summa + esindus.length)
    return summa;
  }

  return (
    <div>
      <div>Tähti kokku: {arvutaKokku()}tk</div>

      <input ref={otsingRef} type="text" />
      <button onClick={otsi}>Otsi</button>
      <br /><br />
      <div>Esindusi kokku: {esindused.length} tk</div>
      {esindused.length >= 1 && <button onClick={kustutaEsimene}>Kustuta esimene</button>}
      {esindused.length >= 2 && <button onClick={kustutaTeine}>Kustuta teine</button>}
      {esindused.length >= 3 && <button onClick={kustutaKolmas}>Kustuta kolmas</button>}
      {esindused.length >= 4 && <button onClick={kustutaNeljas}>Kustuta neljas</button>}

      <label>Esinduse nimi</label> <br />
      <input ref={esindusRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />


      {esindused.map((esindus, index) => 
        <div>
          {esindus}
          <button onClick={() => kustuta(index)}>x</button>
        </div>)}
    </div>
  )
}

export default HaldaEsindused