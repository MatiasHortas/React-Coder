import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const CartWidget = () => {
  const { count } = useContext(CartContext);

  console.log(count);
  if (count !== 0) {
    return (
      <div>
        <p className="cart-widget__num">{count}</p>
        <FontAwesomeIcon icon={faCartShopping} className="cart-widget__icono" />
      </div>
    );
  }
};
export default CartWidget;
