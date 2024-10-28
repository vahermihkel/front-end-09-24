import React, { useState } from 'react'
import esindusedJSON from "../../data/esindused.json";
import { Link } from 'react-router-dom';

function Esindused() {
  const [linn, muudaLinn] = useState("Tallinn");
  const [keskused, setKeskused] = useState(esindusedJSON.slice());

  const sorteeriAZ = () => {
    //keskused.sort();
    keskused.sort((a, b) => a.nimi.localeCompare(b.nimi));
    setKeskused(keskused.slice());
  }

  const sorteeriZA = () => {
    // keskused.sort();
    // keskused.reverse();
    // keskused.sort((a, b) => b < a ? -1 : 1);
    keskused.sort((a, b) => b.nimi.localeCompare(a.nimi));
    setKeskused(keskused.slice());
  }

  const sorteeriTahtedeArvKasvavalt = () => {
    keskused.sort((a, b) => a.nimi.length - b.nimi.length);
    setKeskused(keskused.slice());
  }

  const sorteeriTahtedeArvKahanevalt = () => {
    keskused.sort((a, b) => b.nimi.length - a.nimi.length);
    setKeskused(keskused.slice());
  }

  const sorteeriKolmasTahtAZ = () => {
    keskused.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]));
    setKeskused(keskused.slice()); // HTMLi uuendamiseks
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = esindusedJSON.filter(keskus => keskus.nimi.endsWith("e"));
    setKeskused(vastus);
  }

  const filtreeri6VoiRohkemTahte = () => {
    const vastus = esindusedJSON.filter(keskus => keskus.nimi.length >= 6);
    setKeskused(vastus);
  }

  const filtreeriTapselt9Tahte = () => {
    const vastus = esindusedJSON.filter(keskus => keskus.nimi.length === 9);
    setKeskused(vastus);
  }

  const filtreeriKesSisaldabIsLyhendit = () => {
    const vastus = esindusedJSON.filter(keskus => keskus.nimi.includes("is"));
    setKeskused(vastus);
  }

  const filtreeriKellelNeljasTahtS = () => {
    const vastus = esindusedJSON.filter(keskus => keskus.nimi[3] === "s");
    setKeskused(vastus);
  }

  return (
    <div>
      <div>Aktiivne linn on: {linn}</div>
      <button className={linn === "Tallinn" ? "linn-valitud" : undefined} onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-valitud": undefined} onClick={() => muudaLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-valitud": undefined} onClick={() => muudaLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-valitud": undefined} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>

      {linn === "Tallinn" &&
      <div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahtedeArvKasvavalt}>Sorteeri tähtede arv kasvavalt</button>
        <button onClick={sorteeriTahtedeArvKahanevalt}>Sorteeri tähtede arv kahanevalt</button>
        <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
        <br /><br />
        <button onClick={filtreeriEgaLoppevad}>Jäta alles 'e'ga lõppevad</button>
        <button onClick={filtreeri6VoiRohkemTahte}>Jäta alles kellel 6 või rohkem tähte</button>
        <button onClick={filtreeriTapselt9Tahte}>Jäta alles täpselt 9 tähelised</button>
        <button onClick={filtreeriKesSisaldabIsLyhendit}>Jäta alles kes sisaldavad 'is' lühendit</button>
        <button onClick={filtreeriKellelNeljasTahtS}>Jäta alles kellel neljas täht 's'</button>
        {keskused.map((keskus, index) => 
          <div key={index}>
            {keskus.nimi} - {keskus.tel}
            <Link to={"/esindus/" + index}>
              Vt lähemalt
            </Link>
          </div>)}
        {/* <div>Ülemiste</div>
        <div>Rocca al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristiine</div>
        <div>Järveotsa</div> */}
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