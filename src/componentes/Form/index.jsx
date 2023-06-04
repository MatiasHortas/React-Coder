import "./style.css";
import Swal from "sweetalert2";
import { useState } from "react";

const SwalAlert = (event, name) => {
  event.preventDefault();

  Swal.fire({
    title: "Compra Terminada",
    text: `Muchas gracias por tu compra, ${name}`,
    icon: "success",
    confirmButtonText: "Continuar",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "/";
    }
  });
};

const FormClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    SwalAlert(event, name);
  };

  return (
    <div className="container--form">
      <form onSubmit={handleSubmit}>
        <div className="container--input__form">
          <h1 className="input--titulo">Ingresar Datos</h1>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="input--form"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input--form"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="number"
            name="phone"
            placeholder="Telefono"
            className="input--form"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <input type="submit" value="Enviar" className="input--btn" />
        </div>
      </form>
    </div>
  );
};

export default FormClient;
