import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa toode!");
  const nimiRef = useRef(); // useRef --> inputist väärtuse välja lugemiseks

  function lisa() {
    if (nimiRef.current.value === "") {
      muudaSonum("Tühja nimega ei saa toodet lisada!");
    } else {
      muudaSonum("Toode lisatud: " + nimiRef.current.value);
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode