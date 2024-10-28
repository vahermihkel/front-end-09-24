import React from 'react'
import { useParams } from 'react-router-dom'
import esindusedJSON from "../../data/esindused.json";

function YksEsindus() {
  const { jrknr } = useParams();
  const leitud = esindusedJSON[jrknr];

  // const cars = ["Saab", "Volvo", "BMW"];
  // let x = cars[1];

  // const esindusedJSON = ["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"]
  // const leitud = esindusedJSON[jrknr];

  if (leitud === undefined) {
    return <div>Not Found</div>
  }

  // leitud = {"nimi": "Järveotsa", "aadress": "Järve 10", "tel": "51312129"}
  return (
    <div>
      {jrknr}
      <div>Nimi: {leitud.nimi}</div>
      <div>Telefoninumber: {leitud.tel}</div>
      <div>Aadress: {leitud.aadress}</div>
      {/* <div>{leitud}</div> <--- ei saa, sest on objekt */}
    </div>
  )
}

export default YksEsindus