import React, { useState } from 'react'
import hinnadFailist from "../../data/hinnad.json";

function Hinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice());

  const reset = () => {
    setHinnad(hinnadFailist.slice());
  }

  const sorteeriKasvavalt = () => {
    hinnad.sort((a, b) => a - b);
    setHinnad(hinnad.slice());
  }

  const sorteeriKahanevalt = () => {
    hinnad.sort((a, b) => b - a);
    setHinnad(hinnad.slice());
  }

  const sorteeri = () => {
    hinnad.sort();
    setHinnad(hinnad.slice());
  }

  const filtreeriSuuremKui100 = () => {
    const vastus = hinnadFailist.filter(hind => hind > 100);
    setHinnad(vastus);
  }

  const filtreeriVaiksemKui150 = () => {
    const vastus = hinnadFailist.filter(hind => hind < 150);
    setHinnad(vastus);
  }

  return (
    <div>
      <button onClick={reset}>Reset</button>
      <br /><br />
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={sorteeri}>Sorteeri</button>
      <br /><br />
      <button onClick={filtreeriSuuremKui100}>Jäta alles suuremad kui 100</button>
      <button onClick={filtreeriVaiksemKui150}>Jäta alles väiksemad kui 150</button>
      <br /><br />
      {hinnad.map(hind => <button>{hind}</button>)}
    </div>
  )
}

export default Hinnad