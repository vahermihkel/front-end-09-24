import React, { useRef, useState } from 'react'
import ostukorvJSON from "../data/ostukorv.json"
import { ContactUs } from '../components/ContactUs';

// useState import tegemata --> 'useState' is not defined

function Kinkekaart() {
  const [summa, setSumma] = useState(20);
  const [sonum, setSonum] = useState("");
  const [kogus, setKogus] = useState(1);
  const emailRef = useRef(); // väärtuse inputist lugemiseks
  // ref vs document.getElementById()

  // ref on ühes komponendis -> 
  //      see tähendab, et kui otsib, siis otsib ainult sellest komponendist

  // react on üheleheküljeline rakendus: tal on ainult 1 .html fail
  // document.getElementById() käib läbi kogu HTMLi
  // probleemid:
  // 1. aeglaseks
  // 2. äkki kuskil on sama ID

  function lisa() {
    // if (emailRef.current.value === "") {
    //   setSonum("Pead sisestama e-maili!");
    // } else {
    //   setSonum("Email lisatud!");
    // }

    if (emailRef.current.value === "") {
      setSonum("Pead sisestama e-maili!");
      return; // katkestab töö -> edasi ei lähe
    } 

    if (emailRef.current.value.includes("@") === false) {
      setSonum("E-mail valel kujul!");
      return; 
    } 

    if (emailRef.current.value.length < 6) {
      setSonum("E-mail on liiga lühike!");
      return; 
    } 
    
    setSonum("Ostukorvi lisatud!");
    ostukorvJSON.push({
      "nimi": emailRef.current.value, 
      "hind": summa*kogus, 
      "aktiivne": true, 
      "pilt": "/laigitud.svg"
    });
  }

  // ternary operator
  // if (KAS_TRUE) {KUI_TRUE} else {KUI_FALSE}
  
  // KAS_TRUE ? KUI_TRUE : KUI_FALSE

  return (
    <div>
      <div>Anna meile tagasisidet:</div>
      <ContactUs />

      <br /><br />

      <button className={summa === 20 ? "summa-valitud" : "summa"} onClick={() => setSumma(20)}>20 €</button>
      <button className={summa === 50 ? "summa-valitud" : "summa"} onClick={() => setSumma(50)}>50 €</button>
      <button className={summa === 100 ? "summa-valitud" : "summa"} onClick={() => setSumma(100)}>100 €</button>
      <br /><br />

      <div>Kinkekaart {summa} €</div>
      <br />

      <button disabled={kogus === 1} onClick={() => setKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setKogus(kogus + 1)}>+</button>

      <br /><br />
      <div>Kokku: {summa * kogus}€</div>
      <br /><br />

      <div>Lisa Kinkekaardile e-mail</div>
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />

      <div>{sonum}</div>
    </div>
  )
}

export default Kinkekaart