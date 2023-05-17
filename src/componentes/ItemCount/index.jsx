import React, { useState } from "react";
import "./style.css";

export const Contador = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantiy] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantiy(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantiy(quantity - 1);
    }
  };

  return (
    <div className="contador__container">
      <div className="controles">
        <button className="boton-restar" onClick={decrement}>
          -
        </button>
        <h4 className="number">{quantity}</h4>
        <button className="boton-sumar" onClick={increment}>
          +
        </button>
      </div>
      <div className="contenedor__agregarCarrito">
        <button
          onClick={() => onAdd(quantity)}
          disabled={!stock}
          className="agregarCarrito"
        >
          Agregar carrito
        </button>
      </div>
    </div>
  );
};
export default Contador;
