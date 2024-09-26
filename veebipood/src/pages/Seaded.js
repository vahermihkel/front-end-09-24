import React, { useState } from 'react'

function Seaded() {
  const [keel, setKeel] = useState("est");

  return (
    <div>
      <div>Hetkel aktiivne keel: {keel}</div>
      <button onClick={() => setKeel("est")}>Eesti</button>
      <button onClick={() => setKeel("eng")}>English</button>
      <button onClick={() => setKeel("rus")}>Pycckij</button>

      {keel === "est" && <div>Leht on eesti keelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Cтpaницa на английском языке</div>}
    </div>
  )
}

export default Seaded