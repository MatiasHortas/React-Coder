import "./style.css";
import { CartContext } from "../../context/CartContext";
import { useCount } from "./useCount";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { createOrder } from "../../utils/createUpdateFirestore";

const Contador = ({ price, item, maxCount, onChangeCount, onRestCount }) => {
  let { count, decrement, increment } = useCount(0, 0, maxCount);
  const { addToCart } = useContext(CartContext);

  const notify = () => {
    toast.success(`${item.name} agregado al carrito`, {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const handlerClick = () => {
    if (count !== maxCount) {
      increment();
      onChangeCount(count + 1);
    }
  };
  const handlerClickMenos = () => {
    if (count === 0) {
      count = 0;
    } else {
      decrement();
      onRestCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    const product = {
      name: item.name,
      image: item.image,
      quantity: count,
      price: price * count,
    };

    addToCart(product);
    notify();
    createOrder(product).then((result) => {
      console.log(result);
    });
  };

  return (
    <div className="contador__container">
      <div className="controles">
        <button onClick={handlerClick} className="boton-sumar">
          +
        </button>
        <p className="number">{count}</p>
        <button onClick={handlerClickMenos} className="boton-restar">
          -
        </button>
      </div>
      <div className="contenedor__agregarCarrito">
        <button className="agregarCarrito" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contador;
