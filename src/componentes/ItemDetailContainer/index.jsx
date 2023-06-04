import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import Contador from "../ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = () => {
  const { addProduct, restarProduct, addToCart, Loader } =
    useContext(CartContext);
  const { id } = useParams();
  const [item, setItem] = useState();
  const stock = 5;
  const [price, setPrice] = useState(350);

  const handlerCount = (count) => {
    addProduct(count);
  };

  const handlerCountResta = (count) => {
    restarProduct(count);
  };

  const handlerAddProduct = (count) => {
    const product = {
      name: item.name,
      image: item.image,
      quantity: count,
      price: price,
    };
    addToCart(product);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        ).then((response) => response.json());
        console.log(response);
        setItem(response);
      } catch (error) {
        console.error(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const circuloClass =
    item && item.status === "Dead"
      ? "circulo-red"
      : item && item.status === "unknown"
      ? "circulo-question"
      : "circulo-green";

  if (!item) {
    return (
      <div className="container--loader">
        <Loader />;
      </div>
    );
  } else {
    return (
      <div className="container__detalle">
        <div className="div1">
          <h1 className="titulo__inicio--detalle">Detalle de compra</h1>
          <div className="container__detalle--item">
            <h2 className="titulo__item--detalle">{item.name}</h2>
            <img src={item.image} className="img__detalle" alt="imagen" />
          </div>
        </div>
        <div className="container__grid--compra">
          <h2 className="letraCambio titulo__detalle--descripcion">
            Descripcion
          </h2>
          <p className="letraCambio">
            <span className="span__detalle">Nombre: </span>
            {item.name}
          </p>
          <p className="letraCambio">
            <span className="span__detalle">Genero: </span> {item.gender}
          </p>
          <p className="letraCambio">
            <span className="span__detalle">Ubicacion: </span>{" "}
            {item.location.name}
          </p>
          <p className="letraCambio">
            <span className="span__detalle">Estado: </span>
            <button className={circuloClass}></button> {item.status}
          </p>
          <p className="letraCambio">
            <span className="span__detalle">Especie: </span>
            {item.species}
          </p>
          <p className="letraCambio">
            <span className="span__detalle">Stock: </span>
            {stock}
          </p>
          <h2 className="item__precio--detalle">${price}</h2>
          <div className="container__item--precio__detalle"></div>
          <Contador
            price={price}
            item={item}
            onChangeCount={(e) => handlerCount(e)}
            onRestCount={(e) => handlerCountResta(e)}
            onAddProduct={(e) => handlerAddProduct(e)}
            maxCount={stock}
          />
        </div>
      </div>
    );
  }
};

export default ItemDetail;
