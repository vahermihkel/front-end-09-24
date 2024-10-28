import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvJSON from "../data/ostukorv.json";

function Ostukorv() {
    // HTMLs välja kuvamiseks
          // selle muutmiseks mis on HTMLs
  const [tooted, setTooted] = useState(ostukorvJSON);

  const tyhjenda = () => {
    ostukorvJSON.splice(0);
    setTooted(ostukorvJSON.slice());
  }

  const kustuta = (index) => {
    ostukorvJSON.splice(index,1);
    setTooted(ostukorvJSON.slice());
  }

  // kui ma ei saada midagi kaasa funktsiooni välja kutsudes sulgude sees
  // onClick={tyhjenda}

  // kui ma saadan midagi kaasa
  // onClick={() => kustuta(index)}

  // kui ma soovin funktsiooni käivitada ilma nupuvajutuseta
  // <div>{arvutaKokku()}</div>

  const arvutaKokku = () => {
    let sum = 0;
    tooted.forEach(element => {
      sum = sum + element.hind;
      // sum += element.hind;
    });
    return sum; // returni järgne läheb HTMLi
  }

  // function arvutaKokku() {

  // }

  return (
    <div>
      {tooted.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      {tooted.map((toode, index) => 
        <div>
          <img style={{width: "100px"}} src={toode.pilt} alt="" />
          <div>{toode.nimi}</div>
          <div>{toode.hind}€</div>
          <button onClick={() => kustuta(index)}>x</button>
        </div>)}

      <div>Ostukorvi kogusumma: {arvutaKokku()}€</div>

      {tooted.length === 0 && 
      <>
        <div>Ostukorv on tühi</div>
        <Link to="/osta-kinkekaart">
          <button>Mine lisa kinkekaart</button>
        </Link>
      </>}

    </div>
  )
}

export default Ostukorv