import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const CartWidget = () => {
  const carrito = 2;
  return (
    <div>
      <p className="cart-widget__num">{carrito}</p>
      <FontAwesomeIcon icon={faCartShopping} className="cart-widget__icono" />
    </div>
  );
};
export default CartWidget;
