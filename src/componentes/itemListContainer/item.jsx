import React from "react";

export const Item = (item) => {
  return (
    <div className="container__item">
      <div className="container__imagen">
        <div className="container__item--numero">
          <h1 className="item__titulo">{item.name}</h1>
        </div>
        <img className="item__img" src={item.image} alt="imagen" srcset="" />
      </div>

      <div className="container__item--precio">
        <h2 className="item__precio">$ 350</h2>
      </div>
    </div>
  );
};
export default Item;
