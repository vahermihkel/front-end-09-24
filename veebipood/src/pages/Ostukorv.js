import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
    // HTMLs välja kuvamiseks
          // selle muutmiseks mis on HTMLs
  const [tooted, setTooted] = useState(["Coca", "Fanta", "Sprite"]);

  return (
    <div>
      {tooted.length > 0 && <button onClick={() => setTooted([])}>Tühjenda</button>}
      {tooted.map(toode => <div>{toode}</div>)}

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