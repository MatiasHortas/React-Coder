import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../img/portal-rick-and-morty.gif";

const CartView = () => {
  const { cart, removeItem, removeProduct, Loader } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.price;
    }
    setTotalPrice(totalPrice);
  }, [cart]);

  const isCartEmpty = cart.length === 0;

  return (
    <div className="container--compra__fn">
      <h1 className="titulo--compra__fn">
        {isCartEmpty ? "Carrito Vacío" : "Carrito"}
      </h1>
      {isCartEmpty
        ? ((<p className="vacio--compra__fn">....</p>), (<Loader />))
        : cart.map((item, index) => (
            <div key={index} className="item--compra__fn">
              <div className="grid--compra__fn">
                <img src={item.image} alt="" className="img__detalle" />
              </div>
              <div className="grid--compra__fn2">
                <p className="letraCambio">Product: {item.name}</p>
                <p className="letraCambio">Quantity: {item.quantity}</p>
                <p className="letraCambio">Price: {item.price}</p>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="trash--compra__fn"
                  onClick={() => removeItem(item.name)}
                />
              </div>
            </div>
          ))}
      {!isCartEmpty && (
        <div className="fin--compra__fn">
          <Link to="/form" className="btnfin--compra__fn">
            Terminar Compra
          </Link>
          <button className="btnfin--compra__fn" onClick={removeProduct}>
            Eliminar Carrito
          </button>

          <p className="preciofin--compra__fn">
            Precio Total:{" "}
            <span className="preciofin--compra__fn1">{totalPrice}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CartView;
