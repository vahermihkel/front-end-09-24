import React, { useRef, useState } from 'react'

// useState import tegemata --> 'useState' is not defined

function Kinkekaart() {
  const [summa, setSumma] = useState(20);
  const [sonum, setSonum] = useState("");
  const [kogus, setKogus] = useState(1);
  const emailRef = useRef();

  function lisa() {
    if (emailRef.current.value === "") {
      setSonum("Pead sisestama e-maili!");
    } else {
      setSonum("Email lisatud!");
    }
  }

  return (
    <div>
      <button onClick={() => setSumma(20)}>20 €</button>
      <button onClick={() => setSumma(50)}>50 €</button>
      <button onClick={() => setSumma(100)}>100 €</button>
      <br /><br />

      <div>Kinkekaart {summa} €</div>
      <br />

      <button disabled={kogus === 1} onClick={() => setKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setKogus(kogus + 1)}>+</button>

      <br />

      <div>Lisa Kinkekaardile e-mail</div>
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />

      <div>{sonum}</div>
    </div>
  )
}

export default Kinkekaart