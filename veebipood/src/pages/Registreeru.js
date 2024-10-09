import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Registreeru() {
  const kasutajanimiRef = useRef();
  const paroolRef = useRef();

  const registreeru = () => {
    if (kasutajanimiRef.current.value.length < 5) {
      toast.error("Liiga lühike kasutajanimi");
      return;
    }
  //if (kasutajanimiRef.current.value.charAt(0) === "a") {
  //if (kasutajanimiRef.current.value.at(0) === "a") {
  //if (kasutajanimiRef.current.value[0] === "a") {
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
      <button onClick={registreeru}>Sisesta</button>

      <ToastContainer 
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}

export default Registreeru