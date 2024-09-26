import React, { useState } from 'react'

function Avaleht() {
  const [laigitud, setLaigitud] = useState(false);

  return (
    <div>
      {/* booleani ei kuvata nii: <div>Laik: {laigitud}</div> */}
      {laigitud === true && <img src="/laigitud.svg" alt="" /> }
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" /> }

      <button onClick={() => setLaigitud(!laigitud)}>Muuda like'i</button>
    </div>
  )
}

export default Avaleht