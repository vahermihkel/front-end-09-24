import React, { useRef } from 'react'
import { Link, useParams } from 'react-router-dom' // kõik mis on URLga seotud, on react-router-dom'st
import esindusedJSON from "../../data/esindused.json"

function MuudaEsindus() {
  const {jarjekorranumber} = useParams();
  const leitud = esindusedJSON[jarjekorranumber];
  const esindusRef = useRef();
  const aadressRef = useRef();
  const telefonRef = useRef();

  // const x = ["BMW", "Volvo", "Saab"][1]; ->     x --> "Volvo"
  
  // ["BMW", "Volvo", "Saab"][1] = "Ford"; ---->
  // ["BMW", "Ford", "Saab"]

  const muuda = () => {
    esindusedJSON[jarjekorranumber] = {
      "nimi": esindusRef.current.value,
      "aadress": aadressRef.current.value,
      "tel": telefonRef.current.value
    };
  }

  if (leitud === undefined) {
    return <div>Not Found</div>
  }

  return (
    <div>
      {/* <div>{jarjekorranumber}</div>
      <div>{leitud}</div> */}
      <label>Esindus</label> <br />
      <input ref={esindusRef} type="text" defaultValue={leitud} /> <br />
      <label>Aadress</label> <br />
      <input ref={aadressRef} type="text" defaultValue={leitud} /> <br />
      <label>Telefon</label> <br />
      <input ref={telefonRef} type="text" defaultValue={leitud} /> <br />
      <Link to="/halda-esindused">
        <button onClick={muuda}>Muuda</button>
      </Link>
    </div>
  )
}

export default MuudaEsindus