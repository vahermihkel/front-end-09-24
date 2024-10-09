import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function LogiSisse() {
  const kasutajanimiRef = useRef();
  const paroolRef = useRef();

  const sisselogimine = () => {
    if (kasutajanimiRef.current.value.startsWith("a") === false) {
      toast.error("Vale kasutajanimi");
      return;
    }
    if (paroolRef.current.value !== "midagi") {
      toast.error("Vale parool");
      return;
    }
    toast.success("Edukalt sisse logitud!");
  }

  return (
    <div>
      <label>Kasutajanimi</label> <br />
      <input ref={kasutajanimiRef} type="text" /> <br />
      <label>Parool</label> <br />
      <input ref={paroolRef} type="password" /> <br />
      <button onClick={sisselogimine}>Sisesta</button>

      <ToastContainer 
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}

export default LogiSisse