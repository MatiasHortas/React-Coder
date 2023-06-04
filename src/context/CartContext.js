import { createContext, useReducer, useState } from "react";
import { cartReducer } from "./CartReducer";
import logo from "../img/portal-rick-and-morty.gif";
import "./style.css";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

export const CartContext = createContext(null);

const stateGlobal = { count: 0 };

export const CartContextProvider = ({ defaultValue = [], children }) => {
  const [state, dispatch] = useReducer(cartReducer, stateGlobal);
  const [cart, setCart] = useState(defaultValue);

  const notify = (message) => {
    toast.success(message, {
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
  const SwalAlert = () => {
    Swal.fire({
      title: "Carrito Eliminado",
      icon: "success",
      confirmButtonText: "Continuar",
    });
  };
  const Loader = () => (
    <img src={logo} alt="Loading" className="loading--context" />
  );

  function reset(count) {
    console.log(count);
    dispatch({
      type: "RESETEAR",
      payload: { count },
      stateGlobal,
    });
    SwalAlert();
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  }

  const addToCart = (product) => {
    const busquedaDeProducto = cart.find((item) => item.name === product.name);

    if (busquedaDeProducto) {
      const updatedCart = cart.map((item) => {
        if (item.name === product.name) {
          return {
            ...item,
            quantity: item.quantity + product.quantity,
            price: item.price + product.price,
          };
        }
        return item;
      });

      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
    console.log("Producto agregado al carrito:", product);
  };

  function removeProduct() {
    setCart([]);
    reset();
  }

  function addProduct(count) {
    console.log("cartcontext", count);
    dispatch({
      type: "AGREGAR",
      payload: { count },
    });
  }
  function removeItem(productName) {
    const removedProduct = cart.find((item) => item.name === productName);
    const updatedCart = cart.filter((item) => item.name !== productName);

    setCart(updatedCart);
    notify(`Se eliminó del carrito: ${productName}`);
    console.log("Producto eliminado del carrito:", productName);
    restarProductCarrito(removedProduct.quantity);
  }

  function restarProduct(count) {
    if (state.count - count <= 0) {
      dispatch({
        type: "RESTAR",
        payload: { count: state.count },
      });
    } else {
      dispatch({
        type: "RESTAR",
        payload: { count },
      });
    }
    console.log(count);
  }
  function restarProductCarrito(count) {
    dispatch({
      type: "RESTARCARRITO",
      payload: { count },
    });
    console.log(count);
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        count: state.count,
        addProduct,
        restarProduct,
        reset,
        addToCart,
        removeItem,
        removeProduct,
        Loader,
      }}
    >
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
};
