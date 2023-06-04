import { useState, useEffect, useContext } from "react";
import "./style.css";
import Item from "./item";
import { CartContext } from "../../context/CartContext";
import { Link, useParams } from "react-router-dom";

import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { getCollection } from "../../utils/getFirestore";

const ItemListContainer = ({}) => {
  const { Loader } = useContext(CartContext);

  const [pageNext, setPageNext] = useState(1);
  const [itemList, setItemList] = useState([]);
  const [categoria, setCategoria] = useState();
  const { categoryId } = useParams();

  const sumarPag = (e) => {
    e.preventDefault();

    if (pageNext > 0) {
      setPageNext((prevPage) => prevPage + 1);
      console.log(pageNext);
    }
  };

  const restarPag = (e) => {
    e.preventDefault();

    if (pageNext > 0) {
      setPageNext((prevPage) => prevPage - 1);
      console.log(pageNext);
    }
  };

  useEffect(() => {
    getCollection("item").then((result) => {
      setCategoria(result);
    });
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${pageNext}`
        );
        if (!response.ok) {
          throw new Error("Ningún producto encontrado");
        }
        const data = await response.json();

        if (pageNext === 1) {
          const combinedItems = [...data.results, ...categoria];
          setItemList(combinedItems);
        } else {
          setItemList(data.results);
        }
      } catch (error) {
        console.error("Ocurrió un error buscando la tienda:", error);
      }
    }

    fetchData();
  }, [categoria, pageNext]);

  let productoFiltrado;
  if (
    categoryId !== "Human" &&
    categoryId !== "Alien" &&
    categoryId !== "Humanoid"
  ) {
    productoFiltrado = itemList; // Mostrar todos los elementos sin filtrar
  } else {
    productoFiltrado = itemList.filter((item) => item.species === categoryId);
  }

  if (itemList.length === 0) {
    return (
      <div className="container--loader">
        <Loader />;
      </div>
    );
  } else {
    return (
      <div>
        <div className="container__titulo--cartas">
          <h1 className="titulo__principal--cartas">
            Cartas de Rick And Morty
          </h1>
        </div>
        <div className="container__img">
          {productoFiltrado.map((item) => (
            <Link to={`/item/${item.id}`} state={{ item }} key={item.id}>
              <Item
                name={item.name}
                image={item.image}
                id={item.id}
                species={item.species}
              />
            </Link>
          ))}
        </div>
        <div className="container--btn__navegacion">
          <button onClick={restarPag} className="btn--navegacion">
            PREVIOUS
          </button>
          <span className="pag--navegacion">{pageNext}</span>
          <button onClick={sumarPag} className="btn--navegacion">
            NEXT
          </button>
        </div>
      </div>
    );
  }
};

export default ItemListContainer;
