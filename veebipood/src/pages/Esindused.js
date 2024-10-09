import React, { useState } from 'react'

function Esindused() {
  const [linn, muudaLinn] = useState("Tallinn");

  return (
    <div>
      <div>Aktiivne linn on: {linn}</div>
      <button className={linn === "Tallinn" ? "linn-valitud" : undefined} onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-valitud": undefined} onClick={() => muudaLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-valitud": undefined} onClick={() => muudaLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-valitud": undefined} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>

      {linn === "Tallinn" &&
      <div>
        <div>Ülemiste</div>
        <div>Rocca al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristiine</div>
        <div>Järveotsa</div>
      </div>
      }

      {linn === "Tartu" &&
      <div>  
        <div>Raatuse</div>
        <div>Lõunakeskus</div>
      </div>
      }

      {linn === "Narva" && <div>Fama</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused