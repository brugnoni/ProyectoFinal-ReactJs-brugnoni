import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    console.log(
      `Se agregaron al carrito ${cantidad} productos - Producto agregado: ${productSelected.title}`
    );
  };

  return (
    <div>
      <h1>{productSelected.title}</h1>
      <img src={productSelected.img} alt="imagenSeleccionada" height="200" />
      <ItemCount stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
