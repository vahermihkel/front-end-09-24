import React, { useState } from 'react'

// useState import tegemata --> 'useState' is not defined

function Kinkekaart() {
  const [summa, setSumma] = useState(20);

  return (
    <div>
      <button onClick={() => setSumma(20)}>20 €</button>
      <button onClick={() => setSumma(50)}>50 €</button>
      <button onClick={() => setSumma(100)}>100 €</button>
      <br /><br />

      <div>Kinkekaart {summa} €</div>
    </div>
  )
}

export default Kinkekaart