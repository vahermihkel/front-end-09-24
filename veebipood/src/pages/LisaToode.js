import React, { useState } from 'react'

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa toode!");

  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input type="text" /> <br />
      <button onClick={() => muudaSonum("Toode lisatud!")}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode