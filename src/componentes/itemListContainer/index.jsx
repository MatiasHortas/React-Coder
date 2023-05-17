import { useState, useEffect } from "react";
import "./style.css";
import Item from "./item";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = ({}) => {
  const [itemList, setItemList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=1`
        );
        if (!response.ok) {
          throw new Error("Ningún producto encontrado");
        }
        const data = await response.json();
        setItemList(data.results);
      } catch (error) {
        console.error("Ocurrió un error buscando la tienda:", error);
      }
    }

    fetchData();
  }, []);

  let productoFiltrado;
  if (categoryId !== "Human" && categoryId !== "Alien") {
    productoFiltrado = itemList; // Mostrar todos los elementos sin filtrar
  } else {
    productoFiltrado = itemList.filter((item) => item.species === categoryId);
  }

  return (
    <div>
      <div className="container__titulo--cartas">
        <h1 className="titulo__principal--cartas">Cartas de Rick And Morty</h1>
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
    </div>
  );
};

export default ItemListContainer;
