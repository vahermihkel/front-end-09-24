import React from 'react'
import { useParams } from 'react-router-dom'
import hinnadJSON from "../../data/hinnad.json"

function YksHind() {
  const { i } = useParams();
  const leitud = hinnadJSON[i];

  if (leitud === undefined) {
    return <div>Not Found</div>
  }
  
  return (
    <div>
      <div>{i}</div>
      <div>Hind: {leitud.number}</div>
      <div>Lisaja: {leitud.lisaja}</div>
    </div>
  )
}

export default YksHind