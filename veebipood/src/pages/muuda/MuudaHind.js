import React, { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import hinnadJSON from "../../data/hinnad.json"

function MuudaHind() {
  const { ix } = useParams();
  const leitud = hinnadJSON[ix];
  const hindRef = useRef();

  const muuda = () => {
    hinnadJSON[ix] = {
      "number": Number(hindRef.current.value),
      "lisaja": "Malle"
    };
  }

  if (leitud === undefined) {
    return <div>Not Found</div>
  }

  return (
    <div>
      <label>Hind</label> <br />
      <input ref={hindRef} type="text" defaultValue={leitud.number} /> <br />
      <Link to="/halda-hinnad">
      <button onClick={muuda}>Muuda</button> <br />
      </Link>
    </div>
  )
}

export default MuudaHind